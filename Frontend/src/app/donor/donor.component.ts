import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donor } from './donor';
import { DonorService } from './donor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  formValues!: FormGroup;
  modelObj: Donor = new Donor();
  allData: Donor[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private fB: FormBuilder, private api: DonorService) {}

  ngOnInit(): void {
    this.formValues = this.fB.group({
      ngo_id: [],
      donar_name: [],
      username: [],
      password: [],
      address: [],
      phone_number: [],
      email_id: [],
    });
    // write your logic here
  }

  //calls when you click on Add  button
  addDonor() {
    // write your logic here
  }

  //Save Data
  postDonorData() {
    // write your logic here
  }

  //Get data
  getAllDonorData() {
    // write your logic here
  }

  //Delete data
  deleteDonor(obj: any) {
    // write your logic here
  }

  // set values of specfid one to html form fields to edit
  donorEdit(obj: any) {
    // write your logic here
  }

  //Update data
  updateDonorData() {
    // write your logic here
  }
}
