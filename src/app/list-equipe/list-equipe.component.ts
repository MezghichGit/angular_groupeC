import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

   equipes: any;
  constructor(private service : EquipeService) { }

  ngOnInit(): void {
    this.service.getEquipes().subscribe(
      data =>{
            //console.log(data);
            this.equipes = data;
      }
    );
  }

}
