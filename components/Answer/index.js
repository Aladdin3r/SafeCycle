import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer({ option, text, correctAnswer, onNext, lesson }) {
   
    const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : null;

    const [selected, setSelected] = useState(sessionStorage?.getItem('selectedAnswer') === text);
    const [lessonShown, setLessonShown] = useState(false);

    const handleAnswerClick = () => {
        setSelected(true);
        sessionStorage?.setItem('selectedAnswer', text);
        if (text !== correctAnswer) {
            setLessonShown(true);
        }
        onNext(text === correctAnswer);
    };

    return (
        <div>
            <div className={`${styles.answerBox} ${selected ? styles.selected : ''} ${selected && text === correctAnswer ? styles.correct : ''}`} onClick={handleAnswerClick}>
                <input type="radio" name="answer" className={styles.radioButton} checked={selected} onChange={() => {}} />
                <label className={styles.label}>{option}. {text}</label>
            </div>
            {lessonShown && (
                <div className={styles.lesson}>
                    <p>{lesson}</p>
                </div>
            )}
        </div>
    );
}
