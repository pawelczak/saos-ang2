import {Component} from "angular2/core";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {JudgmentDetailConverter} from "./judgment-detail.converter";

@Injectable()
export class JudgmentDetailService {


    private _judgmentUrl = "https://www.saos.org.pl/api/judgments/";

    constructor(
        private _http: Http,
        private _judgmentDetailConverter: JudgmentDetailConverter
    ) {}


    //------------------------ LOGIC --------------------------

    getJudgment(id: string) {

        return this._http.get(this._judgmentUrl + id)
            .map(res => {
                return this._judgmentDetailConverter.convert(res.json().data);
            })
            .catch(this.handleError);
    }


    //------------------------ PRIVATE --------------------------

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
