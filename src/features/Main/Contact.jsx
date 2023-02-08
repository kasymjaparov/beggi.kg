import { Box, Grid, Typography } from "@mui/material"
import React from "react"

const Contact = () => {
  return (
    <Box
      sx={{
        paddingY: "70px",
        "@media(max-width:640px)": {
          py: "0",
          pb: "50px",
          "& iframe": {
            height: "300px",
          },
        },
      }}
    >
      <Grid container spacing={0}>
        <Grid
          sx={{
            padding: "30px 0",
            "@media(max-width:640px)": {
              "& *": {
                textAlign: "center",
              },
            },
          }}
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: "26px",
              fontSize: "28px",
              "@media(max-width:1020px)": {
                fontSize: "24px",
                mb: "26px",
              },
              "@media(max-width:968px)": {
                mb: "20px",
                fontSize: "20px",
              },
              "@media(max-width:768px)": {
                fontSize: "20px",
                mb: "17px",
              },
              "@media(max-width:640px)": {
                fontSize: "17px",
              },
            }}
          >
            Наш адрес
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: "17px",
              fontSize: "16px",
              "@media(max-width:1020px)": {
                fontSize: "14px",
                mb: "13px",
              },
              "@media(max-width:968px)": {
                mb: "13px",
                fontSize: "13px",
              },
              "@media(max-width:768px)": {
                mb: "13px",
              },
              "@media(max-width:640px)": {
                fontSize: "12px",
              },
            }}
          >
            Кыргызстан, Бишкек
          </Typography>

          <Box component="address" sx={{ mb: "13px" }}>
            <Typography sx={{ fontWeight: 700, mb: "8px" }}>
              Контакты
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                "@media(max-width:1020px)": {
                  fontSize: "14px",
                  mb: "13px",
                },
                "@media(max-width:968px)": {
                  mb: "13px",
                  fontSize: "13px",
                },
                "@media(max-width:768px)": {
                  mb: "13px",
                },
                "@media(max-width:640px)": {
                  fontSize: "12px",
                },
              }}
            >
              +996708197233
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          height={{
            xl: "500px",
            lg: "500px",
            md: "500px",
            sm: "300px",
            xs: "300px",
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b7cbbf870527bd7dd16db04f8fe01218529b26b4015915f328f77d7dfa14ef7&amp;source=constructor"
            width="100%"
            height="100%"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
