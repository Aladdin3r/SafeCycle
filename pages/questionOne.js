import Link from "next/link";
import { questions } from "./quiz/quizData";

export default function QuestionOne() {
    const currentQuestion = questions[0];

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
            {
                currentQuestion.choices.map((choice, index) => (
                    <p key={index}>{choice}</p>
                ))
            }
            <Link href="/questionTwo">
                <button>Next</button>
            </Link>
        </>
    );
}