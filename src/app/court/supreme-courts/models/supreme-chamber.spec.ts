import {SupremeChamber} from './supreme-chamber';


describe('SupremeChamber', () => {


   it('should be possible to create object', function() {

       //given
       var supremeChamber = new SupremeChamber(76, 'Izba Cywilna');

       //assert
       expect(supremeChamber instanceof  SupremeChamber).toEqual(true);
       expect(supremeChamber.id).toEqual(76);
       expect(supremeChamber.name).toEqual('Izba Cywilna');
   });


});

