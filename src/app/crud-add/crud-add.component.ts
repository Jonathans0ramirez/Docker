import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-crud-add',
  templateUrl: './crud-add.component.html',
  styleUrls: ['./crud-add.component.css']
})
export class CrudAddComponent implements OnInit {
  
  angForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private bs: BusinessService
  ) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
      });
  }

  addBusiness(person_name, business_name, business_gst_number) {
    this.bs.addBusiness(person_name, business_name, business_gst_number).subscribe(result => {
      this._snackBar.open('Success: Business Created', 'OK', {
        duration: 5000,
    });
    this.gotoList();
    })
  }

  gotoList() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
