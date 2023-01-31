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
  const [filter, setFilter] = React.useState({
    exist: true,
    kardigan: true,
    dvoika: true,
    troika: true,
    switshot: true,
    tuniki: true,
    razmer1: true,
    razmer2: true,
  })
  const {
    exist,
    kardigan,
    dvoika,
    troika,
    switshot,
    tuniki,
    razmer1,
    razmer2,
  } = filter
  const handleChange = event => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    })
  }
  console.log(filter)
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
          <Typography sx={{ ml: "5px", fontWeight: 700 }}>Фильтры</Typography>
        </Stack>
      ) : null}
      {showFilter || !mobile ? (
        <Stack spacing={2}>
          <Stack>
            <Typography sx={{ fontWeight: 700 }}>В наличии</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={exist}
                  onChange={handleChange}
                  name="exist"
                  color="default"
                />
              }
              label="Только товары в наличии"
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: 700 }}>Категория</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={kardigan}
                  onChange={handleChange}
                  name="kardigan"
                  color="default"
                />
              }
              label="Кардиганы"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dvoika}
                  onChange={handleChange}
                  name="dvoika"
                  color="default"
                />
              }
              label="Костюмы двойка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={troika}
                  onChange={handleChange}
                  name="troika"
                  color="default"
                />
              }
              label="Костюмы тройка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={switshot}
                  onChange={handleChange}
                  name="switshot"
                  color="default"
                />
              }
              label="Свитшоты"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tuniki}
                  onChange={handleChange}
                  name="tuniki"
                  color="default"
                />
              }
              label="Туники"
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: 700 }}>Размеры</Typography>
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
                control={
                  <Checkbox
                    checked={razmer1}
                    onChange={handleChange}
                    name="razmer1"
                    color="default"
                  />
                }
                label="48/50/52/54"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={razmer2}
                    onChange={handleChange}
                    name="razmer2"
                    color="default"
                  />
                }
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
