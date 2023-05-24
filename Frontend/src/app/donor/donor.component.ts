import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  ngOnInit(): void {
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
