import Image from "next/image";
import Header from "@/components/Header";

export default function QuizHome() {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <div>
                    <h1>Take the Quiz</h1>
                </div>
            </div>
        </>
    )
}