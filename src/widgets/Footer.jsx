import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import whatsapp from "/public/whatsapp.svg"
import instagram from "/public/instagram.svg"
import facebook from "/public/facebook.svg"

const Footer = () => {
  const navLinks = [
    { text: "О компании", href: "/" },
    { text: "Возможности", href: "/" },
    { text: "Каталог", href: "/" },
    { text: "Контакты", href: "/" },
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
              LOGO
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            "@media(max-width:640px )": {
              display: "none",
            },
          }}
        >
          <Stack
            component="nav"
            sx={{
              "& a": {
                color: "white",
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
                + 996 (505) 031222
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
                + 996 (505) 031222
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
                ул.Киевская 77
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Image
              width={35}
              style={{ cursor: "pointer" }}
              src={instagram}
              alt="instagram icon"
            />
            <Image
              width={35}
              style={{ cursor: "pointer" }}
              src={facebook}
              alt="facebook icon"
            />
            <Image
              width={35}
              style={{ cursor: "pointer" }}
              src={whatsapp}
              alt="whatsapp icon"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
