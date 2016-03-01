import {Injectable} from "angular2/core";
import {CourtTypeConverter} from "../../../court/services/court-type.converter";
import {Judgment} from "../models/judgment";

@Injectable()
export class JudgmentConverter {

    constructor(
        private _courtTypeConverter: CourtTypeConverter
    ) {}

    convert(judgment: Judgment) {
        judgment.courtType = this._courtTypeConverter.convert(judgment.courtType);
    }

    convertList(judgments: Judgment[]) {

        for(let i = 0, length = judgments.length; i < length; i += 1) {
            judgments[i].courtType = this._courtTypeConverter.convert(judgments[i].courtType);
        }
    }
}
