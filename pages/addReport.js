import styles from "@/styles/NearbyActivity.module.css";
import Head from "next/head";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function addReport() {

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
                    <Header title="App A Report" showBackButton={true}/>
                    
                    <div className={styles.descriptiontitle}>
                        <h1>Describe Hazard</h1>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>Add description (optional)</p>
                        <textarea tabIndex={2}
                            className={styles.textArea}
                            type="text"
                            placeholder="Add a description">
                        </textarea>   
                        <p>Add description (optional)</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            href="./nearbyActivity"
                            label="Cancel"
                            width="183px"
                            style="secondary"
                            tabIndex={3}
                        />
                        <Button 
                            href="./"
                            label="Next"
                            width="183px"
                            tabIndex={4}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}