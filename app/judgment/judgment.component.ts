import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {JudgmentSearchComponent} from "./search/judgment-search.component";
import {RouterOutlet} from "angular2/router";
import {JudgmentDetailComponent} from "./detail/judgment-detail.component";

@Component({
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/', name: 'JudgmentSearch', component: JudgmentSearchComponent, useAsDefault: true},
    {path: '/:id', name: 'JudgmentDetail', component: JudgmentDetailComponent}
])
export class JudgmentComponent {

}