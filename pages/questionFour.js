import Link from "next/link";
import { questions } from "./quiz/quizData";

export default function QuestionFour() {
    const currentQuestion = questions[3]; // Get the first question object

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
            {
                currentQuestion.choices.map((choice, index) => (
                    <p key={index}>{choice}</p>
                ))
            }
            <Link href="/questionThree">
                <button>Back</button>
            </Link>
            <Link href="">
                <button>Submit</button>
            </Link>
        </>
    );
}