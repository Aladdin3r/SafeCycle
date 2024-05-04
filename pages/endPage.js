import Link from "next/link"
import styles from "@/styles/quiz.module.css"

export default function EndPage() {
    const correctCount = parseInt(window.sessionStorage.getItem('correctCount')) || 0;

    return(
        <>
        <div className={styles.end}>
            <p>Thanks for taking the quiz!</p>
            <p>Number of questions answered correctly: {correctCount} out of 4</p>
            <Link href="/">
                <button className={styles.button}>Return to Home</button>
            </Link>
        </div>
        </>
    )
}