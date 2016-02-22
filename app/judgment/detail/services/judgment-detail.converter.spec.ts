import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {provide} from "angular2/core";

import {JudgmentDetailConverter} from "./judgment-detail.converter";
import {CourtTypeConverter} from "../../../court/services/court-type.converter";


export function main() {

    class CourtTypeConverterMock {

        convert(attr) {
            return "Sąd Powszechny";
        }
    }


    describe("JudgmentDetailConverter", () => {

        beforeEachProviders(() => [
            provide(CourtTypeConverter, {useClass: CourtTypeConverterMock}),
            JudgmentDetailConverter
        ]);


        it ("should convert", inject([JudgmentDetailConverter], (judgmentDetailConverter) => {

            //given
            let givenJudgmentData = {courtType: "COMMON"};

            //execute
            let expectedJudgment = judgmentDetailConverter.convert(givenJudgmentData);

            //assert
            expect(expectedJudgment.courtType).toEqual("Sąd Powszechny");

        }));

    });


}

