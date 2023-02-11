import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  OutlinedInput,
} from "@mui/material"
import React, { useContext, useState } from "react"
import MainLayout from "@/layouts/MainLayout"
import CartItem from "@/widgets/CartItem"
import { CartContext } from "@/features/Cart/CartContext"
import Modal from "@/widgets/Modal"
import { toastError } from "@/toast"

const boxStyles = {
  background: "#fff",
  minHeight: "80vh",
  padding: "60px 80px 0px 80px",
  "@media(max-width:1200px )": {
    padding: "30px 70px 40px 70px",
  },
  "@media(max-width:768px)": {
    padding: "30px 30px 40px 30px",
  },
}

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState({ fio: "", phone: "", email: "" })
  const handleForm = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleOpen = () => {
    if (input.email.length && input.fio.length && input.phone.length) {
      setOpen(true)
    } else {
      toastError("Заполните все данные")
    }
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <MainLayout title="Корзина">
      <Modal open={open} handleClose={handleClose} input={input} />
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
        {cart.length <= 0 ? (
          <Box>Корзина пуста</Box>
        ) : (
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item lg={7} sm={12} xs={12}>
              <Stack direction="column" spacing={2} component="ul">
                {cart.map(item => {
                  return <CartItem data={item} key={item.id} />
                })}
              </Stack>
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  mb: "20px",
                  "@media(max-width:768px)": {
                    fontSize: "18px",
                  },
                }}
              >
                Сделать заказ
              </Typography>

              <Stack spacing={2} sx={{ mb: "16px" }}>
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>ФИО</Typography>
                  <OutlinedInput
                    value={input.fio}
                    onChange={e => handleForm(e)}
                    name="fio"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    Номер телефона
                  </Typography>
                  <OutlinedInput
                    value={input.phone}
                    onChange={e => handleForm(e)}
                    name="phone"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>Почта</Typography>
                  <OutlinedInput
                    value={input.email}
                    onChange={e => handleForm(e)}
                    name="email"
                    fullWidth
                    size="small"
                    type="email"
                  />
                </Box>
              </Stack>

              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                  boxShadow: "0px",
                  width: "100%",
                }}
              >
                Отправить
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </MainLayout>
  )
}

export default Cart
