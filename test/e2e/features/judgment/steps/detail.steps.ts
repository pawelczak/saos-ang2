let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import {DetailPageObject} from '../pages/detail.page';

module.exports = function () {
    
    let detailPageObject = new DetailPageObject();
    
    // set timeout for each step
    this.setDefaultTimeout(60 * 1000);

    this.Given('I go to judgment page specified by $id', (id, next) => {

        detailPageObject
            .navigateToDetailPage(id)
            .then(() => {
               next();
            });

    });

    this.Then('I should see judgment with results $date', (date, next) => {

        expect(detailPageObject.getJudgmentDate()).to.become(date).and.notify(next);

    });


};