import {describe, expect, it, xit, inject, beforeEachProviders} from 'angular2/testing';
import {Judgment} from "./judgment";
import {SearchResults} from "./search-results";


export function main() {

    describe('SearchResults', () => {

        it('should be possible to create object with properites', () => {

            //given
            let givenTotalNumber:number = 18,
                givenJudgmentOne:Judgment = {id: 27, courtCases: "I ACa 772/13", textContent: "Lorem ipsum"},
                givenJudgmentTwo:Judgment = {id: 96, courtCases: "II C 1499/10", textContent: "dolor mey"},
                givenJudgments:Judgment[] = [givenJudgmentOne, givenJudgmentTwo];

            let searchResult = new SearchResults(givenTotalNumber, givenJudgments);

            //assert
            expect(searchResult.totalResults).toEqual(givenTotalNumber);
            expect(searchResult.judgments).toEqual(givenJudgments);
        });
    });

}