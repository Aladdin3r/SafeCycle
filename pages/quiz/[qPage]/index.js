"use client"
import QuizTemplate from "@/components/QuizTemplate"
import { questions } from "../quizData"
import { useEffect, useState } from "react"

export default function Quiz(params) {

    const [qs, setQs] = useState(questions)
    const [curPage, setCurPage] = useState(0);

    useEffect(()=>{
        if(params.qPage && !isNaN(param.qPage)){
            setCurPage(Number(params.qPage));
        }
    },[params.qPage])

    if(isNaN(params.qPage)){
        return(
            <div>test</div>
        )
    }

    console.log("question data", qs, curPage, qs[curPage]);
    return (
        <>
        <div>
            {params.qPage}
            <QuizTemplate 
                type={qs[curPage].Type}
                qText={qs[curPage].qText}
                choices={qs[curPage].choices}
            />
        </div>
        </>
    )
}