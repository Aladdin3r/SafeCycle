import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";
import { useState } from "react";
import styles from "@/styles/quiz.module.css";

export default function QuestionFour() {
    const currentQuestion = questions[3];
    const [answerStatus, setAnswerStatus] = useState(null); // State to track answer status

    return (
        <>
            <h3 className={styles.question}>{currentQuestion.qText}</h3>
            <div className={`${styles.answerContainer} quiz`}>
                {currentQuestion.choices.map((choice, index) => (
                    <Answer
                        key={index}
                        text={choice}
                        correctAnswer={currentQuestion.correctAnswer}
                        onNext={(isCorrect) => setAnswerStatus(isCorrect)}
                        lesson={currentQuestion.lesson}
                    />
                ))}
            </div>
            {answerStatus !== null && (
                <div className={styles.feedback}>
                    {answerStatus ? "Correct!" : "Wrong. Try again!"}
                </div>
            )}
            <div className={styles.navigate}>
                <Link href="./questionThree">
                    <button className={styles.buttonsecondary}>Back</button>
                </Link>
                <Link href="./endPage">
                    <button className={styles.button} disabled={answerStatus === null}>Submit</button>
                </Link>
            </div>
        </>
    );
}
