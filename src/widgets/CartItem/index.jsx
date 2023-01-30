import {
  Box,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import Image from "next/image"
import React from "react"

const CartItem = ({ data }) => {
  const isMobile = useMediaQuery("@media(max-width:650px)")

  return (
    <Stack component="li" alignItems="center" spacing={2} direction="row">
      {isMobile ? null : (
        <Box sx={{ position: "relative", width: "150px", height: "84px" }}>
          <Image
            src={data.image}
            alt={data.title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
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
        <Stack spacing={1}>
          <Typography
            component="h3"
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              "@media(max-width:650px)": {
                fontSize: "8px",
              },
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              "@media(max-width:650px)": {
                fontSize: "8px",
              },
            }}
            component="h4"
          >
            {data.subtitle}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              "@media(max-width:650px)": {
                fontSize: "12px",
              },
            }}
            component="h5"
          >
            {data.category}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography sx={{ cursor: "pointer" }}>-</Typography>
          <OutlinedInput
            type="number"
            sx={{
              width: "62px",
              border: "0.883721px solid #000000",
              borderRadius: "4.4186px",
              margin: "0 12px",
              "@media(max-width:650px)": {
                width: "55px",
                fontSize: "8px",
              },
            }}
            value={data.amount}
            inputProps={{
              style: {
                padding: "2px 24px",
              },
            }}
          />
          <Typography sx={{ cursor: "pointer" }}>+</Typography>
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
      </Stack>
    </Stack>
  )
}

export default CartItem
