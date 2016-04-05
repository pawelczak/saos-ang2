var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

module.exports = function() {
    
    this.Given('I go to search page', function(next) {
        
        browser.get('http://localhost:3000/home')
        .then(function () {
            next();
        });

    });
    
    this.When('I type simple search query', function(next) {

        var query = '1';
        
        element(by.css('#goto-judgment-id'))
            .sendKeys(query)
            .then(function() {
                next();
            });
    });

    this.Then('I should see search results', function(next) {
        //expect(browser.getLocationAbsUrl()).to.eventually.equal('judgments/1').and.notify(next);
        browser.getCurrentUrl().then(function (url) {
            expect(url).to.equal('http://localhost:3000/judgments/1');
            next();
        });
    });
    
};
