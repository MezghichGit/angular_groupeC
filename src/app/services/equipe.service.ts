import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private service : HttpClient) { } //injection de dépendance

  public getEquipes()
  {
    return this.service.get("http://127.0.0.1:82/equipes");
  }
}
