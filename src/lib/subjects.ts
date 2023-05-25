import AgriGuiding1 from '../fetches/agri-guiding-1';
import AgriPolicy1 from '../fetches/agri-policies-1';
import AgriPolicy2 from '../fetches/agri-policies-2';
import ITQuestions1 from '../fetches/international-trade-1';
import ITQuestions2 from '../fetches/international-trade-2';
import ProjEval1 from '../fetches/proj-eval-1';
import ProjEval2 from '../fetches/proj-eval-2';
import Qualtiy1 from '../fetches/quality-1';
import Qualtiy2 from '../fetches/quality-2';

export interface Subject {
    id: string;
    name: string;
    teacher: string;
    tests: Test[];
    scores?: Score[];
}

const subjects: Subject[] = [
    {
        id: '1',
        name: 'إرشاد زراعي',
        teacher: 'د. محمد عبد العزيز',
        tests: [AgriGuiding1],
    },
    {
        id: '2',
        name: 'إدارة جودة — 1',
        teacher: 'د. محمد عبد العزيز',
        tests: [Qualtiy1],
    },
    {
        id: '3',
        name: 'إدارة جودة — 2',
        teacher: 'د. محمد عبد العزيز',
        tests: [Qualtiy2],
    },
    {
        id: '4',
        name: 'تجارة دولية — 1',
        teacher: 'د. محمد عبد العزيز',
        tests: [ITQuestions1],
    },
    {
        id: '5',
        name: 'تجارة دولية — 2',
        teacher: 'د. محمد عبد العزيز',
        tests: [ITQuestions2],
    },
    {
        id: '6',
        name: 'سياسة رزاعية — 1',
        teacher: 'د. محمد عبد العزيز',
        tests: [AgriPolicy1],
    },
    {
        id: '7',
        name: 'سياسة رزاعية — 2',
        teacher: 'د. محمد عبد العزيز',
        tests: [AgriPolicy2],
    },
    {
        id: '8',
        name: 'تقييم مشروعات — 1',
        teacher: 'د. محمد عبد العزيز',
        tests: [ProjEval1],
    },
    {
        id: '9',
        name: 'تقييم مشروعات — 2',
        teacher: 'د. محمد عبد العزيز',
        tests: [ProjEval2],
    },
];
export default subjects;
