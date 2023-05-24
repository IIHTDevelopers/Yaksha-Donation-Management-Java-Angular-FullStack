import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  API_URL = '';

  constructor(private http: HttpClient) {}

  getData() {
    return null;
  }

  postData(data: any) {
    return null;
  }

  putData(id: number, data: any) {
    return null;
  }

  deleteData(id: number) {
    return null;
  }
}
