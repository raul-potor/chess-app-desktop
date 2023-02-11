import DonationSection from "@/components/DonationSection";
import DownloadSection from "@/components/DownloadSection";
import Navbar from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chess App</title>
        <meta
          name="description"
          content="Chess application. The unofficial desktop app of the chess browser game, available for Windows, MacOS, and Linux platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="keywords" content="chess desktop application" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ChessApp" />
        <meta
          name="twitter:description"
          content="Chess application. The unofficial desktop app of the chess browser game, available for Windows, MacOS, and
         Linux platforms."
        />
        <meta
          name="twitter:image"
          content="https://chessapp.site/chesslogo.png"
        />
        <meta
          property="og:description"
          content="Chess application. The unofficial desktop app of the chess browser game, available for Windows, MacOS, and
          Linux platforms."
        />
        <meta property="og:title" content="ChessApp" />
        <meta
          property="og:image"
          content="https://chessapp.site/chesslogo.png"
        />
        <link rel="canonical" href="https://www.chessapp.site/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Flex
        alignItems="center"
        margin="0 auto"
        h={{ base: "calc(100vh - 114px)", md: "calc(100vh - 120px)" }}
      >
        <DownloadSection />
      </Flex>
      <DonationSection />
    </>
  );
}
