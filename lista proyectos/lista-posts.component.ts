import { Component } from '@angular/core';
import { ProyectosServiceService } from 'src/app/proyectos-service.service';

@Component({

    selector: 'app-lista-proyectos',
    templateUrl: './lista-proyectos.component.html'
    styleUrls: ['./lista-proyectos.component.css']
})

export class ListaProyectosComponent {


    constructor(

        private proyectosService: ProyectosServiceService
    ) { }
}

ngOnInit(){
    this.proyectos = this.proyectosService.getAll();
}


