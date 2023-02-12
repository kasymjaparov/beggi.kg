const rootApi = "https://beggi.kg"

const endpoints = {
  products: filter => {
    const newFilter = {
      in_stock: filter.in_stock || 1,
      price_from: filter.price_from ? filter.price_from : "",
      price_to: filter.price_to ? filter.price_to : "",
      page: filter.page ? filter.page : "1",
      per_page: filter.per_page ? filter.per_page : 20,
      category: filter.category ? filter.category : "",
      sub_category: filter.sub_category || "",
    }
    console.log(
      rootApi +
        `/product/?${new URLSearchParams({
          page: newFilter.page,
          in_stock: newFilter.in_stock,
          price_from: newFilter.price_from,
          price_to: newFilter.price_to,
          per_page: newFilter.per_page,
          category__name: newFilter.category,
          sub_category_filter: newFilter.sub_category,
        })}`
    )
    return (
      rootApi +
      `/product/?${new URLSearchParams({
        page: newFilter.page,
        in_stock: newFilter.in_stock,
        price_from: newFilter.price_from,
        price_to: newFilter.price_to,
        per_page: newFilter.per_page,
        category__name: newFilter.category,
        sub_category_filter: newFilter.sub_category,
      })}`
    )
  },
  productDetail: id => rootApi + "/product/" + id,
  orders: rootApi + "/order/",
  category: rootApi + "/category/",
  contact: rootApi + "/contact/",
  sub_category: category =>
    rootApi + `/sub_category/?category__name=${category}`,
}
export default endpoints
