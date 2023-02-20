import React, { useState, useEffect } from "react"
import { Grid, Box, Typography, Button, Stack } from "@mui/material"
import styles from "./style.module.css"
import { useRouter } from "next/router"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import logo_image from "/public/logo.png"
import Image from "next/image"

const headerTitleStyles = {
  fontWeight: 700,
  fontSize: "20px",
  color: "#fff",
}

const headerLinksStyles = {
  display: "block",
  fontWeight: 600,
  fontSize: "17px",
  lineHeight: "17px",
  textTransform: "capitalize",
  color: "#FFFFFF",
  ml: "20px",
  transition: "all 0.3s ease",
  "@media(min-width:768px) and (max-width:1224px)": {
    fontSize: "14px",
    lineHeight: "12px",
    ml: "10px",
  },
  "@media(min-width:1024px) and (max-width:1500px)": {
    fontSize: "17px",

    lineHeight: "14px",
    ml: "15px",
  },
  "&:hover": {
    color: "#FFD458",
  },
}

const links = [
  { text: "Каталог", href: "/#catalog" },
  { text: "О компании", href: "/#about" },
  { text: "FAQ", href: "/#faq" },
  { text: "Как заказать", href: "/#advantages" },
  { text: "Контакты", href: "/#contact" },
]

function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const handleMobileMenuActiveChange = () => {
    setIsMobileMenuActive(!isMobileMenuActive)
  }

  const router = useRouter()
  const goByLink = link => {
    router.push(link)
    setIsMobileMenuActive(false)
  }

  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuActive])
  return (
    <header className={`${styles.header}`}>
      <Box
        sx={{
          height: "70px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
      >
        <Grid
          container
          direction="row"
          xs={6}
          sm={4}
          md={1}
          lg={3}
          xl={3}
          alignItems="center"
          onClick={() => goByLink("/")}
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="h1" sx={headerTitleStyles}>
            <Image src={logo_image} alt="BEGGI" width={50} height={50} />
          </Typography>
        </Grid>

        <Grid
          sx={{
            "@media(min-width:0px) and (max-width:768px)": {
              display: "none",
            },
            "@media(min-width:768px)": {
              display: "flex",
            },
          }}
          container
          direction="row"
          xs={5}
          sm={4}
          md={8}
          lg={7}
          xl={6}
        >
          {links.map(link => (
            <Button
              onClick={() => goByLink(link.href)}
              key={link.text}
              sx={headerLinksStyles}
              disableRipple={true}
            >
              {link.text}
            </Button>
          ))}
        </Grid>

        <Grid
          xs={2}
          sm={2}
          container
          justifyContent={"flex-end"}
          sx={{
            cursor: "pointer",
            "@media(min-width:0px) and (max-width:768px)": {
              display: "flex",
            },
            "@media(min-width:768px)": {
              display: "none",
            },
          }}
        >
          <Button alt="Burger Menu Icon" onClick={handleMobileMenuActiveChange}>
            <MenuIcon sx={{ color: "#fff", fontSize: "30px" }} />
          </Button>
        </Grid>

        <Box
          sx={{
            zIndex: 1001,
            display: "flex",
            position: "fixed",
            top: `${isMobileMenuActive ? "0" : "-180%"}`,
            left: 0,
            transition: "top 0.4s",
            background: "#1e1e1e",
            height: "100%",
            width: "100vw",
            padding: "0px 35px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
              mt: "20px",
            }}
          >
            <Button onClick={handleMobileMenuActiveChange}>
              <CloseIcon sx={{ color: "white", fontSize: "30px" }} />
            </Button>
          </Box>
          <Stack onClick={() => goByLink("/")} alignItems={"center"}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "30px",
                mb: "100px",
                fontWeight: 700,
              }}
            >
              <Image src={logo_image} alt="BEGGI" width={100} height={100} />
            </Typography>
          </Stack>
          <Stack
            rowGap={"25px"}
            alignItems="center"
            sx={{
              "& button": {
                display: "block",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "23px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                width: "fit-content",
              },
            }}
          >
            {links.map(link => (
              <Button
                onClick={() => goByLink(link.href)}
                key={link.text}
                sx={{ ...headerLinksStyles, ml: "0" }}
              >
                {link.text}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </header>
  )
}

export default Header
