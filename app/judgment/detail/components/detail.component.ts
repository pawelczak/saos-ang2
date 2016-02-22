import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'detail',
    templateUrl: 'app/judgment/detail/components/detail.component.html'
})
export class DetailComponent {

    @Input() label: string;
    @Input() value: string;

}
