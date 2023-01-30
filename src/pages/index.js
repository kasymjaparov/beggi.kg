import Catalog from "@/features/Main/Catalog"
import Contact from "@/features/Main/Contact"
import ContactUs from "@/features/Main/ContactUs"
import MainLayout from "@/layouts/MainLayout"
import { Box } from "@mui/material"
export default function Home() {
  return (
    <MainLayout title="Главная">
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
        <Catalog />
        <Contact />
        <ContactUs />
      </Box>
    </MainLayout>
  )
}
