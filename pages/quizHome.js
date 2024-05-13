'use client'
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/quiz.module.css";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button"

export default function QuizHome() {
    return(
        <>
            <Head>
            <title>SafeCycle</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon3.png" />
            </Head>
            <main className={`${styles.main}`}>
                <Header title="Quiz"/>
                <div className={styles.quizHomeContainer}>
                    <div className={styles.quizHomeTitle}>
                        <h3>Ready to see if you`re a good pedestrian? <br/> Take the Quiz!</h3>
                    </div>
                    <Image className={styles.quizHomeImage} src="/images/quizhome.jpeg" alt="image of a pedestrian crossing the street" width={318} height={212} />
                    <div className={styles.quizHomeDescription}>
                        <p>To this day road related injuries are a leading cause of hospitalizations in Canada. Take this quiz to remind yourself of the safest practices for pedestrians and cyclists to follow!</p>
                    </div>
                    <div className={styles.startButtonContainer}>
                        <Button 
                            href="./questionOne"
                            label="Take Quiz"
                        />
                    </div>
                </div>
                <NavBar/>
            </main>
        </>
    )
}