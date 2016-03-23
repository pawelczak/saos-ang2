import {SupremeChamber} from "../models/supreme-chamber";
import {SupremeChamberDivision} from "../models/supreme-chamber-division";
import {Injectable} from "angular2/core";

@Injectable()
export class SupremeChamberConverter {


    //------------------------ LOGIC --------------------------

    convertChamber(rawSupremeChamber): SupremeChamber {
        return new SupremeChamber(rawSupremeChamber.id, rawSupremeChamber.name);
    }

    convertChamberList(rawSc): SupremeChamber[] {

        let supremeChamberList = [];

        for (let i = 0, length = rawSc.length; i < length; i += 1) {
            supremeChamberList.push(this.convertChamber(rawSc[i]));
        }

        return supremeChamberList;
    }


    convertChamberDivision(rawSupremeChamberDivision): SupremeChamberDivision {
        return new SupremeChamberDivision(rawSupremeChamberDivision.id, rawSupremeChamberDivision.name);
    }

    convertChamberDivisionList(rawScDivisions): SupremeChamberDivision[] {

        let supremeChamberDivisionList = [];

        for (let i = 0, length = rawScDivisions.length; i < length; i += 1) {
            supremeChamberDivisionList.push(this.convertChamberDivision(rawScDivisions[i]));
        }

        return supremeChamberDivisionList;
    }
}