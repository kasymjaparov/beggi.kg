import React from "react"
import { Box, Badge, Stack, Typography } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Link from "next/link"

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingX: "80px",
        height: "70px",
        background: "black",
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
      <Link href="/">
        <Typography sx={{ color: "#fff" }}>LOGO</Typography>
      </Link>

      <Box>
        <Link href="/cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{ color: "#fff" }} />
          </Badge>
        </Link>
      </Box>
    </Stack>
  )
}

export default Header
