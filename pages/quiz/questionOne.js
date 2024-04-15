import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";
import styles from "@/styles/quiz.module.css";

export default function QuestionOne() {
    const currentQuestion = questions[0];

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
                    <button className={styles.button}>Next</button>
                </Link>
            </div>
        </>
    );
}
