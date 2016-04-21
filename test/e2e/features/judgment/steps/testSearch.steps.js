var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

module.exports = function() {

    //set timeout for each step
    this.setDefaultTimeout(60 * 1000);

    this.Given('I go to search page', function(next) {

        browser.get('webpack-dev-server/judgments')
            .then(function () {
                next();
            });

    });

    this.When('I type simple search query', function(next) {

        var query = 'przez';

        
        browser.driver.sleep(3000);

        element(by.id('search-all'))
            .sendKeys(query)
            .then(function() {
                next();
            });
    });

    this.Then('I should see search results', function(next) {
        //expect(browser.getLocationAbsUrl()).to.eventually.equal('judgments/1').and.notify(next);
        /*browser.getCurrentUrl().then(function (url) {
            expect(url).to.equal('http://localhost:3000/judgments/1');
            next();
        });*/

        browser.driver.sleep(3000);

        var elem = element(by.css('#search-total-results span.small'));

        console.log(elem);

        expect(elem.getText()).to.equal("201081 JUDGMENTS").and.notify(next);
    });

};
