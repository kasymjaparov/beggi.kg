import {
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import React, { useState } from "react"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
const Filter = () => {
  const mobile = useMediaQuery("(max-width:768px)")
  const [showFilter, setShowFilter] = useState(false)
  console.log(showFilter)
  return (
    <Box>
      {mobile ? (
        <Stack
          direction="row"
          alignItems="center"
          sx={{ cursor: "pointer", mb: "16px" }}
          onClick={() => setShowFilter(!showFilter)}
        >
          <FilterAltIcon />
          <Typography sx={{ ml: "5px" }}>Фильтры</Typography>
        </Stack>
      ) : null}
      {showFilter || !mobile ? (
        <Stack spacing={2}>
          <Stack>
            <Typography>В наличии</Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Только товары в наличии"
            />
          </Stack>
          <Stack>
            <Typography>Категория</Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Кардиганы"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Костюмы двойка"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Костюмы тройка"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Свитшоты"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="Туники"
            />
          </Stack>
          <Stack>
            <Typography>Размеры</Typography>
            <Stack
              direction={{
                xl: "column",
                lg: "column",
                md: "column",
                sm: "row",
                xs: "row",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked color="default" />}
                label="48/50/52/54"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="default" />}
                label="52/54/56"
              />
            </Stack>
          </Stack>
        </Stack>
      ) : null}
    </Box>
  )
}

export default Filter
