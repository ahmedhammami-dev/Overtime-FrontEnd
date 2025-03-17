import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  // constructor(private http: HttpClient) {
  //   this.http
  //     .get('http://localhost:8089/overtime/findAllPrices')
  //     .subscribe((data) => console.log(data));
  // }
}
