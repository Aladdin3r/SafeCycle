import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";
import styles from "@/styles/quiz.module.css";

export default function QuestionFour() {
    const currentQuestion = questions[3];

    return (
        <>
            <h3 className={styles.question}>{currentQuestion.qText}</h3>
            <div className={styles.answerContainer}>
                {
                    currentQuestion.choices.map((choice, index) => (
                        <Answer 
                            key={index} 
                            name="questionOne"
                            text={choice} 
                        />
                    ))
                }
            </div>
            <div className={styles.navigate}>
                <Link href="./questionThree">
                    <button className={styles.buttonsecondary}>Back</button>
                </Link>
                <Link href="./endPage">
                    <button className={styles.button}>Submit</button>
                </Link>
            </div>
        </>
    );
}
