import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NgoService {
  API_URL = 'http://127.0.0.1:8081/donation-management-system/ngos';

  constructor(private http: HttpClient) {}

  getData() {
    return null;
  }

  postData(data: any) {
    return null;
  }

  putData(data: any) {
    return null;
  }

  deleteData(id: number) {
    return null;
  }
}
