import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../classes/User';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
  	private http: HttpClient
  	) { }

  value: number;

  @Input() user: User = {
  	firstname: "",
  	lastname: ""
  }

  submitClick() {
  	return this.http.post<any>('/submit', {firstname: this.user.firstname, lastname: this.user.lastname}).subscribe(value => {
  		this.value = value;
  	})
  }

  ngOnInit() {
  }

}
