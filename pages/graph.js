import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Community.module.css";
import BarChart from "@/components/PieChart";
import Image from "next/image";
import Link from "next/link";

export default function Graph() {
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
                    <Header title="Facts" showBackButton={true}/>
                    <div className={styles.graphContainer}>
                        <div className={styles.quizHomeGraph}>
                            <BarChart />
                        </div>
                        <br/>
                        <p>Following road safety guidelines and understanding traffic rules are paramount for both individuals and society as a whole. Adhering to these regulations helps prevent accidents, injuries, and even fatalities on the road, safeguarding not only the lives of drivers but also passengers, pedestrians, and cyclists.
                             <br/>Moreover, obeying traffic laws promotes orderly and efficient traffic flow, reducing congestion and travel times. 
                             This adherence fosters a sense of responsibility and respect among road users, contributing to a safer and more harmonious community environment. Ultimately, prioritizing road safety and knowing the rules not only preserves lives and prevents injuries but also enhances the overall quality of life for everyone sharing the road.</p>
                    </div>
                    <NavBar/>
                </div>
            </main>
        </>
    )
}