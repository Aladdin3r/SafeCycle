import { questions } from "@/data/quizData";
import Answer from "@/components/Answer";
import { useState } from "react";
import styles from "@/styles/quiz.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function QuestionThree() {
    const currentQuestion = questions[2];
    const [answerStatus, setAnswerStatus] = useState(null);

    return (
        <>
            <div className={styles.quizOneContainer}>
                <h3 className={styles.question}>{currentQuestion.qText}</h3>
                <Image className={styles.quizImage} src="/images/quiz3.jpeg" alt="image of family walking through crosswalk" width={318} height={212} />
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
                    href="./questionFour"
                    label="Submit Answer"
                    disabled={answerStatus === null}
                />
            </div>
        </>
    );
}
