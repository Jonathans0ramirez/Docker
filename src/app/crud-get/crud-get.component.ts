import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-crud-get',
  templateUrl: './crud-get.component.html',
  styleUrls: ['./crud-get.component.css']
})
export class CrudGetComponent implements OnInit {

  displayedColumns: string[] = ['person_name', 'business_name', 'business_gst_number', 'business_actions'];
  businesses: Array<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private businessService: BusinessService
  ) { }

  ngOnInit() {
    this.businessService.getAllBusiness().subscribe(data => {
      this.businesses = data;
    });
  }

  delete(id) {
    let res = this.businessService.delete(id);
    this.ngOnInit();
  }
}
