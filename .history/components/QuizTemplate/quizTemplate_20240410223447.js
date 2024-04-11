

export default function QuizTemplate({
    type="radio"
}) {
    return (
    <>
        {/* <div> 
            {type === "radio" && <imput type="radio" />}
        </div>     */}

        <div>
      {type === "radio" && <input type="radio" />}
    </div>
    </>
    )
}