import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Hazards.module.css";
import HazardIcons from "@/components/HazardIcons";

export default function Hazards() {
    return(
        <>
            <Head>
                <title>SafeCycle – Community</title>
                <meta name="description" content="Hazards Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                    <div className={styles.container}>
                        <Header title="Hazards"/>
                        <div className={styles.icons}>
                            <HazardIcons
                                imageUrl="/icons/car-crash-3D.svg"
                                altText="Car Crash Icon"
                                width={77}
                                height={40.311}
                                title={"Car Crash"}
                            />
                            <HazardIcons
                                imageUrl="/icons/closed-road-3D.svg"
                                altText="Closed Road Icon"
                                width={66}
                                height={58.673}
                                title={"Closure"}
                            />
                            <HazardIcons
                                imageUrl="/icons/construction-3D.svg"
                                altText="Construction"
                                width={57.567}
                                height={61}
                                title={"Construction"}
                            />
                            <HazardIcons
                                imageUrl="/icons/traffic-3D.svg"
                                altText="Traffic"
                                width={67.547}
                                height={63}
                                title={"Traffic"}
                            />
                            <HazardIcons
                                imageUrl="/icons/poor-road-3D.svg"
                                altText="Car Crash Icon"
                                width={66}
                                height={58.673}
                                title={"Poor Road"}
                            />
                            <HazardIcons
                                imageUrl="/icons/other-3D.svg"
                                altText="Car Crash Icon"
                                width={46.461}
                                height={48}
                                title={"Car Crash"}
                            />
                        </div>
                        <NavBar />
                    </div>
            </main>
        </>
    )
}