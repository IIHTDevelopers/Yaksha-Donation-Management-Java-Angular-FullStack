import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  API_URL = '';

  constructor(private http: HttpClient) {}

  getDonation() {
    return null;
  }

  postDonation(data: any) {
    return null;
  }

  putDonation(id: number, data: any) {
    return null;
  }

  deleteDonation(id: number) {
    return null;
  }
}
