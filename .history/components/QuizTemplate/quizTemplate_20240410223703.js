

// export default function QuizTemplate({
//     type="radio"
// }) {
//     return (
//     <>
//      <div>
//         {type === "radio" && <input type="radio" />}
//     </div>
//     </>
//     )
// }

import React from 'react';

export const QuizTemplate = ({ type }) => {
  return (
    <>
    <div>
      {type === "radio" && <input type="radio" />}
    </div>
    </>
  );
};