import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/quiz.module.css";

export default function EndPage() {
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const count = parseInt(window.sessionStorage.getItem('correctCount')) || 0;
            setCorrectCount(count);
        }
    }, []);

    return (
        <>
            <div className={styles.end}>
                <p>Thanks for taking the quiz!</p>
                <p>Number of questions answered correctly: {correctCount} out of 4</p>
                <Link href="../../maps">
                    <button className={styles.button}>Return to Home</button>
                </Link>
            </div>
        </>
    );
}
