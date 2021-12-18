import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../entities";
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentNumber : number = 40;
  names:string[]=["amine","ahmed","salah"];

  myStudents:Etudiant[]=[new Etudiant("Ali",20),new Etudiant("Alya",21), new Etudiant("Ahmed",22)];
  constructor() {
    console.log("Message du constructeur....");
  }

  ngOnInit(): void {

    console.log("Message du ngOnInit....");
  }

}
