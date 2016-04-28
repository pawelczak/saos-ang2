import {Injectable} from 'angular2/core';
import {CourtTypeConverter} from '../../../court/court-type/services/court-type.converter';
import {Judgment} from '../models/judgment';

@Injectable()
export class JudgmentDetailConverter {

    constructor(
        private _courtTypeConverter: CourtTypeConverter
    ) {}


    // ------------------------ LOGIC --------------------------

    convert(rawJudgmentData: any): Judgment {

        let judgment: Judgment = new Judgment(rawJudgmentData.id);

        judgment.textContent = rawJudgmentData.textContent;
        judgment.judgmentDate = rawJudgmentData.judgmentDate;
        judgment.judges = rawJudgmentData.judges;
        judgment.keywords = rawJudgmentData.keywords;
        judgment.courtType = this._courtTypeConverter.convert(rawJudgmentData.courtType);

        return judgment;
    }
}
