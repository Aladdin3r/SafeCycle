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
                            location={"Parking Lot BCIT near Roper Ave (cyclist and car)"}
                            likeCount={35}
                            commentCount={2}
                            username={"@Jackdoe"}
                            comments={[
                                { profilePicture: 'icons/profile-icon-orange.svg', username: 'User1', comment: 'Very useful thank you!' },
                                { profilePicture: 'icons/profile-icon-pink.svg', username: 'User2', comment: 'Poor cyclist, hope everyone is okay.' },
                            ]}
                            />
                        </div>
                        <br/>
                        <div>
                            <NearbyActivityCard 
                            title={"Closure"}
                            imageUrl={"/icons/closed-road-3D.svg"}
                            distance={"0.1 miles away"}
                            location={"Pedestrian walkway closed near Roper"}
                            likeCount={12}
                            commentCount={1}
                            username={"@Jackdoe"}
                            comments={[
                                { profilePicture: 'icons/profile-icon-orange.svg', username: 'User1', comment: 'Thank you! Will keep an eye out!' },
                            ]}
                            />
                        </div>
                    </div>
            </main>
        </>
    )
}