import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentNumber : number = 40;
  constructor() {
    console.log("Message du constructeur....");
  }

  ngOnInit(): void {

    console.log("Message du ngOnInit....");
  }

}
