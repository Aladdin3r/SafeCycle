import styles from "@/styles/Home.module.css"
import SearchBarButton from "@/components/SearchBar";
import TextButton from "@/components/SearchBar"

export default function Search() {
    return(
        <>
        <Head>
            <title>SafeCycle - Search Page</title>
            <meta name="description" content="SafeCycle is your ultimate pedestrian safety and navigation app. 
            Find the best and most recent routes and navigate your day without hazards." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon3.png" />
        </Head>
        <main>
            <div className={styles.container}>
                <SearchBarButton />
                <TextButton />
            </div>
        </main>
        </>
    )
}