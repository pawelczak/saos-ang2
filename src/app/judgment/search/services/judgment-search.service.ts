import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/http';
import {URLSearchParams} from 'angular2/http';
import {Http} from 'angular2/http';
import {JudgmentConverter} from './judgment.converter';
import {SortingForm} from '../forms/sorting-form';
import {JudgmentSearchForm} from '../forms/judgment-search-form';
import {Judgment} from '../models/judgment';
import {SearchResults} from '../models/search-results';


@Injectable()
export class JudgmentSearchService {

    private _judgmentUrl = 'https://www.saos.org.pl/api/search/judgments';


    constructor(
        private _http: Http,
        private _judgmentConverter: JudgmentConverter
    ) {}


    search(judgmentSearchForm: JudgmentSearchForm, pageNumber: number, sortingForm: SortingForm) {


        // Convertion
        if (judgmentSearchForm.courtType === 'All') {
            judgmentSearchForm.courtType = '';
        }

        var searchParams = new URLSearchParams();
        searchParams.set('all', judgmentSearchForm.all);
        searchParams.set('judgeName', judgmentSearchForm.judgeName);
        searchParams.set('courtType', judgmentSearchForm.courtType);
        searchParams.set('pageSize', '10');
        searchParams.set('pageNumber', pageNumber + '');
        searchParams.set('sortingField', sortingForm.sortingField);
        searchParams.set('sortingDirection', 'DESC');

        if (judgmentSearchForm.courtType === 'COMMON') {

            if (judgmentSearchForm.commonCourt !== '' && judgmentSearchForm.commonCourt !== '-1') {
                searchParams.set('ccCourtId', judgmentSearchForm.commonCourt);
            }

            if (judgmentSearchForm.commonCourtDivision !== ''
                && judgmentSearchForm.commonCourtDivision !== '-1') {
                searchParams.set('ccDivisionId', judgmentSearchForm.commonCourtDivision);
            }
        }

        if (judgmentSearchForm.courtType === 'SUPREME') {

            if (judgmentSearchForm.scChamberId !== '' && judgmentSearchForm.scChamberId !== '-1') {
                searchParams.set('scChamberId', judgmentSearchForm.scChamberId);
            }

            if (judgmentSearchForm.scChamberDivisionId !== '' && judgmentSearchForm.scChamberDivisionId !== '-1') {
                searchParams.set('scDivisionId', judgmentSearchForm.scChamberDivisionId);
            }
        }


        return this._http
            .get(this._judgmentUrl, {search: searchParams})
            .map(res => {
                var results = res.json(),
                    judgments = <Judgment[]>results.items;

                this._judgmentConverter.convertList(judgments);

                return new SearchResults(results.info.totalResults, judgments);
            });

            //.catch(this.handleError);
    }


    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
