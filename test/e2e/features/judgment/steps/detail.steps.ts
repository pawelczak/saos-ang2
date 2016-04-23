
module.exports = function () {

    //set timeout for each step
    this.setDefaultTimeout(60 * 1000);

    this.Given('I go to judgment page specified by $id', (id, next) => {

        browser.get('judgments/' + id)
            .then(() => {
                next();
            });


        browser.driver.sleep(13000);
        /*
         .then(function () {

         browser.driver.sleep(3000);
         next();
         });
         */
    });

    this.Then('I should see judgment with results', (next) => {
        //expect(browser.getLocationAbsUrl()).to.eventually.equal('judgments/1').and.notify(next);
        /*browser.getCurrentUrl().then(function (url) {
         expect(url).to.equal('http://localhost:3000/judgments/1');
         next();
         });*/

        browser.driver.sleep(3000);

        var elem = element(by.css('#search-total-results span.small'));

        console.log(elem);

        chai.expect(elem.getText()).to.equal("201081 JUDGMENTS").and.notify(next);
    });


};