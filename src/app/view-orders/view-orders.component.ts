import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../Services/get-details.service';
import { Details } from '../Model/details';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  constructor(private service:GetDetailsService){}
  details:Details[]=[];
  dataSource!: MatTableDataSource<Details>; // Declare dataSource without initialization



  ngOnInit(): void
  {
    this.service.getDetails().subscribe(customer=>
      {
        this.details=customer;
        this.dataSource = new MatTableDataSource<Details>(this.details);
      });
  }

    displayedColumns: string[] = ['id', 'cakename', 'quantity', 'firstName','date','phoneNumber','amount'];
  
    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
  }
