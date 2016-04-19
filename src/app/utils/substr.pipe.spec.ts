import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {SubstrPipe} from "./substr.pipe";


describe('SubstrPipe', () => {

    let substrPipe:SubstrPipe;

    beforeEach(() => {
        substrPipe = new SubstrPipe();
    });

    it ('should transform basic string', () => {

        //given
        let value = "Lorem ipsum";

        //execute
        let actualValue = substrPipe.transform(value, ["0", "5"]);

        //assert
        expect(actualValue).toEqual("Lorem...");
    });

    it ('should transform empty string', () => {

        //given
        let value = "";

        //execute
        let actualValue = substrPipe.transform(value, ["0", "5"]);

        //assert
        expect(actualValue).toEqual("");
    });

    it ('should transform basic string: no arguments', () => {

        //given
        let value = "Lorem ipsum";

        //execute
        let actualValue = substrPipe.transform(value, []);

        //assert
        expect(actualValue).toEqual("Lorem ipsum");
    });

    it ('should transform basic string: only start argument', () => {

        //given
        let value = "Lorem ipsum";

        //execute
        let actualValue = substrPipe.transform(value, ["1"]);

        //assert
        expect(actualValue).toEqual("orem ipsum");
    });

    it ('should transform basic string: start argument bigger then value length', () => {

        //given
        let value = "Lorem ipsum";

        //execute
        let actualValue = substrPipe.transform(value, ["22"]);

        //assert
        expect(actualValue).toEqual("");
    });

    it ('should transform basic string: end argument bigger then value length', () => {

        //given
        let value = "Lorem ipsum";

        //execute
        let actualValue = substrPipe.transform(value, ["1", "22"]);

        //assert
        expect(actualValue).toEqual("orem ipsum");
    });


});


