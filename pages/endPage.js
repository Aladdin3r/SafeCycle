import { useEffect, useState } from "react";
import styles from "@/styles/quiz.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function EndPage() {
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const count = parseInt(window.sessionStorage.getItem('correctCount')) || 0;
            setCorrectCount(count);
        }
    }, []);

    return (
        <>
            <div className={styles.end}>
                <h2>Thanks for taking the quiz!</h2>
                <Image className={styles.quizImage} src="/images/quizfinished.jpeg" alt="person hitch hiking" width={332} height={309} />
                <h4>You got {correctCount} / 4 Questions Correct!</h4>
                <Button 
                    href="./maps"
                    label="Return to Map"
                />
            </div>
        </>
    );
}
