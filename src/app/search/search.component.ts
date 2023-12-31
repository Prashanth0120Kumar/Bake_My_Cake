import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent
{
  @Output()
  searchProduct:EventEmitter<any>=new EventEmitter()

  searchText:string='';

  search()
  {
    this.searchProduct.emit(this.searchText);
  }
}
