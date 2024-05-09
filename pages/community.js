import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Community.module.css";
import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 684774ba243f559768ed9a83c71734aa5696cf67

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
<<<<<<< HEAD
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

=======
                <div className={styles.container}>
                    <Header title="Community"/>
                    <div className={styles.cards}>
                        <Link href="./nearbyActivity">
                            <button className={styles.cardButton}>
                                <div className={styles.nearbyActivity}>
                                    <div className={styles.cardContainer}>
                                        <div className={styles.nearbyImage}>
                                            <Image src="/icons/nearby-activity-3D.svg" width={141.967} height={103}/>
                                        </div>
                                    </div>
                                    <p>Nearby Activity</p>
                                </div>
                            </button>
                        </Link>
                        <Link href="./faq">
                            <button className={styles.cardButton}>
                                <div className={styles.nearbyActivity}>
                                    <div className={styles.cardContainer}>
                                        <div className={styles.nearbyImage}>
                                            <Image src="/images/faq.webp" width={120} height={130}/>
                                        </div>
                                    </div>
                                    <p>FAQ</p>
                                </div>
                            </button>
                        </Link>
                        <Link href="./graph">
                            <button className={styles.cardButton}>
                                <div className={styles.nearbyActivity}>
                                    <div className={styles.cardContainer}>
                                        <div className={styles.nearbyImage}>
                                            <Image src="/icons/graphs.svg" width={120} height={130}/>
                                        </div>
                                    </div>
                                    <p>Facts</p>
                                </div>
                            </button>
                        </Link>
                    </div>
>>>>>>> 684774ba243f559768ed9a83c71734aa5696cf67
                    <NavBar/>
                </div>
            </main>
        </>
    )
}