import endpoints from "@/api"
import AboutUs from "@/features/Main/AboutUs"
import Advantages from "@/features/Main/Advantages"
import Banner from "@/features/Main/Banner"
import Catalog from "@/features/Main/Catalog"
import Contact from "@/features/Main/Contact"
import ContactUs from "@/features/Main/ContactUs"
import Faq from "@/features/Main/Faq"
import MainLayout from "@/layouts/MainLayout"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home({ list }) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
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
      <Banner />
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
        <Advantages />
        <Faq />
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
