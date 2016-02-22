import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {SubstrPipe} from "../../../utils/substr.pipe";
import {Judgment} from "../judgment";

@Component({
    selector: 'judgment-list',
    templateUrl: 'app/judgment/search/search-list/judgment-list.component.html',
    inputs: ['judgments'],
    styleUrls: ['app/judgment/search/search-list/judgment-list.styles.css'],
    pipes: [SubstrPipe]
})
export class JudgmentListComponent {


    constructor(
        private _router: Router
    ) {}

    onClick(judgment: Judgment) {
        this._router.navigate(['JudgmentDetail', {id: judgment.id}]);
    }
}
