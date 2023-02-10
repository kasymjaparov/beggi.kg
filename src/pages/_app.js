import { CartContext } from "@/features/Cart/CartContext"
import "@/styles/globals.css"
import { usePageLoading } from "@/usePageLoading"
import Loading from "@/widgets/Loading"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useMemo, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1500,
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "sans-serif",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})
export default function App({ Component, pageProps }) {
  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item =
          typeof window !== "undefined"
            ? window.localStorage.getItem(key)
            : null
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        return initialValue
      }
    })

    const setValue = value => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.log(error)
      }
    }
    return [storedValue, setValue]
  }
  const [cart, setCart] = useLocalStorage("cart", [])

  const value = useMemo(() => ({ cart, setCart }), [cart, setCart])
  const { isPageLoading } = usePageLoading()
  if (isPageLoading) {
    return <Loading />
  }
  return (
    <CartContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </CartContext.Provider>
  )
}
