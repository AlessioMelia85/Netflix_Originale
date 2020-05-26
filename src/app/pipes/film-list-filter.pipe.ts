import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmListFilter'
})
export class FilmListFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
