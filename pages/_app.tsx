import theme from "@/styles/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
