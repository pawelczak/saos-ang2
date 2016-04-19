import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {CourtTypePipe} from "./court-type.pipe";

export function main() {

    describe("CourtTypePipe", () => {

        let courtTypePipe: CourtTypePipe;

        beforeEach(() => {
            courtTypePipe = new CourtTypePipe();
        });

        it ("should transform valid court types", () => {

            //given
            let courtTypeOne = "COMMON",
                courtTypeTwo = "SUPREME",
                courtTypeThree = "CONSTITUTIONAL_TRIBUNAL",
                courtTypeFour = "NATIONAL_APPEAL_CHAMBER";

            //execute
            let expectedCourtTypeOne = courtTypePipe.transform(courtTypeOne, []),
                expectedCourtTypeTwo = courtTypePipe.transform(courtTypeTwo, []),
                expectedCourtTypeThree = courtTypePipe.transform(courtTypeThree, []),
                expectedCourtTypeFour = courtTypePipe.transform(courtTypeFour, []);


            //assert
            expect(expectedCourtTypeOne).toBe("Sąd Powszechny");
            expect(expectedCourtTypeTwo).toBe("Sąd Najwyższy");
            expect(expectedCourtTypeThree).toBe("Trybunał Konstytucyjny");
            expect(expectedCourtTypeFour).toBe("Krajowa Izba Odwoławcza");
        });

        it ("should not transform not valid court type", () => {
            //given
            let courtTypeOne = "whatever";

            //execute
            let expectedCourtTypeOne = courtTypePipe.transform(courtTypeOne, []);

            //assert
            expect(expectedCourtTypeOne).toBe(courtTypeOne);
        });
    });

}