import Head from "next/head";
import Header from "@/components/Header"
import NavBar from "@/components/NavBar";
import styles from "@/styles/Community.module.css"

export default function Community() {
    return(
        <>
            <Head>
                <title>SafeCycle – Community</title>
                <meta name="description" content="Community Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.navcontainer}>
                    <Header title="Community"/>
                    <NavBar/>
                </div>
            </main>
        </>
    )
}