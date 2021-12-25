import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {

  transform(value: string): string {

    let first = value.charAt(0).toUpperCase();
    let reste = value.substring(1);
    reste = first + reste;
    return reste;
  }

}
