import { questions } from "@/data/quizData";
import Answer from "@/components/Answer";
import { useState } from "react";
import styles from "@/styles/quiz.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function QuestionOne() {
    const currentQuestion = questions[0];
    const [answerSelected, setAnswerSelected] = useState(false);
    const [answerStatus, setAnswerStatus] = useState(null);

    const handleAnswerSelection = () => {
        setAnswerSelected(true);
    };

    const handleNext = (isCorrect) => {
        setAnswerStatus(isCorrect);
    };

    return (
        <>
            <div className={styles.quizContainer}>
                <h3 className={styles.question}>{currentQuestion.qText}</h3>
                <Image className={styles.quizImage} src="/images/quiz1.jpeg" alt="image of family walking through crosswalk" width={318} height={212} />
                <div className={`${styles.answerContainer} quiz`}>
                    {currentQuestion.choices.map((choice, index) => (
                        <Answer
                            key={index}
                            tabindex={index + 1}
                            option={String.fromCharCode(65 + index)}
                            text={choice}
                            correctAnswer={currentQuestion.correctAnswer}
                            onNext={handleNext}
                            lesson={currentQuestion.lesson}
                            onAnswerSelect={handleAnswerSelection}
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
                    href="./questionTwo"
                    label="Submit Answer"
                    disabled={!answerSelected}  
                    width="372px"
                />
            </div>
        </>
    );
}
