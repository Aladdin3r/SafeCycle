import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Appearance.module.css";
import Image from "next/image";

export default function Appearance() {
    return(
        <>
            <Head>
                <title>SafeCycle – App Appearance</title>
                <meta name="description" content="Community Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.container}>
                <Header title="App Appearance" showBackButton={true}/>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Brightness 
                <div className={styles.slidecontainer}>
                    <input className={styles.slider} type="range" min="1" max="100" value="50"/>
                </div>
                </div></div>
                </div>
            </main>
        </>
    )
}