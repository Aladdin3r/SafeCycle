

export default function QuizTemplate({
    type="radio"
}) {
    return (
    <>
        <div> this me
            {type === "radio" && <imput type="radio" />}
        </div>    
    </>
    )
}