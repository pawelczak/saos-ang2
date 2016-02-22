import {Component} from "angular2/core";
import {Judgment} from "../search/judgment";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {Router} from "angular2/router";
import {JudgmentDetailService} from "./services/judgment-detail.service";
import {DetailComponent} from "./components/detail.component";
import {JudgmentDetailConverter} from "./services/judgment-detail.converter";
import {CourtTypeConverter} from "../../court/services/court-type.converter";

@Component({
    templateUrl: 'app/judgment/detail/judgment-detail.component.html',
    providers: [
        JudgmentDetailService,
        JudgmentDetailConverter,
        CourtTypeConverter
    ],
    directives: [DetailComponent]
})
export class JudgmentDetailComponent implements OnInit {

    public judgment: any;
    public errorMessage: string;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _judgmentDetailService: JudgmentDetailService
    ) {}


    ngOnInit() {
        this._judgmentDetailService.getJudgment(this._routeParams.get("id"))
            .subscribe(
                result => {
                    this.judgment = result;
                },
                error => this.errorMessage = <any>error
            );
    }

    gotoJudgmentSearch() {
        this._router.navigate(['JudgmentSearch']);
    }

}
