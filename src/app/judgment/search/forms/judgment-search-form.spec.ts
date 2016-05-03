import {describe, expect, it, xit, inject, beforeEachProviders} from 'angular2/testing';
import {JudgmentSearchForm} from './judgment-search-form';


describe('JudgmentSearchForm', () => {


    it('should be possible to create new object with properties: all, judgeName, courtType', () => {

        // given
        let judgmentSearchForm = new JudgmentSearchForm('whatever', 'John Smith', 'COMMON');

        // assert
        expect(judgmentSearchForm.all).toEqual('whatever');
        expect(judgmentSearchForm.judgeName).toEqual('John Smith');
        expect(judgmentSearchForm.courtType).toEqual('COMMON');
    });


});

