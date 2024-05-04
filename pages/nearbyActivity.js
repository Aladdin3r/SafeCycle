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
                        <Header title="Hazards" showBackButton={true}/>
                        <div>
                            <NearbyActivityCard 
                                title={"Car Crash"}
                                imageUrl={"/icons/car-crash-3D.svg"}
                                distance={"0.2 miles away"}
                                location={"4567 Lougheed Hwy., Burnaby, BC V5C 3Z6"}
                                likeCount={35}
                                commentCount={3}
                                username={"@Jackdoe"}
                                comments={[
                                    { profilePicture: 'icons/profile-icon-orange.svg', username: 'User1', comment: 'Very useful thank you!' },
                                    { profilePicture: 'icons/profile-icon-pink.svg', username: 'User2', comment: 'I disagree with the main point.' },
                                ]}
                            />
                            
                            <NearbyActivityCard 
                                title={"Poor Road Conditions"}
                                imageUrl={"/icons/poor-road-3D.svg"}
                                distance={"150 meters away"}
                                location={"3700 Willingdon Ave, Burnaby, BC V5G 3H2"}
                                likeCount={58}
                                commentCount={3}
                                username={"@JillyJolly"}
                                comments={[
                                    { profilePicture: 'icons/profile-icon-orange.svg', username: '@B', comment: 'Very useful thank you!' },
                                    { profilePicture: 'icons/profile-icon-pink.svg', username: '@JillyJolly', comment: 'FAKE' },
                                ]}
                            />
                        </div>
                        <NavBar/>
                    </div>
            </main>
        </>
    )
}