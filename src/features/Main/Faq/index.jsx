import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material"
import React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Faq = () => {
  return (
    <Box
      id="faq"
      sx={{ pb: "50px", maxWidth: "1000px", margin: "0 auto 0 auto" }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          mb: "16px",
          "@media(max-width:968px)": {
            fontSize: "23px",
          },
          "@media(max-width:768px)": {
            fontSize: "20px",
          },
          "@media(max-width:640px)": {
            textAlign: "center",
            fontSize: "18px",
          },
        }}
        variant="h1"
      >
        Часто задаваемые вопросы
      </Typography>
      <Accordion sx={{ border: "0px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600 }}>Где вы находитесь?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Мы находимся в Кыргызстане город Бишкек.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600 }}>
            Какой у вас способ доставки?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Самовывоз, транспортной компанией.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600 }}>
            Каким способом производить оплату?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Наличный и безналичный способ оплаты.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600 }}>
            Какой у вас объем поставок ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Крупный опт, мелкий опт. Минимальный заказ от 100шт на модель.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Faq
