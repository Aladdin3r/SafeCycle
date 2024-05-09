import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Community.module.css";
import BarChart from "@/components/PieChart";
import Image from "next/image";
import Link from "next/link";

export default function Facts() {
    return(
        <>
            <Head>
                <title>SafeCycle – Facts</title>
                <meta name="description" content="Facts Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.container}>
                    <Header title="Facts"/>
                    <div className={styles.graphContainer}>
                        <div className={styles.quizHomeGraph}>
                            <BarChart />
                        </div>
                    </div>
                    <NavBar/>
                </div>
            </main>
        </>
    )
}