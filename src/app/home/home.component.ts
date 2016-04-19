import {Component} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    templateUrl: './src/app/home/home.component.html'
})
export class HomeComponent {

    constructor(
        private _router: Router
    ) {}

    keyup(value) {
        this._router.navigateByUrl('judgments/' + value);
    }
    
}
