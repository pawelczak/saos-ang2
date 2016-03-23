import {Component} from "angular2/core";
import {NgForm} from 'angular2/common';
import {OnInit} from "angular2/core";
import {JudgmentSearchService} from "./services/judgment-search.service";
import {JudgmentConverter} from "./services/judgment.converter";
import {SortingForm} from "./forms/sorting-form";
import {JudgmentSearchForm} from "./forms/judgment-search-form";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Judgment} from "./models/judgment";
import {SearchResults} from "./models/search-results";
import {JudgmentListComponent} from "./components/judgment-list.component";
import {CourtTypeConverter} from "../../court/court-type/services/court-type.converter";
import {CourtTypePipe} from "../../court/court-type/pipes/court-type.pipe";
import {SupremeChamberService} from "../../court/supreme-courts/services/supreme-chamber.service";
import {CommonCourtService} from "../../court/common-courts/services/common-court.service";
import {CommonCourtConverter} from "../../court/common-courts/services/common-court.converter";
import {CommonCourt} from "../../court/common-courts/models/common-court";
import {CommonCourtDivision} from "../../court/common-courts/models/common-court-division";
import {SupremeChamber} from "../../court/supreme-courts/models/supreme-chamber";
import {SupremeChamberDivision} from "../../court/supreme-courts/models/supreme-chamber-division";
import {SupremeChamberConverter} from "../../court/supreme-courts/services/supreme-chamber.converter";

@Component({
    templateUrl: 'app/judgment/search/judgment-search.component.html',
    styles: [`
    .ng-valid[required] {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }
    `],
    directives: [
        JudgmentListComponent
    ],
    providers: [
        JudgmentSearchService,
        JudgmentConverter,
        CourtTypeConverter,
        CommonCourtService,
        CommonCourtConverter,
        SupremeChamberService,
        SupremeChamberConverter
    ],
    pipes: [CourtTypePipe]
})
export class JudgmentSearchComponent implements OnInit {

    public totalResults: number;
    public judgments: Judgment[];
    public errorMessage: string;

    public courtTypes = ["All", "COMMON", "SUPREME", "CONSTITUTIONAL_TRIBUNAL", "NATIONAL_APPEAL_CHAMBER"];

    public model: JudgmentSearchForm = new JudgmentSearchForm("", "", this.courtTypes[0]);

    public pageNumber: number = 0;
    public pageSize: number = 10;
    public totalPageNumber: number = 0;

    public sortingFields = ["JUDGMENT_DATE", "DATABASE_ID", "REFERENCING_JUDGMENTS_COUNT"];
    public sortingForm: SortingForm = new SortingForm(this.sortingFields[0]);

    public commonCourts: CommonCourt[] = [];
    public commonCourtError: string = "";

    public commonCourtDivisions: CommonCourtDivision[] = [];
    public commonCourtDivisionsError: string = "";

    public scChambers: SupremeChamber[] = [];
    public scChamberDivisions: SupremeChamberDivision[] = [];

    public scChamberError: string;
    public scChamberDivisionError: string;

    private _searchFormStream = new Subject<JudgmentSearchForm>();

    constructor(
        private _judgmentSearchService: JudgmentSearchService,
        private _commonCourtService: CommonCourtService,
        private _supremeChamberService: SupremeChamberService
    ) {
        this._searchFormStream
            .switchMap((model:JudgmentSearchForm) => this._judgmentSearchService.search(model, this.pageNumber, this.sortingForm))
            .subscribe((searchResults: SearchResults) => {
                this.judgments = searchResults.judgments;
                this.totalResults = searchResults.totalResults;
                this.totalPageNumber = Math.ceil(searchResults.totalResults/this.pageSize);
            });
    }

    ngOnInit() {
        this._searchFormStream.next(this.model);
    }

    onSubmit() {
        this.pageNumber = 0;
        this.search();
    }

    search() {
        this._searchFormStream.next(this.model);
    }

    changePage(pageNumber: number): void {
        this.pageNumber += pageNumber;
        this.search();
    }

    updateCourtType(event: string, value: string): void {
        this.model.courtType = value;

        if (this.model.courtType === "COMMON" && this.commonCourts.length === 0) {

            this.clearSupremeCourtTypeModel();

            //Load commonCourts
            this._commonCourtService.getCommonCourts()
                .subscribe(res => {
                    this.commonCourts = res;
                    this.commonCourts.unshift(new CommonCourt(-1, "All", ""));
                },
                error => this.commonCourtError);
        }

        if (this.model.courtType === "SUPREME" && this.scChambers.length === 0) {

            this.clearCommonCourtTypeModel();

            this._supremeChamberService
                .getSupremeChambers()
                .subscribe(res => {
                    this.scChambers = res;
                    this.scChambers.unshift(new SupremeChamber(-1, "All"));
                },
                error => this.scChamberError);
        }

    }

    updateCommonCourt(event: string, value: string): void {
        this.model.commonCourt = value;
        this.model.commonCourtDivision = "";
        this.commonCourtDivisions = [];

        if (parseInt(this.model.commonCourt) > 0) {

            //Load commonCourtDivisions
            this._commonCourtService
                .getCommonCourtDivisions(this.model.commonCourt)
                .subscribe(res => {
                        this.commonCourtDivisions = res;
                        this.commonCourtDivisions.unshift(new CommonCourtDivision(-1, "All"));
                    },
                    error => this.commonCourtDivisionsError);
        }
    }

    updateCommonCourtDivision(event: string, value: string): void {
        this.model.commonCourtDivision = value;
    }


    updateScChamber(event: string, value: string): void {
        this.model.scChamberId = value;
        this.scChamberDivisions = [];

        if (parseInt(this.model.scChamberId) > 0) {

            //Load scChamberId
            this._supremeChamberService
                .getSupremeChamberDivisions(this.model.scChamberId)
                .subscribe(res => {
                        this.scChamberDivisions = res;
                        this.scChamberDivisions.unshift(new SupremeChamberDivision(-1, "All"));
                    },
                    error => this.scChamberDivisionError);
        }
    }

    updateScChamberDivision(event: string, value: string): void {
        this.model.scChamberDivisionId = value;
    }



    private clearCommonCourtTypeModel() {
        this.model.commonCourt = "";
        this.model.commonCourtDivision = "";
    }

    private clearSupremeCourtTypeModel() {
        this.model.scChamberId = "";
        this.model.scChamberDivisionId = "";
    }


}
