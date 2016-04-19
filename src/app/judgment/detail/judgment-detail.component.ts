import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {Router} from "angular2/router";
import {JudgmentDetailService} from "./services/judgment-detail.service";
import {DetailComponent} from "./components/detail.component";
import {JudgmentDetailConverter} from "./services/judgment-detail.converter";
import {Judgment} from "./models/judgment";
import {CourtTypeConverter} from "../../court/court-type/services/court-type.converter";

@Component({
    templateUrl: 'src/app/judgment/detail/judgment-detail.component.html',
    providers: [
        JudgmentDetailService,
        JudgmentDetailConverter,
        CourtTypeConverter
    ],
    directives: [DetailComponent]
})
export class JudgmentDetailComponent implements OnInit {

    public judgment: Judgment;
    public errorMessage: string;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _judgmentDetailService: JudgmentDetailService
    ) {}


    //------------------------ LOGIC --------------------------

    ngOnInit() {
        this._judgmentDetailService
            .getJudgment(this._routeParams.get("id"))
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
