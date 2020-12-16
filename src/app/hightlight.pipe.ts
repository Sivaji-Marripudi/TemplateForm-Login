import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hightlight'
})
export class HightlightPipe implements PipeTransform {

  transform(value: number, salary: number): number {
    return salary;
  }

}
