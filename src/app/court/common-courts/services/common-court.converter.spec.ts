import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {CommonCourtConverter} from "./common-court.converter";
import {CommonCourt} from "../models/common-court";
import {CommonCourtDivision} from "../models/common-court-division";




describe("CommonCourtConverter", () => {

    let commonCourtConverter = new CommonCourtConverter();

    describe("convertCc", () => {

        it("should be able to convertCc", () => {

            //given
            let rawCc = {id: 3, name: "Sąd w Piasecznie", type: "APPEAL"};

            //execute
            let expectedCc = commonCourtConverter.convertCc(rawCc);

            //assert
            expect(expectedCc instanceof CommonCourt).toBe(true);
            expect(expectedCc.id).toEqual(rawCc.id);
            expect(expectedCc.name).toEqual(rawCc.name);
            expect(expectedCc.type).toEqual(rawCc.type);
        });

        it("should be able to convertCcList", () => {

            //given
            let rawCcList = [{id: 3, name: "Sąd w Piasecznie", type: "APPEAL"},
                    {id: 6, name: "Sąd w Raszynie", type: "APPEAL"},
                    {id: 7, name: "Sąd w Krośnie", type: "APPEAL"}];

            //execute
            let expectedCcList = commonCourtConverter.convertCcList(rawCcList);

            //assert
            expect(expectedCcList[0] instanceof CommonCourt).toBe(true);
            expect(expectedCcList[0].id).toEqual(rawCcList[0].id);
            expect(expectedCcList[0].name).toEqual(rawCcList[0].name);
            expect(expectedCcList[0].type).toEqual(rawCcList[0].type);
        });

    });


    describe("convertCcDivision", () => {

        it("should be able to convertCcDivision", () => {

            //given
            let rawCc = {id: 3, name: "Sąd w Piasecznie"};

            //execute
            let expectedCc = commonCourtConverter.convertCcDivision(rawCc);

            //assert
            expect(expectedCc instanceof CommonCourtDivision).toBe(true);
            expect(expectedCc.id).toEqual(rawCc.id);
            expect(expectedCc.name).toEqual(rawCc.name);
        });

        it("should be able to convertCcDivisionList", () => {

            //given
            let rawCcDivisionList = [{id: 3, name: "Sąd w Piasecznie"},
                {id: 6, name: "Sąd w Raszynie"}, {id: 7, name: "Sąd w Krośnie"}];

            //execute
            let expectedCcDivisionList = commonCourtConverter.convertCcDivisionList(rawCcDivisionList);

            //assert
            expect(expectedCcDivisionList[0] instanceof CommonCourtDivision).toBe(true);
            expect(expectedCcDivisionList[0].id).toEqual(rawCcDivisionList[0].id);
            expect(expectedCcDivisionList[0].name).toEqual(rawCcDivisionList[0].name);
        });

    });

});


