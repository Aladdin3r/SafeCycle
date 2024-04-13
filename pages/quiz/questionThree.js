import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";
import styles from "@/styles/quiz.module.css";

export default function QuestionThree() {
    const currentQuestion = questions[2];

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
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
            <Link href="./questionTwo">
                <button>Back</button>
            </Link>
            <Link href="./questionFour">
                <button>Next</button>
            </Link>
        </>
    );
}
