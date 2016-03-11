/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../node_modules/angular2/ts/typings/angular-protractor/angular-protractor.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import 'rxjs/Rx';
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);
