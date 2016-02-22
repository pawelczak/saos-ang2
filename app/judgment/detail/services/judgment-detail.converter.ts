import {Injectable} from "angular2/core";
import {CourtTypeConverter} from "../../../court/services/court-type.converter";

@Injectable()
export class JudgmentDetailConverter {

    constructor(
        private _courtTypeConverter: CourtTypeConverter
    ) {}


    convert(rawJudgmentData: any) {

        let judgment: any = rawJudgmentData;

        judgment.courtType = this._courtTypeConverter.convert(judgment.courtType);

        return judgment;
    }
}
