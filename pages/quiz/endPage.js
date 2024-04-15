import Link from "next/link"
import styles from "@/styles/quiz.module.css"

export default function EndPage() {
    return(
        <>
        <div className={styles.end}>
            <p>Thanks for taking the quiz!</p>
            <Link href="/">
                <button className={styles.button}>Return to Home</button>
            </Link>
        </div>
        </>
    )
}