import {Component} from "angular2/core";
import {NgForm} from 'angular2/common';
import {Judgment} from "./judgment";
import {OnInit} from "angular2/core";
import {JudgmentListComponent} from "./search-list/judgment-list.component";
import {JudgmentSearchForm} from "./search-form/judgment-search-form";
import {JudgmentSearchService} from "./services/judgment-search.service";
import {JudgmentConverter} from "./services/judgment.converter";
import {CourtTypeConverter} from "../../court/services/court-type.converter";
import {CourtTypePipe} from "../../court/pipes/court-type.pipe";
import {SortingForm} from "./forms/sorting-form";

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
        CourtTypeConverter
    ],
    pipes: [CourtTypePipe]
})
export class JudgmentSearchComponent implements OnInit {

    public totalResults: number;
    public judgments: Judgment[];
    public errorMessage: string;

    public courtTypes = ["", "COMMON", "SUPREME", "CONSTITUTIONAL_TRIBUNAL", "NATIONAL_APPEAL_CHAMBER"];

    public model: JudgmentSearchForm = new JudgmentSearchForm("", "", this.courtTypes[1]);

    public pageNumber: number = 0;
    public totalPageNumber: number = 0;

    public sortingFields = ["JUDGMENT_DATE", "DATABASE_ID", "REFERENCING_JUDGMENTS_COUNT"];

    public sortingForm: SortingForm = new SortingForm(this.sortingFields[0]);


    constructor(
        private _judgmentSearchService: JudgmentSearchService
    ) {}

    ngOnInit() {

        this.search();
    }

    onSubmit() {
        this.pageNumber = 0;
        this.search();
    }

    search() {

        this._judgmentSearchService.search(this.model, this.pageNumber, this.sortingForm)
            .subscribe(
                searchResults => {
                    this.judgments = searchResults.judgments;
                    this.totalResults = searchResults.totalResults;

                    this.totalPageNumber = Math.ceil(searchResults.totalResults/10);
                },
                error =>  this.errorMessage = <any>error
            );
    }

    changePage(pageNumber: number): void {
        this.pageNumber += pageNumber;
        this.search();
    }

    updateCourtType(event: string, value: string): void {
        this.model.courtType = value;
    }
}
