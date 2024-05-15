import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Hazards.module.css";
import HazardIcons from "@/components/HazardIcons";
import { useState } from "react";
import { useRouter } from "next/router";
import MapPage from "@/components/Map";

export default function Hazards() {
    const router = useRouter();
    const [selectedHazard, setSelectedHazard] = useState(null);

    const handleHazardClick = (coordinate, title, type) => {
        setSelectedHazard({ coordinate, title, type });

    };

    const customMarkerIcons = {
        "Car Crash": 'icons/crash-marker.png',
        "Closure": 'icons/closure-marker.png',
        "Construction": 'icons/construction-marker.png',
        "Traffic": 'icons/traffic-marker.png',
        "Poor Road": 'icons/poorroad-marker.png',
        "Other": 'icons/other-marker.png',
    }

    return(
        <>
            <Head>
                <title>SafeCycle – Hazards</title>
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
                                onClick={() => handleHazardClick({ lat: 49.249520, lng: -122.999530 }, "Car Crash", "Car Crash")}
                            />
                            <HazardIcons
                                imageUrl="/icons/closed-road-3D.svg"
                                altText="Closed Road Icon"
                                width={66}
                                height={58.673}
                                title={"Closure"}
                                onClick={() => handleHazardClick({ lat: 49.249186, lng: -122.999951 }, "Closure", "Closure")}
                            />
                            <HazardIcons
                                imageUrl="/icons/construction-3D.svg"
                                altText="Construction"
                                width={57.567}
                                height={61}
                                title={"Construction"}
                                onClick={() => handleHazardClick({ lat: 49.250110, lng: -122.999895 }, "Construction", "Construction")}
                            />
                            <HazardIcons
                                imageUrl="/icons/traffic-3D.svg"
                                altText="Traffic"
                                width={67.547}
                                height={63}
                                title={"Traffic"}
                                onClick={() => handleHazardClick({ lat: 49.249099, lng: -122.998271 }, "Traffic", "Traffic")}
                            />
                            <HazardIcons
                                imageUrl="/icons/poor-road-3D.svg"
                                altText="Car Crash Icon"
                                width={66}
                                height={58.673}
                                title={"Poor Road"}
                                onClick={() => handleHazardClick({ lat: 49.248320, lng: -122.998282 }, "Poor Road", "Poor Road")}
                            />
                            <HazardIcons
                                imageUrl="/icons/other-3D.svg"
                                altText="Car Crash Icon"
                                width={46.461}
                                height={48}
                                title={"Other"}
                                onClick={() => handleHazardClick({ lat: 49.249620, lng: -122.999453 }, "Other", "Other")}
                            />
                        </div>
                        <NavBar />
                    </div>
            </main>
            {selectedHazard && <MapPage selectedHazard={selectedHazard} customMarkerIcon={customMarkerIcons} />}
        </>
    )
}
