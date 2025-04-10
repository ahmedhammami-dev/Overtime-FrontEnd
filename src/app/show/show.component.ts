import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
})
export class ShowComponent {
  res: any[] = [];
  constructor(private http: HttpClient) {}
  showEmployees() {
    this.http
      .get(`http://localhost:8090/overtime/findAllEmployees`)
      .subscribe((data: any) => {
        this.res = data;
      });
    console.log(this.res);
  }
}
