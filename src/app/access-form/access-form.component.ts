import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss']
})
export class AccessFormComponent implements OnInit {
  person: string;
  items: string[] = ['Myself', 'Working Group'];
  constructor() { }

  ngOnInit() {
  }

}
