import Question from './Question';
import Answers from './Answers';
import { useCallback, useContext, useMemo } from 'react';
import { SettingsActionsContext, SettingsContext } from '../lib/context';

export function MultiSelectQuestion({
    qgId,
    question,
    index,
    blurred,
    unblur,
}: {
    qgId: string;
    question: MultiChoiceQuestion;
    index: number;
    blurred: boolean;
    unblur: (questionId: string) => void;
}) {
    const answers = useMemo(
        () => <Answers question={question} qgId={qgId} />,
        [question, qgId]
    );

    const questionElement = useMemo(
        () => (
            <>
                <span>{question.questionText}</span>
                {/* Image */}
                {question.image && (
                    <img
                        src={'./assets/' + question.image}
                        alt={question.imageAlt}
                        className="quest-image w-full h-auto my-2 "
                    />
                )}
            </>
        ),
        [question.questionText, question.image, question.imageAlt]
    );

    const props = useMemo(
        () => ({
            id: question.id,
            index,
            questionElement,
            question,
            answers,
            blurred,
            unblur,
        }),
        [blurred]
    );

    return <Question {...props} />;
}

export default function MultiSelectQuestionGroup({
    questionGroup: qg,
    index,
}: {
    questionGroup: MultiChoiceQuestionGroup;
    index: number;
}) {
    const settings = useContext(SettingsContext);
    const setSettings = useContext(SettingsActionsContext);
    const unblur = (questionId: string) =>
        setSettings((settings) => ({
            ...settings,
            unbluredQuestion: questionId,
        }));

    const blurred = (id: string) =>
        !(settings.unbluredQuestion === id) &&
        settings.blurAnswers &&
        !settings.testModeOn;

    const { questions } = qg;

    return (
        <div className="question-group">
            <div className="question-group-title">{qg.title}</div>
            {questions.map((q, i) => (
                <div key={q.id}>
                    <MultiSelectQuestion
                        qgId={qg.id}
                        question={q}
                        index={index + i + 1}
                        blurred={blurred(q.id)}
                        unblur={unblur}
                    />
                    <br />
                </div>
            ))}
        </div>
    );
}
