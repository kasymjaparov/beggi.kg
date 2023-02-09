const rootApi = "http://167.71.238.139"

const endpoints = {
  products: filter => {
    const newFilter = {
      in_stock: filter.in_stock || 1,
      price_from: filter.price_from ? filter.price_from : "",
      price_to: filter.price_to ? filter.price_to : "",
      page: filter.page ? filter.page : "",
    }
    return (
      rootApi +
      `/product/?${new URLSearchParams({
        page: newFilter.page,
        in_stock: newFilter.in_stock,
        price_from: newFilter.price_from,
        price_to: newFilter.price_to,
        per_page: 10,
      })}`
    )
  },
  orders: rootApi + "/order/",
  category: rootApi + "/category/",
  sub_category: rootApi + "/sub_category/",
}
export default endpoints
