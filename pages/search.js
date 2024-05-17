import styles from "@/styles/Home.module.css"
import SearchBarButton from "@/components/SearchBar";
import TextButton from "@/components/SearchBar"
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Search() {
    return(
        <>
        <Head>
            <title>SafeCycle - Search Page</title>
            <meta name="description" content="Search Page. SafeCycle is your ultimate pedestrian safety and navigation app. 
            Find the best and most recent routes and navigate your day without hazards." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Link rel="icon" href="/favicon3.png" />
        </Head>
        <main>
            <div className={styles.container}>
                <SearchBarButton />
                <TextButton />
                <NavBar tabindex={-1}/>
            </div>
        </main>
        </>
    )
}