
describe('AppComponent', () => {

    beforeEach(function () {
        browser.get('/judgments/12');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('SAOS ang2');
    });

});

