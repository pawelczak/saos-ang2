import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {provide} from "angular2/core";

import {JudgmentDetailConverter} from "./judgment-detail.converter";
import {Judgment} from "../models/judgment";
import {CourtTypeConverter} from "../../../court/court-type/services/court-type.converter";


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
        let givenJudgmentData: any = {
            id: 12,
            courtType: "COMMON",
            judgmentDate: "2016-01-20",
            textContent: "text content",
            keywords: ["first keyword", "second keyword"],
            judges: [{name: "Jon Doe"}, {name: "Jane Doe"}]
        };

        //execute
        let expectedJudgment: Judgment = judgmentDetailConverter.convert(givenJudgmentData);

        //assert
        expect(expectedJudgment instanceof Judgment).toEqual(true);
        expect(expectedJudgment.id).toEqual(12);
        expect(expectedJudgment.courtType).toEqual("Sąd Powszechny");
        expect(expectedJudgment.judgmentDate).toEqual("2016-01-20");
        expect(expectedJudgment.textContent).toEqual("text content");
        expect(expectedJudgment.keywords).toEqual(["first keyword", "second keyword"]);
        expect(expectedJudgment.judges).toEqual([{name: "Jon Doe"}, {name: "Jane Doe"}]);
    }));

});


