import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/quiz.module.css";

export default function QuizHome() {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <div>
                    <h1>Take the Quiz</h1>
                </div>
            </div>
        </>
    )
}