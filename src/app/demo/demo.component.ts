import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../classes/User';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
  	private http: HttpClient,
  	private data_service: DemoService
  	) { }

  value: number;

  @Input() user: User = {
  	firstname: "",
  	lastname: ""
  }

  submitClick() {
  	this.data_service.send_data(this.user).subscribe(value => {
  		this.value = value;
  	})
  }

  ngOnInit() {
  }

}
