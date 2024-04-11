
import Link from 'next/link'
export default function QuizTemplate({
    type="radio"
}) {
    return (
       
        <div>
            {type === "radio" && <imput type="radio" />}
        </div>    
    
    )
}