import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "jalali-moment";

@Pipe({
    name: 'jalalitime'
})
export class JalaliTimePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value == null) {
            return null;
        }
        const MomentDate = moment(value);
        return MomentDate.locale('fa').format("YYYY/M/D HH:MM:SS");
    }
}
