import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {CommonCourtDivision} from "./common-court-division";

export function main() {

    describe("CommonCourtDivision", () => {


        it ("should be possible to create CommonCourtDivision object", () => {

            //given
            let rawCcDivision = {id: 87, name: "Wydział III"};

            //execute
            let expectedCcDivision = new CommonCourtDivision(rawCcDivision.id, rawCcDivision.name);

            //assert
            expect(expectedCcDivision instanceof CommonCourtDivision).toEqual(true);
            expect(expectedCcDivision.id).toEqual(rawCcDivision.id);
            expect(expectedCcDivision.name).toEqual(rawCcDivision.name);
        });

    });
}
