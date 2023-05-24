import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donation } from './donation';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  formValues!: FormGroup;
  modelObj: Donation = new Donation();
  allData: Donation[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private fB: FormBuilder, private api: DonationService) {}
  ngOnInit(): void {
    this.formValues = this.fB.group({
      donar_id: [],
      ngo_id: [],
      donation_type: [],
      amount: [],
      donation_date: [],
    });
    // write your logic here
  }

  //calls when you click on Add  button
  addDonation() {
    // write your logic here
  }

  //Save Data
  postDonationData() {
    // write your logic here
  }

  //Get data
  getAllDonationData() {
    // write your logic here
  }

  //Delete data
  deleteDonation(obj: any) {
    // write your logic here
  }

  // set values of specfid one to html form fields to edit
  donationEdit(obj: any) {
    // write your logic here
  }

  //Update  data
  updateDonationData() {
    // write your logic here
  }
}
