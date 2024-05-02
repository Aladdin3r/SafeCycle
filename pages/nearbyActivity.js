import styles from "@/styles/NearbyActivity.module.css";
import NearbyActivityCard from "@/components/NearbyActivityCard";
import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function NearbyActivity() {
    return(
        <>
        <Head>
            <title>SafeCycle – Nearby Activity</title>
            <meta name="description" content="Hazards Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon3.png" /> 
        </Head>
            <main className={`${styles.main}`}>
                    <div className={styles.container}>
                        <Header title="Hazards"/>
                        <div>
                            <NearbyActivityCard 
                            title={"Car Crash"}
                            imageUrl={"/icons/car-crash-3D.svg"}
                            distance={"0.2 miles away"}
                            location={"4567 Lougheed Hwy., Burnaby, BC V5C 3Z6"}
                            likeCount={35}
                            commentCount={3}
                            username={"@Jackdoe"}
                            />
                        </div>
                        <NavBar />
                    </div>
            </main>
        </>
    )
}