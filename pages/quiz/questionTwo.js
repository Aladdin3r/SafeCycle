import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";

export default function QuestionTwo() {
    const currentQuestion = questions[1];

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

            <Link href="./questionOne">
                <button>Back</button>
            </Link>
            <Link href="./questionThree">
                <button>Next</button>
            </Link>
        </>
    );
}
