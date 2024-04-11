export default function QuizTemplate({
    type="radio"
}) {
    return (
    <>
     <div>
        {type === "radio" && <input type="radio" />}
    </div>
    </>
    )
}