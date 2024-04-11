

export default function QuizTemplate({
    type="radio"
}) {
    return (
    <>
        <div> 
            <button>{type === "radio" && <imput type="radio" />}</button>
        </div>    
    </>
    )
}