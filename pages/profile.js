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
                <title>SafeCycle - Profile</title>
                <meta name="description" content="Community Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
              <Header title={"Profile"}/>
              <div>
              <Image className={`${styles.profileIcon}`} src="/icons/profile-icon.svg" width={57} height={55}/>
              <h2 className={`${styles.profileName}`}>John Jo</h2>
              </div>

              <div> 
              <h2 className={`${styles.catagory}`}>
                <Image className={`${styles.catagoryIcon}`} src="/icons/profile-page-locations.svg" width={25} height={25}/>
                <div className={`${styles.catagoryText}`}>Locations</div>
              </h2>
              </div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Home</div></div>

              
              <div>
              <h2 className={`${styles.category}`}>
                <Image className={`${styles.categoryIcon}`} src="/icons/profile-page-settings.svg" width={24} height={24}/>
                <div className={`${styles.categoryText}`}>Settings</div>
              </h2>
              </div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>App Appearance</div></div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Language</div></div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>FAQ</div></div>
                           
                
                
              <div>
              <h2 className={`${styles.category}`}>
                <Image className={`${styles.categoryIcon}`} src="/icons/profile-page-notifications.svg" width={24} height={24}/>
                <div className={`${styles.categoryText}`}>Notifications</div>
              </h2>
              </div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Alert Frequency</div></div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Alert Places</div></div>
                <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Advanced Alert Settings</div></div>
              

  
                <div className={styles.container}>

                </div>
                <NavBar/>
            </main>
    </>
  )  
}