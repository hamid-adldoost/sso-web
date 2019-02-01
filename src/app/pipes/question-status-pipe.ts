
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'questionPipe'
})
export class QuestionStatusPipe implements PipeTransform {


  transform(value: any, ...args): any {

    switch (value) {
      case 0:
        return 'غیر فعال';
      case 1:
        return 'فعال';
    }
  }
}
