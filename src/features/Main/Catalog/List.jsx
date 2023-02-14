import Item from "@/widgets/Item"
import { Box, Grid, Skeleton, Stack } from "@mui/material"
import React from "react"

const CatalogList = ({ list, loading }) => {
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
