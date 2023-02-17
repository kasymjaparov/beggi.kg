import endpoints from "@/api"
import AboutUs from "@/features/Main/AboutUs"
import Advantages from "@/features/Main/Advantages"
import Catalog from "@/features/Main/Catalog"
import Contact from "@/features/Main/Contact"
import ContactUs from "@/features/Main/ContactUs"
import Faq from "@/features/Main/Faq"
import MainLayout from "@/layouts/MainLayout"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { CartContext } from "@/features/Cart/CartContext"
import Link from "next/link"
import Banner from "@/features/Main/Banner"

export default function Home({ list }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { cart } = useContext(CartContext)
  useEffect(() => {
    const handleStart = url => url !== router.asPath && setLoading(true)
    const handleComplete = url => url === router.asPath && setLoading(false)
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)
    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })

  return (
    <MainLayout title="Главная">
      <Banner/>
      <Box
        sx={{
          position: "fixed",
          right: "30px",
          bottom: "60px",
          width: "60px",
          height: "60px",
          background: "#1976d2",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "9",
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Link href="/cart">
          <Box sx={{ position: "relative", cursor: "pointer" }}>
            <ShoppingCartIcon sx={{ color: "#fff" }} />
            {cart.length >= 1 ? (
              <Box
                sx={{
                  padding: "5px",
                  color: "#fff",
                  position: "absolute",
                  right: "-20px",
                  bottom: "-20px",
                  background: "red",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cart.length}
              </Box>
            ) : null}
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
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
        <Catalog loading={loading} list={list} />
      </Box>
      <AboutUs />
      <Box
        sx={{
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
        <Advantages />
        <Faq />
      </Box>
      <Box
        sx={{
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
        <Contact />
        <ContactUs />
      </Box>
    </MainLayout>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(endpoints.products(context.query))
  const list = await res.json()
  return { props: { list } }
}
