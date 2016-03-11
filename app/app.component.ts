import {Component} from "angular2/core";
import {HomeComponent} from "./home/home.component";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {JudgmentComponent} from "./judgment/judgment.component";
import {HTTP_PROVIDERS} from "angular2/http";


@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HTTP_PROVIDERS
    ]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/judgments/...', name: 'Judgments', component: JudgmentComponent}
])
export class AppComponent {}
