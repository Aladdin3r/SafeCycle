import { useState, useEffect } from "react";
import styles from "./Answer.module.css";

export default function Answer({ option, text, correctAnswer, onNext, lesson, tabindex, onAnswerSelect }) {
    const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : null;
    const [selected, setSelected] = useState(sessionStorage?.getItem('selectedAnswer') === text);
    const [lessonShown, setLessonShown] = useState(false);

    useEffect(() => {
        if (selected) {
            onAnswerSelect(true);
        }
    }, [selected, onAnswerSelect]);

    const handleAnswerClick = () => {
        setSelected(true);
        sessionStorage?.setItem('selectedAnswer', text);
        if (text !== correctAnswer) {
            setLessonShown(true);
        } else {
            const correctCount = parseInt(sessionStorage?.getItem('correctCount')) || 0;
            sessionStorage?.setItem('correctCount', correctCount + 1);
        }
        onNext(text === correctAnswer);
    };

    return (
        <div>
            <div className={`${styles.answerBox} ${selected ? styles.selected : ''} ${selected && text === correctAnswer ? styles.correct : ''}`} onClick={handleAnswerClick} tabIndex={tabindex} onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    handleAnswerClick();
                }
            }}>
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
