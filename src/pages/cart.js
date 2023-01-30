import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  OutlinedInput,
} from "@mui/material"
import cart_item_image from "../../public/example.jpg"
import React from "react"
import MainLayout from "@/layouts/MainLayout"
import CartItem from "@/widgets/CartItem"
import { Outbound } from "@mui/icons-material"

const boxStyles = {
  background: "#fff",
  minHeight: "100vh",
  padding: "30px 80px 70px 80px",
  "@media(max-width:1200px )": {
    padding: "30px 70px 70px 70px",
  },
  "@media(max-width:768px )": {
    padding: "30px 30px 70px 30px",
  },
}

const Cart = ({ cartItems }) => {
  return (
    <MainLayout title="Корзина">
      <Box sx={boxStyles}>
        <Typography
          component="h1"
          sx={{
            fontSize: "20px",
            marginBottom: "21px",
            fontWeight: 700,
            "@media(max-width:768px)": {
              fontSize: "18px",
            },
          }}
        >
          Корзина
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={8} sm={12} xs={12}>
            <Stack direction="column" spacing={2} component="ul">
              {cartItems.map(item => {
                return <CartItem data={item} key={item.id} />
              })}
            </Stack>
          </Grid>
          <Grid item lg={4} sm={12} xs={12}>
            <Typography
              sx={{
                fontSize: "18px",
                marginBottom: "13px",
              }}
            >
              Итог заказа
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                paddingY: "25px",
                borderTop: "1px solid #000000",
                borderBottom: "1px solid #000000",
                marginBottom: "13px",
                "& *": {
                  fontSize: "16px",
                },
              }}
            >
              <Typography>4 продукта </Typography>
              <Typography>2 396 сом</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                mb: "20px",
                "& *": {
                  fontSize: "16px",
                },
              }}
            >
              <Typography>Общая сумма</Typography>
              <Typography>2 396 сом</Typography>
            </Stack>
            <Stack spacing={2} sx={{ mb: "16px" }}>
              <Box>
                <Typography sx={{ fontSize: "14px" }}>ФИО</Typography>
                <OutlinedInput fullWidth size="small" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "14px" }}>
                  Номер телефона
                </Typography>
                <OutlinedInput fullWidth size="small" />
              </Box>
            </Stack>

            <Button
              variant="contained"
              sx={{
                boxShadow: "0px",
                width: "100%",
              }}
            >
              Заказать
            </Button>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  )
}
export const getServerSideProps = async context => {
  const cartItems = [
    {
      id: 1,
      price: 599,
      image: cart_item_image,
      category: "Кардиган",
      title: "Gucci rx580",
      subtitle: "Женский",
      amount: 1,
    },
    {
      id: 1,
      price: 599,
      image: cart_item_image,
      category: "Кардиган",
      title: "Gucci rx580",
      subtitle: "Женский",
      amount: 1,
    },
    {
      id: 1,
      price: 599,
      image: cart_item_image,
      category: "Кардиган",
      title: "Gucci rx580",
      subtitle: "Женский",
      amount: 1,
    },
    {
      id: 1,
      price: 599,
      image: cart_item_image,
      category: "Кардиган",
      title: "Gucci rx580",
      subtitle: "Женский",
      amount: 1,
    },
  ]
  return {
    props: { cartItems },
  }
}
export default Cart
