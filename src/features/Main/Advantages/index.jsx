import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"

const Advantages = () => {
  return (
    <Box
      id="advantages"
      sx={{
        paddingBottom: "50px",
        pt: "50px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: 700,
          mb: "16px",
          "@media(max-width:968px)": {
            fontSize: "23px",
          },
          "@media(max-width:768px)": {
            fontSize: "20px",
          },
        }}
        variant="h1"
      >
        Как заказать товар
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
        }}
      >
        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <SettingsPhoneIcon sx={{ fontSize: "60px" }} />
            </Box>
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "gray",
                  textAlign: "center",
                  "@media(max-width:768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Отправляете понравившийся вами товар или отправляете свою модель
                которую хотели бы отшить. Наши сотрудники в скорейшем времени
                свяжутся с вами
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <ShoppingCartCheckoutIcon sx={{ fontSize: "60px" }} />
            </Box>
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "gray",
                  textAlign: "center",
                  "@media(max-width:768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Мы просчитаем себестоимость вашей модели предложим сроки и цену.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <AttachMoneyIcon sx={{ fontSize: "60px" }} />
            </Box>
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "gray",
                  textAlign: "center",
                  "@media(max-width:768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                После обоюдной договоренности вы отправляете отплату 50% от
                общей суммы заказа и мы запускаем производство
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <ThumbUpIcon sx={{ fontSize: "60px" }} />
            </Box>
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "gray",
                  textAlign: "center",
                  "@media(max-width:768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                После завершения производства перечисляете оставшиеся 50% и мы
                отгружаем това в логистическую компанию которая удобно вам.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Advantages
