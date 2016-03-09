import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {CommonCourtConverter} from "./common-court.converter";


@Injectable()
export class CommonCourtService {

    private _commonCourtURL: string = "https://www.saos.org.pl/cc/courts/list";
    private _commonCourtDivisions: string = "https://www.saos.org.pl/cc/courts/CC_COURT_ID/courtDivisions/list";

    constructor(
        private _http: Http,
        private _commonCourtConverter: CommonCourtConverter
    ) {}


    //------------------------ LOGIC --------------------------

    getCommonCourts() {

        return this._http
            .get(this._commonCourtURL)
            .map((res) => {
                return this._commonCourtConverter.convertCcList(res.json());
            })
            .catch(this.handleError);
    }

    getCommonCourtDivisions(id: string) {

        return this._http
            .get(this._commonCourtDivisions.replace("CC_COURT_ID", id))
            .map(res => {
                return this._commonCourtConverter.convertCcDivisionList(res.json())
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
