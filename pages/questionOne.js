import { questions } from "@/data/quizData";
import Answer from "@/components/Answer";
import { useState } from "react";
import styles from "@/styles/quiz.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function QuestionOne() {
    const currentQuestion = questions[0];
    const [answerStatus, setAnswerStatus] = useState(null);

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
                    href="./questionTwo"
                    label="Submit Answer"
                    disabled={answerStatus === null}
                />
            </div>
        </>
    );
}

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { questions } from "@/data/quizData";
// import Answer from "@/components/Answer";
// import Button from "@/components/Button";
// import styles from "@/styles/quiz.module.css";
// import Image from "next/image";

// export default function QuestionOne() {
//     const router = useRouter();
//     const currentQuestion = questions[0];
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [lessonShown, setLessonShown] = useState(false);

//     const handleAnswerSelection = (selected) => {
//         setSelectedAnswer(selected);
//     };

//     const handleSubmit = () => {
//         if (selectedAnswer !== null) {
//             const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
//             setLessonShown(true);
//             router.push({
//                 pathname: isCorrect ? "/correctPage" : "/incorrectPage",
//                 query: { lesson: currentQuestion.lesson }
//             });
//         }
//     };

//     return (
//         <div className={styles.quizContainer}>
//             <h3 className={styles.question}>{currentQuestion.qText}</h3>
//             <Image className={styles.quizImage} src="/images/quiz1.jpeg" alt="image of family walking through crosswalk" width={318} height={212} />
//             <div className={`${styles.answerContainer} quiz`}>
//                 {currentQuestion.choices.map((choice, index) => (
//                     <Answer
//                         key={index}
//                         option={String.fromCharCode(65 + index)}
//                         text={choice}
//                         correctAnswer={currentQuestion.correctAnswer}
//                         onSelection={handleAnswerSelection}
//                         selected={selectedAnswer === choice}
//                         disabled={lessonShown}
//                     />
//                 ))}
//             </div>
//             {lessonShown && (
//                 <div className={styles.feedback}>
//                     {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect!"}
//                 </div>
//             )}
//             <div className={styles.navigate}>
//                 <Button
//                     label="Submit Answer"
//                     onClick={handleSubmit}
//                     disabled={selectedAnswer === null || lessonShown}
//                 />
//             </div>
//         </div>
//     );
// }
