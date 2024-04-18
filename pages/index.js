import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <>
      <Head>
        <title>SafeCycle</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon3.png" />
      </Head>
      <main className={`${styles.main}`}>
        <SearchBar />
        <NavBar />
      </main>
    </>
  );
}
