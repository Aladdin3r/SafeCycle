import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";

export default function QuestionFour() {
    const currentQuestion = questions[3];

    return (
        <>
            <h1>{currentQuestion.qText}</h1>
            {
                currentQuestion.choices.map((choice, index) => (
                    <Answer 
                        key={index} 
                        name="questionOne"
                        text={choice} 
                    />
                ))
            }

            <Link href="./questionThree">
                <button>Back</button>
            </Link>
            <Link href="./endPage">
                <button>Submit</button>
            </Link>
        </>
    );
}
