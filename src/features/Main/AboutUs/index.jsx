import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import image from "/public/example_aboutus.jpg"

const AboutUs = () => {
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      sx={{
        background: "#ebebee",
        paddingY: "75px",
        paddingX: "80px",
        mb: "16px",

        "@media(max-width:1200px )": {
          paddingX: "70px",
        },
        "@media(max-width:768px )": {
          paddingX: "50px",
        },
        "@media(max-width:640px )": {
          paddingX: "30px",
        },
      }}
    >
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: 700,
              mb: "16px",
              "@media(max-width:968px)": {
                fontSize: "23px",
              },
              "@media(max-width:768px)": {
                fontSize: "20px",
              },
            }}
            variant="h1"
          >
            О нас:
          </Typography>
          <Box
            sx={{
              lineHeight: 1.55,
              fontSize: "16px",

              "@media(max-width:768px)": {
                fontSize: "14px",
              },
            }}
          >
            Мы производители женской молодежной одежды оптом для стран СНГ.
            <Box sx={{ mt: "16px" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "25px",
                  "@media(max-width:968px)": {
                    fontSize: "23px",
                  },
                  "@media(max-width:768px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Для крупного опта
              </Typography>
              <Box
                sx={{
                  "& *": {
                    fontSize: "16px",
                    "@media(max-width:768px)": {
                      fontSize: "14px",
                    },
                  },
                }}
              >
                <Typography>-Специальные цены на крупный опт</Typography>
                <Typography>-Возможность брендирования</Typography>
                <Typography>
                  -Производство моделей под заказ от 300шт (5 рулонов)
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: "16px" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "25px",
                  "@media(max-width:968px)": {
                    fontSize: "23px",
                  },
                  "@media(max-width:768px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Для маркетплейсов
              </Typography>
              <Box
                sx={{
                  "& *": {
                    fontSize: "16px",
                    "@media(max-width:768px)": {
                      fontSize: "14px",
                    },
                  },
                }}
              >
                <Typography>
                  -Возможность брендирования и упаковки по вашему тз
                </Typography>
                <Typography>
                  -Возможность повтора модели в ваших расцветках
                </Typography>
                <Typography>
                  -Хранениев архиве ваших образцов на случай повтора
                </Typography>
                <Typography>-Спец. цены в зависимости от объема</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "400px",
            borderRadius: "10px",
            "@media(max-width:768px)": {
              height: "280px",
            },
          }}
        >
          <Image
            fill={true}
            src={image}
            alt="image"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default AboutUs
