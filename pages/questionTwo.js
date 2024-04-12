import Link from "next/link";
import { questions } from "./quiz/quizData";

export default function QuestionTwo() {
    const currentQuestion = questions[1]; // Get the first question object

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
            {
                currentQuestion.choices.map((choice, index) => (
                    <p key={index}>{choice}</p>
                ))
            }
            <Link href="/questionOne">
                <button>Back</button>
            </Link>
            <Link href="/questionThree">
                <button>Next</button>
            </Link>
        </>
    );
}