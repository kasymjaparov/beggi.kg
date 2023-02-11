import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import { CartContext } from "@/features/Cart/CartContext"
import { useContext } from "react"
import { toastInfo, toastSuccess } from "@/toast"
import { useRouter } from "next/router"

const Item = ({ data }) => {
  const { cart, setCart } = useContext(CartContext)
  const router = useRouter()
  const addToCart = () => {
    if (cart.find(item => item.id == data.id)) {
      toastInfo("Товар уже есть в корзине")
    } else {
      setCart([...cart, { ...data, amount: 1 }])
      toastSuccess("Товар добавлен в корзину")
    }
  }
  return (
    <Box>
      <Box sx={{ position: "relative", width: "100%", height: "280px" }}>
        {data.product_gallery.length >= 1 ? (
          <Image
            fill={true}
            src={data.product_gallery[0].image}
            alt="image"
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "280px",
              width: "100%",
              margin: "0 auto 0 auto",
              textAlign: "center",
              background: "#f3f1e6",
            }}
          >
            Картинка отсутствует
          </Box>
        )}
      </Box>

      <Stack
        sx={{ cursor: "pointer", my: "0px" }}
        onClick={() => router.push({ pathname: "/" + data.id })}
        alignItems="center"
      >
        <Typography sx={{ fontWeight: 700 }}>{data.name}</Typography>
        <Typography>{data.price} сом</Typography>
      </Stack>
      {data.in_stock ? (
        <Stack>
          <Button
            onClick={() => addToCart()}
            sx={{ width: "80%", margin: "0 auto 0 auto" }}
            variant="contained"
          >
            Добавить в корзину
          </Button>
        </Stack>
      ) : (
        <Typography sx={{ textAlign: "center", color: "gray" }}>
          Нет в наличие
        </Typography>
      )}
    </Box>
  )
}

export default Item
