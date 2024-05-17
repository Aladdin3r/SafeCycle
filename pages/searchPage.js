import styles from "@/styles/SearchPage.module.css";
import NavBar from "@/components/NavBar";

export default function searchPage() {
    return (
        <>
            <Head>
                <title>SafeCycle - Search Page</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" />
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.container}r>
                    <SearchBar />
                </div>
                <NavBar />
            </main>
        </>
    )
}