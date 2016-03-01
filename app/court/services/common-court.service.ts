import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class CommonCourtService {


    private _commonCourtURL: string = "https://www.saos.org.pl/cc/courts/list";
    private _commonCourtDivisions: string = "https://www.saos.org.pl/cc/courts/CC_COURT_ID/courtDivisions/list";


    constructor(
        private _http: Http
    ) {}


    getCommonCourts() {

        return this._http.get(this._commonCourtURL)
            .map(res => res.json())
            .catch(this.handleError);

    }

    getCommonCourtDivisions(id: string) {

        return this._http.get(this._commonCourtDivisions.replace("CC_COURT_ID", id))
            .map(res => res.json())
            .catch(this.handleError);
    }


    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
