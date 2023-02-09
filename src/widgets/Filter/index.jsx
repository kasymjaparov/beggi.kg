import {
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material"
import React, { useState } from "react"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { useRouter } from "next/router"

const Filter = () => {
  const mobile = useMediaQuery("(max-width:768px)")
  const router = useRouter()
  const [showFilter, setShowFilter] = useState(false)
  const [filter, setFilter] = React.useState({
    in_stock: router.query.in_stock
      ? router.query.in_stock == 1
        ? true
        : false
      : true,
    price_from: router.query.price_from || "",
    price_to: router.query.price_to || "",
  })
  const handleChange = event => {
    if (event.target.name == "price_from" || event.target.name == "price_to") {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      })
    } else {
      setFilter({
        ...filter,
        [event.target.name]: event.target.checked,
      })
      router.push({
        pathname: router.pathname,
        query: {
          in_stock: filter.in_stock ? 0 : 1,
          price_from: filter.price_from,
          price_to: filter.price_to,
        },
      })
    }
  }
  const priceClick = () => {
    router.push({
      pathname: router.pathname,
      query: {
        in_stock: filter.in_stock ? 0 : 1,
        price_from: filter.price_from,
        price_to: filter.price_to,
      },
    })
  }
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
                  checked={filter.in_stock}
                  onChange={handleChange}
                  name="in_stock"
                  color="default"
                />
              }
              label="Товары в наличии"
            />
          </Stack>

          <Stack>
            <Typography sx={{ fontWeight: 700, mb: "10px" }}>Цена</Typography>
            <Stack
              direction={{
                xl: "column",
                lg: "column",
                md: "row",
                sm: "row",
                xs: "row",
              }}
              component="form"
              onSubmit={e => {
                e.preventDefault()
                priceClick()
              }}
              spacing={2}
            >
              <FormControl>
                <OutlinedInput
                  value={filter.price_from}
                  name="price_from"
                  type="number"
                  onChange={handleChange}
                  size="small"
                  placeholder="От"
                />
              </FormControl>
              <FormControl>
                <OutlinedInput
                  value={filter.price_to}
                  name="price_to"
                  onChange={handleChange}
                  size="small"
                  placeholder="До"
                  type="number"
                />
              </FormControl>
              <Button variant="contained" type="submit">
                Поиск
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ) : null}
    </Box>
  )
}

export default Filter
