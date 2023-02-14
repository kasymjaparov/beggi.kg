import React, { useContext } from "react"
import { Box, Stack, Typography } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Link from "next/link"
import { CartContext } from "@/features/Cart/CartContext"

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingX: "80px",
        position: "fixed",
        top: 0,
        width: "100vw",
        zIndex: 5,
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
        <Typography sx={{ color: "#fff" }}>BEGGI</Typography>
      </Link>

      <Link href="/cart">
        <Box sx={{ position: "relative" }}>
          <ShoppingCartIcon sx={{ color: "#fff" }} />
          {cart.length >= 1 ? (
            <Box
              sx={{
                padding: "5px",
                color: "#fff",
                position: "absolute",
                right: "-10px",
                top: "-10px",
                background: "#1976d2",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cart.length}
            </Box>
          ) : null}
        </Box>
      </Link>
    </Stack>
  )
}

export default Header
