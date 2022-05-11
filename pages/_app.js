import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "focus-visible/dist/focus-visible";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
