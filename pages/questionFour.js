import { questions } from "@/data/quizData";
import Answer from "@/components/Answer";
import { useState } from "react";
import styles from "@/styles/quiz.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function QuestionFour() {
    const currentQuestion = questions[3];
    const [answerStatus, setAnswerStatus] = useState(null);

    return (
        <>
            <div className={styles.quizContainer}>
                <h3 className={styles.question}>{currentQuestion.qText}</h3>
                <Image className={styles.quizImage} src="/images/quiz4.jpeg" alt="image of family walking through crosswalk" width={285} height={212} />
                <div className={`${styles.answerContainer} quiz`}>
                    {currentQuestion.choices.map((choice, index) => (
                        <Answer
                            key={index}
                            tabindex={index + 1}
                            option={String.fromCharCode(65 + index)}
                            text={choice}
                            correctAnswer={currentQuestion.correctAnswer}
                            onNext={(isCorrect) => setAnswerStatus(isCorrect)}
                            lesson={currentQuestion.lesson}
                        />
                    ))}
                </div>
            </div>

            {answerStatus !== null && (
                <div className={styles.feedback}>
                    {answerStatus ? "Correct!" : "Incorrect!"}
                </div>
            )}
            <div className={styles.navigate}>
                <Button 
                    href="./endPage"
                    label="Submit Answer"
                    disabled={answerStatus === null}
                    width="372px"
                />
            </div>
        </>
    );
}
