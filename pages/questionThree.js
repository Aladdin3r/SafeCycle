import Link from "next/link";
import { questions } from "./quiz/quizData";

export default function QuestionThree() {
    const currentQuestion = questions[2]; // Get the first question object

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
            {
                currentQuestion.choices.map((choice, index) => (
                    <p key={index}>{choice}</p>
                ))
            }
            <Link href="/questionTwo">
                <button>Back</button>
            </Link>
            <Link href="/questionFour">
                <button>Next</button>
            </Link>
        </>
    );
}