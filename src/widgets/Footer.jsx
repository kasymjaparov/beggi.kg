import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import whatsapp from "/public/whatsapp.svg"
import instagram from "/public/instagram.svg"

const Footer = () => {
  const navLinks = [
    { text: "Каталог", href: "#catalog" },
    { text: "О компании", href: "#about" },
    { text: "FAQ", href: "#faq" },
    { text: "Как заказать", href: "#advantages" },
    { text: "Контакты", href: "#contact" },
  ]

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "32px 0",
        color: "#fff",
        background: "black",
        paddingX: "80px",
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
      component="footer"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            "@media(max-width:640px)": {
              textAlign: "center",
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              "& h5": {
                marginLeft: "10px",
              },
              "@media(max-width:1024px)": {
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "10px",
                "& h5": {
                  textAlign: "center",
                  marginTop: "5px",
                },
              },
              "@media(max-width:768px)": {
               "& h5": {
                marginLeft: "0px",
              },
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                "@media(max-width:640px)": {
                  fontSize: "21px",
                },
              }}
            >
              BEGGI
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Stack
            component="nav"
            sx={{
              "& a": {
                color: "white",
              },
              "@media(max-width:640px)": {
                textAlign: "center",
              },
            }}
            spacing={1}
          >
            {navLinks.map(navLink => {
              return (
                <Link key={navLink.text} href={navLink.href}>
                  <Typography
                    component="h6"
                    sx={{
                      fontSize: "14px",
                      "@media(max-width:768px)": {
                        fontSize: "10px",
                      },
                      "@media(max-width:640px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    {navLink.text}
                  </Typography>
                </Link>
              )
            })}
          </Stack>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            "@media(max-width:640px)": {
              textAlign: "center",
            },
          }}
        >
          <Stack component="address" spacing={2}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",

                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                График
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Работаем каждый день без выходных
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Время с 08:00 - до 17 .00
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",

                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Контакты
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                +996708197233
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",

                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Адрес
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  "@media(max-width:768px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:640px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Кыргызстан, город бишкек
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <a href="http://instagram.com/_u/beggibrand_kg/">
              <Image
                width={35}
                style={{ cursor: "pointer" }}
                src={instagram}
                alt="instagram icon"
              />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=708197233">
              <Image
                width={35}
                style={{ cursor: "pointer" }}
                src={whatsapp}
                alt="whatsapp icon"
              />
            </a>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
