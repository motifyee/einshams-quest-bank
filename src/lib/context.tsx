import {
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    useState,
} from 'react';
const defaultAction: Dispatch<SetStateAction<Settings>> = () => {};
import { createContext, useContextSelector } from 'use-context-selector';

/**
 * tests: testId[]
 * test: qg[]
 * qg: question[]
 * questions: all question[]
 */
type StoreKey =
    | 'ticScore'
    | 'scoreTic'
    | 'activeTestId'
    | 'setActiveTestId'
    | 'unblurredQuestion'
    | 'setUnblurredQuestion'
    | 'sidebarOn'
    | 'setSidebarOn'
    | 'testModeOn'
    | 'setTestModeOn'
    | 'correctAnswers'
    | 'setCorrectAnswers'
    | 'shuffleQuestions'
    | 'setShuffleQuestions'
    | 'shuffleAnswers'
    | 'setShuffleAnswers'
    | 'blurAnswers'
    | 'setBlurAnswers'
    | 'init'
    | 'getTest'
    | 'testsIds'
    | 'getQG'
    | 'getQGs'
    | 'getQGQs'
    | 'getTestQs'
    | 'getQ'
    | 'setQ'
    | 'setQG'
    | 'setTest'
    | 'testCorrectAnswersCount';

interface GenericStore {
    [id: string]:
        | Question
        | string
        | string[]
        | boolean
        | Dispatch<SetStateAction<string>>
        | Dispatch<SetStateAction<boolean>>
        | Function;
}
interface Store extends GenericStore {
    ticScore: () => void;
    scoreTic: boolean;
    activeTestId: string;
    setActiveTestId: Dispatch<SetStateAction<string>>;
    unblurredQuestion: string;
    setUnblurredQuestion: Dispatch<SetStateAction<string>>;
    sidebarOn: boolean;
    setSidebarOn: Dispatch<SetStateAction<boolean>>;
    testModeOn: boolean;
    setTestModeOn: Dispatch<SetStateAction<boolean>>;
    correctAnswers: boolean;
    setCorrectAnswers: Dispatch<SetStateAction<boolean>>;
    shuffleQuestions: boolean;
    setShuffleQuestions: Dispatch<SetStateAction<boolean>>;
    shuffleAnswers: boolean;
    setShuffleAnswers: Dispatch<SetStateAction<boolean>>;
    blurAnswers: boolean;
    setBlurAnswers: Dispatch<SetStateAction<boolean>>;

    init: Function;

    getTest: (id: string) => Test;
    getAllTests: () => Test[];
    testsIds: string[];
    getQG: (gId: string) => QuestionGroup;
    getQGs: (tId: string) => QuestionGroup[];
    getQGQs: (gId: string) => Question[];
    getTestQs: (tId?: string) => Question[];
    getQ: (qId: string) => Question;
    setQ: (q: Question) => void;
    setQG: (qg: QuestionGroup) => void;
    setTest: (test: Test) => void;

    testCorrectAnswersCount: (tId?: string) => number;
}

const useStoreHK = (): Store => {
    const [scoreTic, setScoreTic] = useState(false);
    const ticScore = useCallback(() => setScoreTic((v) => !v), []);

    const [tests, setTests] = useState<{ [id: string]: Test }>({});
    // [qgId: questionIds[]]
    const [qgs, setQgs] = useState<{ [id: string]: QuestionGroup }>({});
    // [qId: Question[]]
    const [questions, setQs] = useState<{ [id: string]: Question }>({});

    const [activeTestId, setActiveTestId] = useState('');

    const [unblurredQuestion, setUnblurredQuestion] = useState('');

    const [sidebarOn, setSidebarOn] = useState(false);

    const [testModeOn, setTestModeOn] = useState(true);
    const [correctAnswers, setCorrectAnswers] = useState(true);

    const [shuffleQuestions, setShuffleQuestions] = useState(false);
    const [shuffleAnswers, setShuffleAnswers] = useState(false);
    const [blurAnswers, setBlurAnswers] = useState(true);
    // const getQ = useCallback((qId: string): Question => questions[qId], []);
    const getQG = useCallback(
        (qgId: string): QuestionGroup => qgs[qgId],
        [qgs]
    );

    const getQ = useCallback(
        function (qId: string): Question {
            return questions[qId];
        },
        [questions]
    );

    const getTestQs = useCallback(
        (tId: string = activeTestId) => {
            return tests[tId]?.qgIds
                .reduce((p: string[], c) => [...p, ...getQG(c).questionIds], [])
                .map(getQ);
        },
        [activeTestId]
    );

    return {
        ticScore,
        scoreTic,
        ...tests,
        ...qgs,
        ...questions,

        init: useCallback((rawTests: Test[]) => {
            let tests: { [id: string]: Test } = {},
                qgs: { [id: string]: QuestionGroup } = {},
                questions: { [id: string]: Question } = {};

            for (const test of [...rawTests]) {
                for (const qg of test.qgs ?? []) {
                    for (const q of qg.questions ?? []) {
                        questions[q.id] = q;
                    }
                    delete qg.questions;
                    qgs[qg.id] = qg;
                }
                delete test.qgs;
                tests[test.id] = test;
            }

            setActiveTestId(rawTests[0].id);
            setTests(tests);
            setQgs(qgs);
            setQs(questions);
        }, []),

        testsIds: Object.keys(tests),
        getTest: useCallback((testId) => tests[testId], [tests]),
        getAllTests: useCallback(
            () => Object.keys(tests).map((t) => tests[t]),
            [tests]
        ),

        getQG,
        getQGs: useCallback(
            (testId) => tests[testId].qgIds.map(getQG),
            [tests]
        ),

        getQ,
        getQGQs: useCallback((qgId) => qgs[qgId].questionIds.map(getQ), [qgs]),
        getTestQs,

        testCorrectAnswersCount: useCallback(
            (tId = activeTestId) =>
                getTestQs(tId)?.reduce(
                    (p: number, c: Question) => p + (c.isCorrect() ? 1 : 0),
                    0
                ),
            [activeTestId]
        ),

        setQ: useCallback(
            (q: Question) => setQs((e) => ({ ...e, [q.id]: q })),
            []
        ),
        setQG: useCallback(
            (g: QuestionGroup) => setQgs((e) => ({ ...e, [g.id]: g })),
            []
        ),
        setTest: useCallback(
            (t: Test) => setTests((e) => ({ ...e, [t.id]: t })),
            []
        ),

        activeTestId: activeTestId ? activeTestId : Object.keys(tests)[0] ?? '',
        setActiveTestId,
        unblurredQuestion,
        setUnblurredQuestion,
        sidebarOn,
        setSidebarOn,
        testModeOn,
        setTestModeOn,
        correctAnswers,
        setCorrectAnswers,
        shuffleQuestions,
        setShuffleQuestions,
        shuffleAnswers,
        setShuffleAnswers,
        blurAnswers,
        setBlurAnswers,
    };
};

