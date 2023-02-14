import Item from "@/widgets/Item"
import { Box, Grid, Skeleton, Stack } from "@mui/material"
import React from "react"

const CatalogList = ({ list, loading }) => {
  if (loading) {
    return (
      <Grid container spacing={2}>
        {Array(8)
          .fill(8)
          .map((item, index) => {
            return (
              <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <Stack spacing={1}>
                  <Skeleton variant="rectangular" height={280} />
                  <Stack alignItems="center">
                    <Skeleton variant="rectangular" height={25} width={"50%"} />
                  </Stack>
                  <Stack alignItems="center">
                    <Skeleton variant="rounded" height={35} width={"80%"} />
                  </Stack>
                </Stack>
              </Grid>
            )
          })}
      </Grid>
    )
  }
  return (
    <Grid container spacing={2}>
      {list.results.length >= 1 ? (
        list.results.map((item, index) => {
          return (
            <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Item data={item} />
            </Grid>
          )
        })
      ) : (
        <Box sx={{ mt: "20px", fontWeight: 700 }}>Товары отсутствуют</Box>
      )}
    </Grid>
  )
}

export default CatalogList
