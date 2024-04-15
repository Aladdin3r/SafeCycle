import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer({ text, correctAnswer, onNext, lesson }) {
    // Define sessionStorage if it's available
    const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : null;

    // Initialize selected state with the value stored in session storage or false if not available
    const [selected, setSelected] = useState(sessionStorage?.getItem('selectedAnswer') === text);
    const [lessonShown, setLessonShown] = useState(false);

    const handleAnswerClick = () => {
        setSelected(true);
        sessionStorage?.setItem('selectedAnswer', text); // Store selected answer in session storage if available
        if (text !== correctAnswer) {
            setLessonShown(true); // Show lesson if the answer is wrong
        }
        onNext(text === correctAnswer);
    };

    return (
        <div>
            <div className={`${styles.answerBox} ${selected ? styles.selected : ''} ${selected && text === correctAnswer ? styles.correct : ''}`} onClick={handleAnswerClick}>
                <input type="radio" name="answer" className={styles.radioButton} checked={selected} onChange={() => {}} />
                <label className={styles.label}>{text}</label>
            </div>
            {lessonShown && (
                <div className={styles.lesson}>
                    <p>{lesson}</p>
                </div>
            )}
        </div>
    );
}