export const StoreCtx = createContext<Store>({} as Store);
export default function StoreCtxPorvider({ children }: any) {
    let store = useStoreHK();
    return <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>;
}

export const useStore = () => useContextSelector(StoreCtx, (s) => s);

export const useTestSettings = () =>
    useContextSelector(
        StoreCtx,
        ({ testModeOn, correctAnswers, setTestModeOn, setCorrectAnswers }) => ({
            testModeOn,
            correctAnswers,
            setTestModeOn,
            setCorrectAnswers,
        })
    );
export const useSettings = () =>
    useContextSelector(
        StoreCtx,
        ({
            unblurredQuestion,
            activeTestId,
            blurAnswers,
            shuffleQuestions,
            setActiveTestId,
            setBlurAnswers,
            setShuffleQuestions,
        }) => ({
            unblurredQuestion,
            activeTestId,
            blurAnswers,
            shuffleQuestions,
            setActiveTestId,
            setBlurAnswers,
            setShuffleQuestions,
        })
    );
const cb = (fn: Function) => useCallback(fn, []);

function ctx<Selected>(fn: (value: Store) => Selected): () => Selected {
    return () => useContextSelector(StoreCtx, fn);
}

export const useTicScore = ctx((s) => s.ticScore);
export const useScoreTic = ctx((s) => s.scoreTic);

export const useUnblurredQuestion = ctx((s) => s.unblurredQuestion);
export const useSetUnblurredQuestion = ctx((s) => s.setUnblurredQuestion);
export const useActiveTestId = ctx((s) => s.activeTestId);
export const useBlurAnswers = ctx((s) => s.blurAnswers);
export const useSidebarOn = ctx((s) => s.sidebarOn);
export const useSetSidebarOn = ctx((s) => s.setSidebarOn);
export const useShuffleQuestions = ctx((s) => s.shuffleQuestions);
export const useSetActiveTestId = ctx((s) => s.setActiveTestId);
export const useSetBlurAnswers = ctx((s) => s.setBlurAnswers);
export const useSetShuffleQuestions = ctx((s) => s.setShuffleQuestions);

export const useTestModeOn = ctx((s) => s.testModeOn);
export const useCorrectAnswers = ctx((s) => s.correctAnswers);
export const useSetTestModeOn = ctx((s) => s.setTestModeOn);
export const useSetCorrectAnswers = ctx((s) => s.setCorrectAnswers);

export const useTestsIds = ctx((s) => s.testsIds);

export const useInit = ctx((s) => s.init);
export const useGetTest = ctx((s) => s.getTest);
export const useGetQG = ctx((s) => s.getQG);
export const useGetQGs = ctx((s) => s.getQGs);
export const useGetQGQs = ctx((s) => s.getQGQs);
export const useGetTestQs = ctx((s) => s.getTestQs);
export const useGetAllTests = ctx((s) => s.getAllTests);
export const useGetQ = ctx((s) => s.getQ);
export const useSetQ = ctx((s) => s.setQ);
export const useSetQG = ctx((s) => s.setQG);
export const useSetTest = ctx((s) => s.setTest);
