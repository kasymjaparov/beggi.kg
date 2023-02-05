import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import rate from "/public/rate.svg"
import design from "/public/design.svg"
import trends from "/public/trends.svg"
import Image from "next/image"

const Advantages = () => {
  return (
    <Box
      sx={{
        paddingBottom: "50px",
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
        Наши особенности
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          textAlign: "center",
          maxWidth: "550px",
          margin: " 0 auto 0 auto",
          "@media(max-width:768px)": {
            fontSize: "16px",
          },
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        optio error repellendus maiores ea deleniti, ducimus animi blanditiis
        asperiores labore quas recusandae corrupti dolore? Quia tenetur
        consectetur ad consequuntur! Autem. Ab facere placeat ratione quam
        neque. Autem itaque deleniti unde pariatur officiis! Dolorum,
        voluptatem. Repellendus quas corrupti modi beatae laudantium odit
        deserunt. Aliquid in voluptate deserunt quas dolore. Quibusdam,
        voluptatem!
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "50px auto 0 auto",
        }}
      >
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <Image src={rate} alt="rate" width={70} height={70} />
            </Box>
            <Stack>
              <Typography
                sx={{ fontWeight: 700, fontSize: "19px", textAlign: "center" }}
              >
                Цена
              </Typography>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ipsam voluptates voluptatibus aut ex saepe quasi vel
                voluptatem cum maiores labore et magni!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <Image src={trends} alt="trends" width={70} height={70} />
            </Box>
            <Stack>
              <Typography
                sx={{ fontWeight: 700, fontSize: "19px", textAlign: "center" }}
              >
                Тренды
              </Typography>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ipsam voluptates voluptatibus aut ex saepe quasi vel
                voluptatem cum maiores labore et magni!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <Stack direction="column" spacing={1} alignItems="center">
            <Box>
              <Image src={design} alt="design" width={70} height={70} />
            </Box>
            <Stack>
              <Typography
                sx={{ fontWeight: 700, fontSize: "19px", textAlign: "center" }}
              >
                Высокое качество
              </Typography>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ipsam voluptates voluptatibus aut ex saepe quasi vel
                voluptatem cum maiores labore et magni!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Advantages
