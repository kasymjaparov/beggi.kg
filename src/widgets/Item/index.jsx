import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"
import image from "../../../public/example.jpg"
import Image from "next/image"
import { useRouter } from "next/router"

const Item = () => {
  const router = useRouter()
  return (
    <Box>
      <Box sx={{ position: "relative", width: "100%", height: "280px" }}>
        <Image
          fill={true}
          src={image}
          alt="image"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Stack sx={{ cursor: "pointer", my: "10px" }} alignItems="center">
        <Typography sx={{ fontWeight: 700 }}>Костюм "FIY MOOD"</Typography>
        <Typography>Размеры: 50/52/54</Typography>
        <Typography>1050 сом</Typography>
      </Stack>
      <Stack>
        <Button
          onClick={() => router.push("/cart")}
          sx={{ width: "80%", margin: "0 auto 0 auto" }}
          variant="contained"
        >
          Добавить в корзину
        </Button>
      </Stack>
    </Box>
  )
}

export default Item
