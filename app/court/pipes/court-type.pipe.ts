import {Pipe} from "angular2/core";
import {PipeTransform} from "angular2/core";

@Pipe({
    name: 'courtType'
})
export class CourtTypePipe implements PipeTransform {

    transform(value: string, args: string[]) {

        switch (value) {
            case "COMMON":
                return "Sąd Powszechny";
            case "SUPREME":
                return "Sąd Najwyższy";
            case "CONSTITUTIONAL_TRIBUNAL":
                return "Trybunał Konstytucyjny";
            case "NATIONAL_APPEAL_CHAMBER":
                return "Krajowa Izba Odwoławcza";

            default:
                return value;
        }
    }
}
