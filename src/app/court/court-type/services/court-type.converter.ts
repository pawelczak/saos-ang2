import {Injectable} from 'angular2/core';

@Injectable()
export class CourtTypeConverter {


    // ------------------------ LOGIC --------------------------

    convert(courtType: string): string {

        switch (courtType) {
            case 'COMMON':
                return 'Sąd Powszechny';
            case 'SUPREME':
                return 'Sąd Najwyższy';
            case 'CONSTITUTIONAL_TRIBUNAL':
                return 'Trybunał Konstytucyjny';
            case 'NATIONAL_APPEAL_CHAMBER':
                return 'Krajowa Izba Odwoławcza';

            default:
                return 'invalid courtType';
        }
    }
}
