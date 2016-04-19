import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {CourtTypeConverter} from "./court-type.converter";


describe("CourtTypeConverter", () => {

    let courtTypeConverter: CourtTypeConverter = null;

    beforeEach(() => {
        courtTypeConverter = new CourtTypeConverter();
    });


    it("should show message when given courtType does not match", () => {

        //execute
        let expectedCourtTypeOne = courtTypeConverter.convert(""),
            expectedCourtTypeTwo = courtTypeConverter.convert("not supported");

        //assert
        expect(expectedCourtTypeOne).toEqual("invalid courtType");
        expect(expectedCourtTypeTwo).toEqual("invalid courtType");

    });

    it ("should convert courtTypes", () => {

        //given
        let givenCourtTypes = ["COMMON", "SUPREME", "CONSTITUTIONAL_TRIBUNAL", "NATIONAL_APPEAL_CHAMBER"],
            expectedCourtTypes = [];

        //execute
        for (let i = 0, length = givenCourtTypes.length; i < length; i += 1) {
            expectedCourtTypes.push(courtTypeConverter.convert(givenCourtTypes[i]));
        }

        //assert
        expect(expectedCourtTypes[0]).toEqual("Sąd Powszechny");
        expect(expectedCourtTypes[1]).toEqual("Sąd Najwyższy");
        expect(expectedCourtTypes[2]).toEqual("Trybunał Konstytucyjny");
        expect(expectedCourtTypes[3]).toEqual("Krajowa Izba Odwoławcza");
    });

});

