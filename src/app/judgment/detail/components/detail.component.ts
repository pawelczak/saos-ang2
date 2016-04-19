import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'detail',
    template: `<div *ngIf="value.length > 0" class="row" >
        <span class="col-sm-2" >{{label}}:</span>
        <span class="col-sm-8" >{{value}}</span>
    </div>`/*,
    templateUrl: 'app/judgment/detail/components/detail.component.html'*/
})
export class DetailComponent {

    @Input() label: string = "";
    @Input() value: string = "";

}
