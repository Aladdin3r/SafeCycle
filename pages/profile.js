import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return(
    <>
            <Head>
                <title>SafeCycle – Profile</title>
                <meta name="description" content="Community Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
              <div>
              <Image className={`${styles.profileIcon}`} src="/icons/profile-icon.svg" width={57} height={55}/>
              <h2 className={`${styles.profileName}`}>John Jo</h2>
              </div>
              <Image className={`${styles.profileLocations}`} src="/icons/profile-page-locations.svg" width={16} height={25}/>
                <h2>
                </h2>
              <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>

              


                <div className={styles.container}>

                </div>
            </main>
    </>
  )  
}