import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class SupremeChamberService {


    private _supremeChamberURL: string = "https://www.saos.org.pl/sc/chambers/list";
    private _supremeChamberDivisionURL: string = "https://www.saos.org.pl/sc/chambers/SC_CHAMBER_ID/chamberDivisions/list";

    constructor(
        private _http: Http
    ) {}


    //------------------------ LOGIC --------------------------

    getSupremeChambers() {

        return this._http
            .get(this._supremeChamberURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getSupremeChamberDivisions(id: string) {

        return this._http
            .get(this._supremeChamberDivisionURL.replace("SC_CHAMBER_ID", id))
            .map(res => res.json())
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
