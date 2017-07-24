import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterString: string, propName: string): any {
    if (items.length === 0 || filterString === '') {
      return items;
    }

    const resultArray = [];
    for (const item of items) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
