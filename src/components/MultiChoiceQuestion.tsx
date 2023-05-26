import Question from './Question';
import Answers from './Answers';
import { memo, useCallback, useContext, useMemo } from 'react';
import { SettingsActionsContext, SettingsContext } from '../lib/context';

const MultiSelectQuestion = memo(
    ({
        qgId,
        question,
        index,
        blurred,
        unblur,
        correctAnswers,
    }: {
        qgId: string;
        question: MultiChoiceQuestion;
        index: number;
        blurred: boolean;
        unblur: (questionId: string) => void;
        correctAnswers: boolean;
    }) => {
        const answersEl = <Answers question={question} qgId={qgId} />;

        const questionEl = (
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
        );

        const props = {
            id: question.id,
            index,
            questionEl,
            answersEl,
            question,
            correctAnswers,
            blurred,
            unblur,
        };
        // const blur = useMemo(
        //     () => ({
        //     }),
        //     [blurred, unblur]
        // );

        return <Question {...blur} {...props} />;
    }
);

export default function MultiSelectQuestionGroup({
    questionGroup: qg,
    index,
}: {
    questionGroup: MultiChoiceQuestionGroup;
    index: number;
}) {
    const settings = useContext(SettingsContext);
    const setSettings = useContext(SettingsActionsContext);

    const blurred = (id: string) =>
        !(settings.unblurredQuestion === id) &&
        settings.blurAnswers &&
        !settings.testModeOn;

    const unblur = useCallback(
        (questionId: string) =>
            setSettings((settings) => ({
                ...settings,
                unblurredQuestion: questionId,
            })),
        []
    );
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
                        correctAnswers={settings.correctAnswers}
                    />
                    <br />
                </div>
            ))}
        </div>
    );
}
