import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import SearchBarButton from "@/components/SearchBarButton";
import MapPage from "@/components/Map";
import PullUpPage from "@/components/PullUpPage";

export default function Home() {
    const [pullPageVisible, setPullPageVisible] = useState(false);

    const togglePullPage = () => {
        setPullPageVisible(!pullPageVisible);
    };

    return (
        <>
            <Head>
                <title>SafeCycle</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <SearchBarButton onClick={togglePullPage} />
                    <PullUpPage isVisible={pullPageVisible} toggleVisibility={togglePullPage} />
                    <MapPage />
                    <NavBar />
                </div>
            </main>
        </>
    );
}
