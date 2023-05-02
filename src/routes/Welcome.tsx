import { useId, useState } from 'react';

export default function Welcome() {
    const id = useId();

    const question = {
        id: 1,
        questionText: 'What is the most used programming language in 2019?',
        answers: [
            { text: 'Java is very good', correct: false },
            { text: 'C', correct: false },
            { text: 'Python', correct: true },
            {
                text: 'JavaScript is the most used programming language in 2019',
                correct: false,
            },
        ],
    };
    const [selectedAnswer, setSelectedAnswer] = useState(-0);
    console.log('rendering ...', selectedAnswer);

    function handleStyles(obj: object) {
        return new Proxy(obj, {
            get: (target: any, prop: string) => ({
                'data-tw': target[prop] ?? '',
            }),
        });
    }
    const style = {
        container: 'border shadow-quest rounded-md p-4 w-full',
        question: 'text-white',
        answers:
            'flex flex-wrap gap-2 justify-center content-center items-center',
        answer: (index: number) => `
            min-w-45 shadow-ans rounded
            flex cursor-pointer items-center
            ${
                Object.is(index, selectedAnswer)
                    ? 'bg-amber-700'
                    : 'bg-slate-800'
            }
        `,
        answerLabel: 'p-1 cursor-pointer w-full text-center',
        answerSelected: 'bg-amber-700',
        answerNotSelected: 'bg-slate-800',
    };

    return (
        <div className={style.container}>
            <div className={style.question}>{question.questionText}</div>
            <br />
            <div className={style.answers}>
                {question.answers.map((answer, index) => (
                    <div key={index} className={style.answer(index)}>
                        <input
                            type="radio"
                            onChange={(e) => setSelectedAnswer(index)}
                            name="answer"
                            id={`answer${id}${index}`}
                            className="hidden"
                            // data-tw={'hidden'}
                        />
                        <label
                            htmlFor={`answer${id}${index}`}
                            className={style.answerLabel}
                        >
                            {answer.text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

// <div
// className="p-2 mx-auto
// bg-blue-500 rounded-full
// max-[600px]:bg-sky-300 flex font-black border border-zinc-400">
//     <h1 className="p-2 text-orange-500 border-y border-l rounded-l-full bg-sky-300">Welcome 2</h1>
//     <p className="p-2 bg-orange-500 rounded-r-full border-y border-r">
//         <code>src/routes/Welcome.tsx</code>
//     </p>
// </div>
