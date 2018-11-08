import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick() {
  	this.h1Style = true;
  	this.data.firstClick();
  }

}
