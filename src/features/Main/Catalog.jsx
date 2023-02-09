import Item from "@/widgets/Item"
import { Grid, Box } from "@mui/material"
import React from "react"
import Filter from "@/widgets/Filter"
import CustomPagination from "@/widgets/Pagination"
import { useRouter } from "next/router"

const Catalog = ({ list }) => {
  const router = useRouter()
  const [page, setPage] = React.useState(Number(router.query.page) || 1)
  const handleChangePage = (event, page) => {
    setPage(page)
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
      },
    })
  }

  return (
    <Box
      sx={{
        my: "50px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
          <Filter />
        </Grid>
        <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            {list.results ? (
              list.results.map((item, index) => {
                return (
                  <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Item data={item} />
                  </Grid>
                )
              })
            ) : (
              <Box>Товары отсутствуют</Box>
            )}
          </Grid>
        </Grid>
        <CustomPagination
          handleChangePage={handleChangePage}
          defaultPage={1}
          currentPage={page}
          pagesCount={list.num_pages}
        />
      </Grid>
    </Box>
  )
}

export default Catalog
