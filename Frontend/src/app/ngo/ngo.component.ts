import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgoService } from './ngo.service';
import { Ngo } from './ngo';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css'],
})
export class NgoComponent implements OnInit {
  formValues!: FormGroup;
  modelObj: Ngo = new Ngo();
  allData: Ngo[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private fB: FormBuilder, private api: NgoService) {}

  ngOnInit(): void {
    this.formValues = this.fB.group({
      ngo_name: [],
      username: [],
      password: [],
      address: [],
      phone_number: [],
      started_in: [],
      documents: [],
    });
    // write your logic here
  }

  //calls when you click on Add  button
  addNgo() {
    // write your logic here
  }

  //Save Data
  postNgoData() {
    // write your logic here
  }

  //Get data
  getAllNgoData() {
    // write your logic here
  }

  //Delete data
  deleteNgo() {
    // write your logic here
  }

  // set values of specfid one to html form fields to edit
  ngoEdit() {
    // write your logic herAaz
  }

  //Update  data
  updateNgoData() {}
}
