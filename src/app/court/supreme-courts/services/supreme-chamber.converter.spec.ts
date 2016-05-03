import {SupremeChamberConverter} from './supreme-chamber.converter';
import {SupremeChamber} from '../models/supreme-chamber';
import {SupremeChamberDivision} from '../models/supreme-chamber-division';


describe('SupremeChamberConverter', () => {

    let supremeChamberConverter = new SupremeChamberConverter();

    describe('convertChamber', () => {

        it('should be able to convertChamber', () => {

            //given
            let rawChamber = {id: 12, name: 'Izba Cywilna'};

            //execute
            let expectedChamber = supremeChamberConverter.convertChamber(rawChamber);

            //assert
            expect(expectedChamber instanceof SupremeChamber).toBe(true);
            expect(expectedChamber.id).toEqual(rawChamber.id);
            expect(expectedChamber.name).toEqual(rawChamber.name);
        });

    });

    describe('convertChamberList', () => {

        it('should be able to convertChamberList', () => {

            //given
            let rawChamberList = [{id: 12, name: 'Izba Cywilna'}, {id: 14, name: 'Izba Cywilna 2'}, {id: 18, name: 'Izba Cywilna 3'}];

            //execute
            let expectedChamberList = supremeChamberConverter.convertChamberList(rawChamberList);

            //assert
            expect(expectedChamberList.length).toEqual(3);
            expect(expectedChamberList[2] instanceof SupremeChamber).toBe(true);
            expect(expectedChamberList[2].id).toEqual(rawChamberList[2].id);
            expect(expectedChamberList[2].name).toEqual(rawChamberList[2].name);
        });

    });

    describe('convertChamberDivision', () => {

        it('should be able to convertChamberDivision', () => {

            //given
            let rawChamberDivision = {id: 12, name: 'Wydział I'};

            //execute
            let expectedChamberDivision = supremeChamberConverter.convertChamberDivision(rawChamberDivision);

            //assert
            expect(expectedChamberDivision instanceof SupremeChamberDivision).toBe(true);
            expect(expectedChamberDivision.id).toEqual(rawChamberDivision.id);
            expect(expectedChamberDivision.name).toEqual(rawChamberDivision.name);
        });

    });

    describe('convertChamberDivisionList', () => {

        it('should be able to convertChamberDivisionList', () => {

            //given
            let rawChamberDivisionList = [{id: 12, name: 'Wydział I'}, {id: 14, name: 'Wydział II'}, {id: 18, name: 'Wydział III'}];

            //execute
            let expectedChamberDivisionList = supremeChamberConverter.convertChamberDivisionList(rawChamberDivisionList);

            //assert
            expect(expectedChamberDivisionList.length).toEqual(3);
            expect(expectedChamberDivisionList[1] instanceof SupremeChamberDivision).toBe(true);
            expect(expectedChamberDivisionList[1].id).toEqual(rawChamberDivisionList[1].id);
            expect(expectedChamberDivisionList[1].name).toEqual(rawChamberDivisionList[1].name);
        });

    });

});

