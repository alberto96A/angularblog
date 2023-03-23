import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectosServiceService } from 'src/app/proyectos-service.service';

@Component({

    selector: 'app-lista-proyectos',
    templateUrl: './lista-proyectos.component.html'
    styleUrls: ['./lista-proyectos.component.css']
})
export class FormularioProyectosComponent {

    formulario: FormGroup;
    constructor(
        private proyectosService: ProyectosServiceService,
        private router: Router
    ) {
        this.formulario = new FormGroup({

            titulo: newFormControl(null, [Validators.required])
            descripcion: newFormControl(null, [Validators.required]);
            fecha_inicio: newFormControl(null, [Validators.required]) ;
            activo: newFormControl(null, [Validators.required]);
            manager: newFormControl(null, [Validators.required]) ;



        }



        )
    }
    onSubmit() {
        if (!this.formulario.valid) {
            alert('Revisa los errores del formulario')

        } else {//Crear el nuevo proyecto

            this.proyectosService.create(this.formulario.value);
            this.router.navigate(['/proyectos']);



        }
    }
}