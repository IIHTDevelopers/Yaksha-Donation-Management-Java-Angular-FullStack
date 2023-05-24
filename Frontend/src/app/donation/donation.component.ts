import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  ngOnInit(): void {
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
