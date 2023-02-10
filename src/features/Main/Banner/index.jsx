import { Box, Grid, Typography, Button } from "@mui/material"
import React from "react"

const Banner = () => {
  return (
    <Box
      sx={{
        background: "#dbcc8f",
        height: "80vh",
        overflowX: "hidden",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xl={6} lg={4} md={12} sm={12} xs={12} sx={{ pl: "30px" }}>
          <Box
            component="span"
            sx={{
              background: "#000",
              color: "#fff",
              padding: "4px 10px",
            }}
          >
            Новое поступление
          </Box>
          <Typography component="h1" sx={{ fontSize: "50px", mt: "30px" }}>
            Новая зимняя коллекция
          </Typography>
          <Typography
            component="h2"
            sx={{
              mb: "16px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            fugiat neque aspernatur tempore nam aliquam aliquid ab officiis quas
            quisquam praesentium officia!
          </Typography>
          <a href="#catalog">
            <Button
              variant="contained"
              sx={{
                background: "#c2a942",
                color: "#fff",
                boxShadow: "0px",
                "&:hover": {
                  background: "#c2a942",
                  color: "#fff",
                  boxShadow: "0px",
                },
              }}
            >
              Посмотреть
            </Button>
          </a>
        </Grid>
        <Grid item xl={6} lg={8} md={0} sm={0} xs={0}>
          <div className="bannerImage"></div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner
