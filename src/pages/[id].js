import endpoints from "@/api"
import { CartContext } from "@/features/Cart/CartContext"
import MainLayout from "@/layouts/MainLayout"
import { toastError, toastInfo, toastSuccess } from "@/toast"
import Item from "@/widgets/Item"
import { Button, Grid, OutlinedInput, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import Image from "next/image"
import React, { useContext, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TelegramIcon from "@mui/icons-material/Telegram"
import FacebookIcon from "@mui/icons-material/Facebook"
import { useRouter } from "next/router"

export default function ProductDetail({ productDetail, list, hostname }) {
  const [counter, setCounter] = useState(1)
  const galleryExist = productDetail.product_gallery.length >= 1
  const { cart, setCart } = useContext(CartContext)
  const router = useRouter()
  const currentURL = `${hostname}${router.asPath}`
  const shareLinks = [
    {
      icon: <WhatsAppIcon />,
      href: `https://api.whatsapp.com/send?text=${currentURL}`,
    },
    {
      icon: <TelegramIcon />,
      href: `https://t.me/share/url?url=${currentURL}`,
    },
    {
      icon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer.php?u=${currentURL}`,
    },
  ]
  const addToCart = () => {
    if (cart.find(item => item.id == productDetail.id)) {
      toastInfo("Товар уже есть в корзине.")
    } else {
      if (counter <= 0) {
        toastError("Единица товара не должна быть меньше 1.")
      } else {
        setCart([...cart, { ...productDetail, amount: counter }])
        toastSuccess("Товар добавлен в корзину.")
      }
    }
  }
  return (
    <MainLayout title={productDetail.name || "Не найдено"}>
      <Box
        sx={{
          my: "30px",
          paddingX: "80px",
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
        <Grid container spacing={2}>
          <Grid
            item
            xl={galleryExist ? 6 : 0}
            lg={galleryExist ? 6 : 0}
            md={galleryExist ? 6 : 0}
            sm={galleryExist ? 12 : 0}
            xs={galleryExist ? 12 : 0}
          >
            <Box
              sx={{
                width: "500px",
                "@media(max-width:1020px)": {
                  width: "400px",
                },
                "@media(max-width:968px)": {
                  width: "300px",
                },
                "@media(max-width:768px)": {
                  width: "100%",
                },
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {productDetail.product_gallery.map((slide, key) => {
                  return (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <Image
                        fill={true}
                        src={slide.image}
                        alt={slide.id}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  )
                })}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography sx={{ fontWeight: 700, fontSize: "30px" }}>
              {productDetail.name}
            </Typography>
            <Stack spacing={1} sx={{ mt: "20px" }}>
              <Stack direction="row" spacing={1}>
                <Typography>Категория:</Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {productDetail.category || "-"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography>Подкатегория:</Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {productDetail.sub_category || "-"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography sx={{ fontWeight: 700 }}>
                  {productDetail.in_stock ? (
                    "В наличие"
                  ) : (
                    <span style={{ color: "gray" }}>Нет в наличие</span>
                  )}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography>Цена: </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {productDetail.price + " сом" || ""}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography>
                  {productDetail.description
                    ? `Описание: ${productDetail.description}`
                    : ""}
                </Typography>
              </Stack>
            </Stack>
            {productDetail.in_stock ? (
              <Box>
                <Stack direction="row" sx={{ mt: "20px" }}>
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
                        fontSize: "12px",
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
                <Button
                  onClick={addToCart}
                  variant="contained"
                  sx={{ mt: "16px" }}
                >
                  Добавить в корзину
                </Button>
              </Box>
            ) : null}

            <Typography sx={{ fontWeight: 700, mt: "20px", mb: "8px" }}>
              Поделиться в:
            </Typography>
            <Stack direction="row" spacing={2}>
              {shareLinks.map(link => {
                return (
                  <Box
                    component={"a"}
                    href={link.href}
                    sx={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(32, 36, 56, 0.07)",
                      borderRadius: "4px",
                      padding: "5px 13px",
                      color: "black",
                    }}
                  >
                    {link.icon}
                  </Box>
                )
              })}
            </Stack>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            mb: "35px",
            mt: "70px",
            textAlign: "center",
            "@media(max-width:968px)": {
              fontSize: "23px",
            },
            "@media(max-width:768px)": {
              fontSize: "20px",
            },
            "@media(max-width:640px)": {
              fontSize: "18px",
            },
          }}
          variant="h1"
        >
          Смотрите также:
        </Typography>
        <Grid container spacing={2}>
          {list.length >= 1 ? (
            list.map((item, index) => {
              return (
                <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Item data={item} />
                </Grid>
              )
            })
          ) : (
            <Box>Товары отсутствуют</Box>
          )}
        </Grid>
      </Box>
    </MainLayout>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(endpoints.productDetail(context.params.id))
  const resList = await fetch(
    endpoints.products({
      in_stock: 1,
      page: "1",
      per_page: 4,
    })
  )
  const list = await resList.json()
  const productDetail = await res.json()
  if (productDetail.detail) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      productDetail,
      list: list.results,
      hostname: context.req.headers.host,
    },
  }
}
