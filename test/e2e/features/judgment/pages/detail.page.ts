export class DetailPageObject {

    private url = 'judgments/';

    constructor() {
    }


    navigateToDetailPage(id: string) {

        return browser
            .get(this.url + id);
    }

    getJudgmentDate(): any {

        this.waitForElementToLoad(by.id('judgment-date'));

        return element(by.css('#judgment-date .col-sm-8')).getText();
    }

    private waitForElementToLoad(elem: any) {
        browser.wait(function() {
            return element(elem).isPresent();
        });
    }
}
