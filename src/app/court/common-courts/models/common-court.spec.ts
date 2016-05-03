import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {CommonCourt} from './common-court';


describe('CommonCourt', () => {

    it('should be possible to create CommonCourt object', () => {

        //given
        let commonCourt = new CommonCourt(3, 'Sąd w Piasecznie', 'APPEAL');

        //assert
        expect(commonCourt).toBeDefined();
        expect(commonCourt.id).toBe(3);
        expect(commonCourt.name).toEqual('Sąd w Piasecznie');
        expect(commonCourt.type).toBe('APPEAL');
    });

});

