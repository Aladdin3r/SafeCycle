import Link from "next/link";
import { questions } from "./quizData";
import Answer from "@/components/Answer";

export default function QuestionThree() {
    const currentQuestion = questions[2];

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

            <Link href="./questionTwo">
                <button>Back</button>
            </Link>
            <Link href="./questionFour">
                <button>Next</button>
            </Link>
        </>
    );
}
