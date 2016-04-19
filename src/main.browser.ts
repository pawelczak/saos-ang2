///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../node_modules/angular2/ts/typings/angular-protractor/angular-protractor.d.ts"/>

import 'angular2/bundles/angular2-polyfills.js';
import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./app/app.component";

//import './assets/stylesheets/styles.scss';

bootstrap(AppComponent,[
    ROUTER_PROVIDERS
]);