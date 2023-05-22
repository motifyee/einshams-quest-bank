import AgriGuiding1 from '../fetches/agri-guiding-1';
import AgriPolicy1 from '../fetches/agri-policies-1';
import AgriPolicy2 from '../fetches/agri-policies-2';
import ITQuestions1 from '../fetches/international-trade-1';
import ITQuestions2 from '../fetches/international-trade-2';
import ProjEval1 from '../fetches/proj-eval-1';
import ProjEval2 from '../fetches/proj-eval-2';
import Qualtiy1 from '../fetches/quality-1';
import Qualtiy2 from '../fetches/quality-2';

export const subjects: Subjects = {
    'إرشاد زراعي': AgriGuiding1,

    'إدارة جودة — 1': Qualtiy1,
    'إدارة جودة — 2': Qualtiy2,

    'تجارة دولية — 1': ITQuestions1,
    'تجارة دولية — 2': ITQuestions2,

    'سياسة رزاعية — 1': AgriPolicy1,
    'سياسة رزاعية — 2': AgriPolicy2,

    'تقييم مشروعات — 1': ProjEval1,
    'تقييم مشروعات — 2': ProjEval2,
};
