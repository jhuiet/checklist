import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from './check-list/check-detail/Task.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: TaskModel[], searchText: string): any[] {
    TaskModel
    if(!items) return [];
    if(!searchText) return items;

searchText = searchText.toLowerCase();

return items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }
}
