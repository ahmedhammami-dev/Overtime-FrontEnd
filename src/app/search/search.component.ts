import { log } from 'console';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  res: any[] = [];
  constructor(private http: HttpClient) {}
  add(f: NgForm) {
    let startDate = f.value.startDate;
    let endDate = f.value.endDate;
    this.http
      .get(
        `http://localhost:8090/overtime/findOvertimePerEmployeeByDate/${startDate}/${endDate}`
      )
      .subscribe((data: any) => {
        this.res = data;
      });
    console.log(this.res);
  }
}
