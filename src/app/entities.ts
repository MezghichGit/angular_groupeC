export class Etudiant {
  private nom: string = "";
  private age: number = 0;

  public constructor(n: string, a: number) {
    this.nom = n;
    this.age = a;
  }


  public getNom(){
    return this.nom;
  }

  public getAge(){
    return this.age;
  }
}
