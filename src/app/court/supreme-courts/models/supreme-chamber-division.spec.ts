import {SupremeChamberDivision} from './supreme-chamber-division';


describe('SupremeChamberDivision', () => {

    it('should be able to create object', () => {

        //given
        let supremeChamberDivision = new SupremeChamberDivision(55, 'Wydział I');

        //assert
        expect(supremeChamberDivision instanceof SupremeChamberDivision);
        expect(supremeChamberDivision.id).toEqual(55);
        expect(supremeChamberDivision.name).toEqual('Wydział I');
    });

});
