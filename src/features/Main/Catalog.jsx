import Item from "@/widgets/Item"
import { Grid, Box } from "@mui/material"
import React from "react"
import Filter from "@/widgets/Filter"

const Catalog = () => {
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
            {[...Array(8)].map((item, index) => {
              return (
                <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Item />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Catalog
