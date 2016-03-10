
describe('AppComponent', () => {

    beforeEach(function() {
        browser.get('');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('SAOS ang2');
    });

    it('should have navigation', () => {
        expect(element(by.css('app nav')).isPresent()).toEqual(true);
    });

    it('should have link to front page', () => {

        //given
        let link = element(by.css('app nav .navbar-header .navbar-brand'));

        //assert
        expect(link.isPresent()).toEqual(true);
        expect(link.getText()).toEqual('SAOS-ang2');
    });

    it('should have navigation links container', () => {

        //given
        let links = element(by.css('app #navbar ul:nth-child(2)'));

        //assert
        expect(links.isPresent()).toEqual(true);
    });

    it('should have navigation links', () => {

        //given
        let links = element.all(by.css('app #navbar ul:nth-child(2) li'));

        //assert
        expect(links.count()).toEqual(2);
        expect(links.get(0).getText()).toEqual('Home');
        expect(links.get(1).getText()).toEqual('Judgment Search');
    });

    it('should be possible to navigate to home view', () => {

        //execute
        element.all(by.css('app #navbar ul:nth-child(2) li')).get(0).element(by.css('a')).click();

        //assert
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/home');
    });

    /*

    it('should be possible to navigate to judgment search view', () => {

        //execute
        element.all(by.css('app #navbar ul:nth-child(2) li')).get(1).element(by.css('a')).click();

        //assert
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/judgments');
    });

    */

});
