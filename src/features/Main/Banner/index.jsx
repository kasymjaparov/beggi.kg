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
          <Typography
            component="h1"
            sx={{
              fontSize: "50px",
              mt: "30px",
              "@media(max-width:640px)": {
                fontSize: "30px",
                mt: "0px",
                mb: "20px",
              },
            }}
          >
            Качество пошива которое увеличит ваши продажи
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: "30px",
              my: "16px",
              "@media(max-width:640px)": {
                fontSize: "19px",
                mt: "0px",
              },
            }}
          >
            Поможем запустить производство одежды "под ключ"
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
              Посмотреть каталог
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
