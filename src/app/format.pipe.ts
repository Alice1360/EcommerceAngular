import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    // if (value.length <= 12) {
    //   return value.substr(0, 4).padEnd(12, '#');

    // } else {
    //   return '[INVALID ACCOUNT NUMBER]';
    // }
     return length && value.length !== length ? '[INVALID ACCOUNT NUMBER]' : value.substr(0, 4).padEnd(value.length,"*")

  }
}
