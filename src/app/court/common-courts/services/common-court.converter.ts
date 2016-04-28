import {Injectable} from 'angular2/core';
import {CommonCourt} from '../models/common-court';
import {CommonCourtDivision} from '../models/common-court-division';

@Injectable()
export class CommonCourtConverter {


    // ------------------------ LOGIC --------------------------

    convertCc(rawCommonCourt): CommonCourt {
        return new CommonCourt(rawCommonCourt.id, rawCommonCourt.name, rawCommonCourt.type);
    }

    convertCcList(rawCommonCourts): CommonCourt[] {

        let commonCourts = [];

        for (let i = 0, length = rawCommonCourts.length; i < length; i += 1) {
            commonCourts.push(this.convertCc(rawCommonCourts[i]));
        }

        return commonCourts;
    }

    convertCcDivision(rawCcDivision): CommonCourtDivision {
        return new CommonCourtDivision(rawCcDivision.id, rawCcDivision.name);
    }

    convertCcDivisionList(rawCcDivisions): CommonCourtDivision[] {

        let ccDivisions = [];

        for (let i = 0, length = rawCcDivisions.length; i < length; i += 1) {
            ccDivisions.push(this.convertCcDivision(rawCcDivisions[i]));
        }

        return ccDivisions;
    }
}
