import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceService {

  private arrProyectos: Proyecto[];

  constructor() {

    this.arrProyectos = [];
  }


  getAll(): Proyecto[] {
    return this.arrProyectos;
  }
}

create(values: any) {
  this.arrProyectos.push(values);



}