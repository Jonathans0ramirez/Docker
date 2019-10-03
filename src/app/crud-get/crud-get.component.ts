import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-crud-get',
  templateUrl: './crud-get.component.html',
  styleUrls: ['./crud-get.component.css']
})
export class CrudGetComponent implements OnInit {

  displayedColumns: string[] = ['Person Name', 'Business Name', 'Business GST Number'];
  businesses: Array<any>;

  constructor(
    private businessService: BusinessService
  ) { }

  ngOnInit() {
    this.businessService.getAllBusiness().subscribe(data => {
      this.businesses = data;
    });
  }

}
