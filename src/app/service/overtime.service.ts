import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OvertimeService {
  constructor(private HttpClient: HttpClient) {}
  findOvertimePerEmployeeByDate(startDate: string, endDate: string) {
    return this.HttpClient.get(
      `http://localhost:8089/overtime/findOvertimePerEmployeeByDate/${startDate}/${endDate}`
    );
  }
}
