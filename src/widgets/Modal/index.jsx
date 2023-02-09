import endpoints from "@/api"
import { CartContext } from "@/features/Cart/CartContext"
import { toastError, toastSuccess } from "@/toast"
import { Box, Button, Dialog, Stack, Typography } from "@mui/material"
import React, { useContext } from "react"

const Modal = ({ open, handleClose, input }) => {
  const { cart } = useContext(CartContext)
  const send = async () => {
    try {
      const requestBody = JSON.stringify({
        name: input.fio,
        phone_number: input.phone,
        email: input.email,
        product_list: cart.map(item => {
          return {
            product_id: item.id,
            quantity: item.amount,
          }
        }),
      })
      const res = await fetch(endpoints.orders, {
        method: "POST",
        referrerPolicy: "unsafe_url",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
      const json = await res.json()
      toastSuccess("Вы успешно отправили заявку на покупку.")
    } catch (error) {
      toastError("Произошла ошибка при отправке заявки. Повторите позже.")
    } finally {
      handleClose()
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          padding: "20px",
          width: "600px",
          "@media(max-width:768px)": {
            width: "300px",
          },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "20px",
            marginBottom: "21px",
            textAlign: "center",
            fontWeight: 700,
            "@media(max-width:768px)": {
              fontSize: "18px",
            },
          }}
        >
          Завершите покупку
        </Typography>
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
          <Typography sx={{ fontWeight: 700 }}>
            {cart.reduce((acc, obj) => acc + obj.amount * obj.price, 0)} сом
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          sx={{
            "& *": {
              fontSize: "16px",
              "@media(max-width:640px)": {
                fontSize: "12px",
              },
            },
          }}
        >
          <Typography>ФИО - {input.fio}</Typography>
          <Typography>Номер телефон - {input.phone}</Typography>
          <Typography>Почта - {input.email}</Typography>
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: "16px" }}
          onClick={() => send()}
        >
          Отправить
        </Button>
      </Box>
    </Dialog>
  )
}

export default Modal
