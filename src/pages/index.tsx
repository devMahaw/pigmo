import { GlobalCss } from "@/styles";
import Head from "next/head";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../../public/fonts/aglet-sans-bold.otf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pigmo | Online Casino</title>
        <meta
          name="description"
          content="Pigmo is a decentralized casino platform that allows users to play games with their own assets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pigmoIco.png" />
      </Head>
      <GlobalCss />
      <body className={myFont.className}>
        <h1>Olá mundo!</h1>
      </body>
    </>
  );
}
