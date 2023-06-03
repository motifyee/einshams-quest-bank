import { Dispatch, SetStateAction } from 'react';
import { create } from 'zustand';
import type { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GenericData {
    [id: string]:
        | Question
        | string
        | QuestionGroup
        | Test
        | string[]
        | boolean
        | Dispatch<SetStateAction<string>>
        | Dispatch<SetStateAction<boolean>>
        | Function;
}
interface Data extends GenericData {
    init: (initial: Test[]) => void;
    updateById: (value: Question | QuestionGroup | Test) => void;

    activeTestId: string;
    getTestQs: (tId: string) => Question[];

    // testsIds: string[];
    // getTest: (id: string) => Test;
    // getAllTests: () => Test[];
    // getQG: (gId: string) => QuestionGroup;
    // getQGs: (tId: string) => QuestionGroup[];
    // getQGQs: (gId: string) => Question[];
    // getTestQs: (tId?: string) => Question[];
    // getQ: (qId: string) => Question;
    // setQ: (q: Question) => void;
    // setQG: (qg: QuestionGroup) => void;
    // setTest: (test: Test) => void;

    // testCorrectAnswersCount: (tId?: string) => number;
}

const settings: StateCreator<Settings> = (set) => ({
        activeTestId: '',
        unblurredQuestion: '',
        sidebarOn: false,
        testModeOn: false,
        correctAnswers: false,
        shuffleQuestions: false,
        blurAnswers: false,
        update: (key, value) =>
            set((state) => ({
                [key]: typeof value === 'function' ? value(state[key]) : value,
            })),
    }),
    settingsDev = devtools(settings),
    settingsPresist = persist(settingsDev, { name: 'settings' }),
    useSettingsStore = create(settingsPresist);

const data: StateCreator<Data> = (set, get) => ({
        init: (initial: Test[]) => {
            let tests: { [id: string]: Test } = {},
                qgs: { [id: string]: QuestionGroup } = {},
                questions: { [id: string]: Question } = {};

            for (const test of [...initial]) {
                // console.log(test);
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

            set({ activeTestId: initial[0].id });

            set(tests);
            set(qgs);
            set(questions);
        },
        activeTestId: '',
        updateById: (value) => set({ [value.id]: value }),
        getTestQs: (tId) => {
            let s = get();
            let qgIds = (s[tId] as Test)?.qgIds;
            let mapQG = (qgId: string) =>
                (s[qgId] as QuestionGroup).questionIds.map(
                    (id) => s[id] as Question
                );

            return qgIds?.reduce(
                (p, c) => [...p, ...mapQG(c)],
                [] as Question[]
            );
        },
        // testsIds: [],
        // getTest: (id: string) => null,
        // getAllTests: () => null,
        // getQG: (gId: string) => null,
        // getQGs: (tId: string) => null,
        // getQGQs: (gId: string) => null,
        // getTestQs: (tId?: string) => null,
        // getQ: (qId: string) => null,
        // setQ: (q: Question) => null,
        // setQG: (qg: QuestionGroup) => null,
        // setTest: (test: Test) => null,

        // testCorrectAnswersCount: (tId?: string) => null,
    }),
    dataDev = devtools(data);
const useDataStore = create(dataDev);

export { useSettingsStore, useDataStore };
