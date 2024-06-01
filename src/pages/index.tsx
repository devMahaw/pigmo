import { GlobalCss } from "@/styles";
import Head from "next/head";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export const myFont = localFont({
  src: "../../public/fonts/aglet-sans-bold.otf",
});

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
        <link rel="icon" href="/assets/pigmoIco.svg" />
      </Head>
      <GlobalCss />
      <div className={myFont.className}>
        <header>
          <Navbar />
        </header>
        <main>
          <section>
            <Banner />
          </section>
        </main>
      </div>
    </>
  );
}
