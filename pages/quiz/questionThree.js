import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";
import styles from "@/styles/quiz.module.css";

export default function QuestionThree() {
    const currentQuestion = questions[2];

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
                <Link href="./questionTwo">
                    <button className={styles.buttonsecondary}>Back</button>
                </Link>
                <Link href="./questionFour">
                    <button className={styles.button}>Next</button>
                </Link>
            </div>
        </>
    );
}
