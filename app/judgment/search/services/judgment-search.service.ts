import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Http} from "angular2/http";
import {JudgmentSearchForm} from "../search-form/judgment-search-form";
import {Judgment} from "../judgment";
import {SearchResults} from "./search-results";
import {JudgmentConverter} from "./judgment.converter";
import {SortingForm} from "../forms/sorting-form";


@Injectable()
export class JudgmentSearchService {

    private _judgmentUrl = 'https://www.saos.org.pl/api/search/judgments';


    constructor(
        private _http: Http,
        private _judgmentConverter: JudgmentConverter
    ) {}


    search(judgmentSearchForm: JudgmentSearchForm, pageNumber: number, sortingForm: SortingForm) {


        var searchParams = new URLSearchParams();
        searchParams.set("all", judgmentSearchForm.all);
        searchParams.set("judgeName", judgmentSearchForm.judgeName);
        searchParams.set("courtType", judgmentSearchForm.courtType);
        searchParams.set("pageSize", "10");
        searchParams.set("pageNumber", pageNumber + "");
        searchParams.set("sortingField", sortingForm.sortingField);
        searchParams.set("sortingDirection", "DESC");

        return this._http.get(this._judgmentUrl, {search: searchParams})
            .map(res => {
                var results = res.json(),
                    judgments = <Judgment[]>results.items;

                this._judgmentConverter.convertList(judgments);

                return new SearchResults(results.info.totalResults, judgments);
            })
            .catch(this.handleError);
    }


    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
