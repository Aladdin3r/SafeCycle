import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/quiz.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function QuizHome() {
    return(
        <>
            <Header />
            <div className={styles.quizHomeContainer}>
                <div className={styles.quizHomeTitle}>
                    <h3>Ready to see if you’re a good pedestrian? <br/> Take the Quiz!</h3>
                </div>
                <div className={styles.startButtonContainer}>
                    <Link href="./questionOne">
                        <button className={styles.startButton}>Take Quiz</button>
                    </Link>
                </div>
            </div>
            <NavBar/>
        </>
    )
}