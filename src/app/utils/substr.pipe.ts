import {Pipe} from "angular2/core";
import {PipeTransform} from "angular2/core";

@Pipe({
    name: 'substr'
})
export class SubstrPipe implements PipeTransform {

    transform(value: string, args: string[]): any {

        let newValue,
            start: number = parseInt(args[0] || "0"),
            end: number = parseInt(args[1] || value.length + "");

        newValue = value.substr(start, end);

        if (newValue.length < (value.length - start)) {
            newValue += "...";
        }

        return newValue;
    }

}
