import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "../styles/globals.css"
import "focus-visible/dist/focus-visible"

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: ["1rem", "1.05rem", "1.1rem", "1.1rem"],
        lineHeight: [1.45, 1.5, 1.48, 1.48],
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
