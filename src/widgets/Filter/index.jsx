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
  MenuItem,
  Select,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { useRouter } from "next/router"
import endpoints from "@/api"

const Filter = () => {
  const mobile = useMediaQuery("(max-width:768px)")
  const router = useRouter()
  const [category, setCategory] = useState([])
  const [sub_category, setSubCategory] = useState([])

  const [showFilter, setShowFilter] = useState(false)
  const [filter, setFilter] = React.useState({
    in_stock: router.query.in_stock
      ? router.query.in_stock == 1
        ? true
        : false
      : true,
    price_from: router.query.price_from || "",
    price_to: router.query.price_to || "",
    category: router.query.category || "",
    sub_category: router.query.sub_category || "",
  })
  const handleChange = event => {
    if (event.target.name == "price_from" || event.target.name == "price_to") {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      })
    } else if (event.target.name == "category") {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      })
      router.push({
        pathname: router.pathname,
        query: {
          in_stock: filter.in_stock ? 1 : 0,
          price_from: filter.price_from,
          price_to: filter.price_to,
          category: event.target.value,
          sub_category: event.target.value,
        },
      })
    } else if (event.target.name == "sub_category") {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      })
      router.push({
        pathname: router.pathname,
        query: {
          in_stock: filter.in_stock ? 1 : 0,
          price_from: filter.price_from,
          price_to: filter.price_to,
          category: filter.category,
          sub_category: event.target.value,
        },
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
          category: filter.category,
          sub_category: filter.sub_category,
        },
      })
    }
  }
  const priceClick = () => {
    router.push({
      pathname: router.pathname,
      query: {
        in_stock: filter.in_stock ? 1 : 0,
        price_from: filter.price_from,
        price_to: filter.price_to,
        category: filter.category,
        sub_category: filter.sub_category,
      },
    })
  }
  const getCategories = async () => {
    const res = await fetch(endpoints.category)
    const list = await res.json()
    setCategory(list)
  }
  const getSubCategories = async () => {
    const res = await fetch(endpoints.sub_category(filter.category))
    const list = await res.json()
    setSubCategory(list)
  }
  useEffect(() => {
    getCategories()
    getSubCategories()
  }, [])
  useEffect(() => {
    getSubCategories()
  }, [filter.category])
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
          {category.length >= 1 ? (
            <Stack>
              <Typography sx={{ fontWeight: 700 }}>Категории</Typography>
              <FormControl>
                <Select
                  value={filter.category}
                  name="category"
                  displayEmpty
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={""}>-</MenuItem>
                  {category.map((selectObj, index) => (
                    <MenuItem key={index} value={selectObj.name}>
                      {selectObj.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          ) : null}
          {sub_category.length >= 1 ?? filter.category ? (
            <Stack>
              <Typography sx={{ fontWeight: 700 }}>Подкатегории</Typography>
              <FormControl>
                <Select
                  value={filter.sub_category}
                  name="sub_category"
                  displayEmpty
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={""}>-</MenuItem>
                  {sub_category.map((selectObj, index) => (
                    <MenuItem key={index} value={selectObj.id}>
                      {selectObj.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          ) : null}
          <Stack>
            <Typography sx={{ fontWeight: 700, mb: "10px" }}>Цена</Typography>
            <Stack
              direction="row"
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
