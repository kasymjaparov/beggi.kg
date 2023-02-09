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

export default function Home({ list }) {
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
        <Catalog list={list} />
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
