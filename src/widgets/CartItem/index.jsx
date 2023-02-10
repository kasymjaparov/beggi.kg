import { CartContext } from "@/features/Cart/CartContext"
import {
  Box,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const CartItem = ({ data }) => {
  const isMobile = useMediaQuery("@media(max-width:640px)")
  const { cart, setCart } = useContext(CartContext)
  const [counter, setCounter] = useState(data.amount)
  const deleteItem = id => {
    let newCart = cart
    newCart = newCart.filter(item => {
      return item.id != id
    })
    setCart(newCart)
  }
  useEffect(() => {
    const newCart = cart
    newCart.find(i => i.id == data.id).amount = counter
    setCart(newCart)
  }, [counter])
  return (
    <Stack component="li" spacing={2} direction="row">
      {isMobile ? null : (
        <Box sx={{ position: "relative", width: "150px", height: "250px" }}>
          {data.product_gallery.length >= 1 ? (
            <Image
              src={data.product_gallery[0].image}
              alt={data.name}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                textAlign: "center",
              }}
            >
              Картинка отсутствует
            </Box>
          )}
        </Box>
      )}
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          paddingBottom: "10px",
          width: "100%",
        }}
      >
        <Typography
          component="h3"
          sx={{
            width: "100px",
            fontSize: "17px",
            fontWeight: "700",
            "@media(max-width:1020px)": {
              fontSize: "16px",
            },
            "@media(max-width:968px)": {
              fontSize: "15px",
            },
            "@media(max-width:768px)": {
              fontSize: "14px",
            },
            "@media(max-width:640px)": {
              fontSize: "12px",
            },
          }}
        >
          {data.name}
        </Typography>
        <Stack direction="row">
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => setCounter(counter - 1)}
          >
            -
          </Typography>
          <OutlinedInput
            type="number"
            sx={{
              width: "62px",
              border: "0.883721px solid #000000",
              borderRadius: "4.4186px",
              margin: "0 12px",
              "@media(max-width:650px)": {
                width: "55px",
                fontSize: "10px",
              },
            }}
            error={counter <= 0}
            value={counter}
            onChange={e => setCounter(Number(e.target.value))}
            inputProps={{
              style: {
                padding: "2px 14px",
              },
            }}
          />
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => setCounter(counter + 1)}
          >
            +
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "#0077FF",
            fontWeight: 700,
            "@media(max-width:650px)": {
              fontSize: "12px",
            },
          }}
        >
          {data.price} сом
        </Typography>
        <DeleteForeverIcon
          onClick={() => deleteItem(data.id)}
          sx={{ color: "red", cursor: "pointer" }}
        />
      </Stack>
    </Stack>
  )
}
export default CartItem
