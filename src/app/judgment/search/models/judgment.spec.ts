import {describe, expect, it, xit, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {Judgment} from "./judgment";


describe('Judgment interface', () => {

    it('should be possible to create object type Judgment', () => {

        //given
        let id:number = 1,
            courtCases:any = "caseNumber",
            textContent:string = "Lorem ipsum",
            courtType: string = "COMMON",
            judgment:Judgment = {id: id, courtCases: courtCases, textContent: textContent, courtType: courtType};

        //assert
        expect(judgment.id).toEqual(id);
        expect(judgment.courtCases).toEqual(courtCases);
        expect(judgment.textContent).toEqual(textContent);
        expect(judgment.courtType).toEqual(courtType);
    });

});
