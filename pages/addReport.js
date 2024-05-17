import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/NearbyActivity.module.css";
import Head from "next/head";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function addReport() {
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleNextClick = () => {
        setNextClicked(true);
        router.push({
            pathname: '/map', 
            query: { description },
        });
    }
    return (
        <>
            <Head>
                <title>SafeCycle - Add Description</title>
                <meta name="description" content="Hazards Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.addReportContainer}>
                    <Header title="Add A Report" showBackButton={true}/>
                    
                    <div className={styles.descriptiontitle}>
                        <h1>Describe Hazard</h1>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>Add description (optional)</p>
                        <textarea tabIndex={2}
                            className={styles.textArea}
                            type="text"
                            placeholder="Add a description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            >
                        </textarea>   
                        <p>Add description (optional)</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button 
                            href="./hazards"
                            label="Cancel"
                            width="183px"
                            style="secondary"
                            onClick={() => router.push('/hazards')}
                        />
                        
                        <Button 
                            href="./maps"
                            label="Post"
                            width="183px"
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
