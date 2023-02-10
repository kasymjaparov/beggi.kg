import React, { useState } from "react"
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material"
import { toastError, toastSuccess } from "@/toast"
import endpoints from "@/api"

const ContactUs = () => {
  const [form, setForm] = useState({ phone: "", message: "" })
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const click = async e => {
    try {
      e.preventDefault()
      if (!form.phone || !form.message) {
        toastError("Заполните все поля")
      } else {
        const res = await fetch(endpoints.contact, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        })
        setForm({ phone: "", message: "" })
      }
    } catch (error) {
    } finally {
      toastSuccess("Спасибо. Мы обяазтельно свяжемся с вами.")
    }
  }
  return (
    <Box sx={{}}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: 700,
          "@media(max-width:968px)": {
            fontSize: "23px",
          },
          "@media(max-width:768px)": {
            fontSize: "20px",
          },
        }}
        variant="h1"
      >
        Обратная связь
      </Typography>

      <Stack
        component="form"
        spacing={3}
        direction={{
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
        sx={{
          py: "60px",
          "@media(max-width:768px)": {
            py: "20px",
          },
        }}
        onSubmit={click}
      >
        <FormControl sx={{}}>
          <OutlinedInput
            placeholder="+996 (000) 000 000"
            size="small"
            name="phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
            sx={{
              background: "#FFFFFF",
              borderRadius: "9px",
              boxShadow:
                "0px 0px 3.58696px rgba(0, 0, 0, 0.25), inset 0px 0px 4.4837px #FFFFFF, inset 0px 0.896739px 4.4837px rgba(0, 0, 0, 0.25)",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            width: "100%",
          }}
        >
          <OutlinedInput
            placeholder="Сообщение"
            size="small"
            name="message"
            value={form.message}
            onChange={handleChange}
            sx={{
              background: "#FFFFFF",
              borderRadius: "9px",
              boxShadow:
                "0px 0px 3.58696px rgba(0, 0, 0, 0.25), inset 0px 0px 4.4837px #FFFFFF, inset 0px 0.896739px 4.4837px rgba(0, 0, 0, 0.25)",
              "@media(max-width:768px)": {
                height: "120px",
              },
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            mb: "1px",
          }}
          type="submit"
        >
          Отправить
        </Button>
      </Stack>
    </Box>
  )
}

export default ContactUs
