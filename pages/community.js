import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Community.module.css";
import Image from "next/image";

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
                    <div className={styles.cards}>
                        <div className={styles.nearbyActivity}>
                            <div className={styles.cardContainer}>
                                <div className={styles.nearbyImage}>
                                    <Image src="/icons/nearby-activity-3D.svg" width={141.967} height={103}/>
                                </div>
                            </div>
                            <p>Nearby Activity</p>
                        </div>
                        <div className={styles.nearbyActivity}>
                            <div className={styles.cardContainer}>
                                <div className={styles.nearbyImage}>
                                    <Image src="/images/faq.webp" width={120} height={130}/>
                                </div>
                            </div>
                            <p>FAQ</p>
                        </div>
                    </div>

                    <NavBar/>
                </div>
            </main>
        </>
    )
}