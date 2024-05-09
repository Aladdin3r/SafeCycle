import Link from "next/link"
import styles from "@/styles/quiz.module.css"

export default function EndPage() {
<<<<<<< HEAD
=======
    const correctCount = parseInt(window.sessionStorage.getItem('correctCount')) || 0;

>>>>>>> 684774ba243f559768ed9a83c71734aa5696cf67
    return(
        <>
        <div className={styles.end}>
            <p>Thanks for taking the quiz!</p>
<<<<<<< HEAD
=======
            <p>Number of questions answered correctly: {correctCount} out of 4</p>
>>>>>>> 684774ba243f559768ed9a83c71734aa5696cf67
            <Link href="/">
                <button className={styles.button}>Return to Home</button>
            </Link>
        </div>
        </>
    )
}