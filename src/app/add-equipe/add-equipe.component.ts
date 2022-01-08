import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  constructor(private service : EquipeService, private router : Router) { }

  ngOnInit(): void {
  }

  createEquipe(myform){

    this.service.createEquipe(myform).subscribe(
      response => {
        //console.log(response);
            this.router.navigate(['listEquipe']);
      }
  );}
}
