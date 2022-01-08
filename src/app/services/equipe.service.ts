import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipe : any;
  equipeurl = "http://127.0.0.1:82/equipes";
  constructor(private service : HttpClient) { } //injection de dépendance

  public getEquipes()
  {
    return this.service.get(this.equipeurl);
  }

  createEquipe(myform) {
    this.equipe = {
    'name': myform.value.equipeName,
    'country': myform.value.equipeCountry,
    }
    return this.service.post(this.equipeurl, this.equipe);
    }

    updateEquipe(myObj) {
    return this.service.put(this.equipeurl + '/' + myObj['_id'], myObj);
    }
    deleteEquipe(myObj) {
      console.log(myObj['_id']);
      return this.service.delete(this.equipeurl + '/' + myObj['_id'], myObj)
      }
      getEquipe(id) {
      return this.service.get(this.equipeurl + '/' + id)
      }

}
