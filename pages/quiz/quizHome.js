import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/quiz.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import { useEffect } from "react";

export default function QuizHome() {

    const resetCorrectCount = () => {
        sessionStorage?.removeItem('correctCount');
    };
    useEffect(() => {
        resetCorrectCount();
    }, []);

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
                <div>
                    <div className={styles.quizHomeTitle}>
                        <h3>Ready to see if you’re a good pedestrian? <br/> Take the Quiz!</h3>
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