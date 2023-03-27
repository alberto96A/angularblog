import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: [\componentes\botones.css']
})
export class FormularioComponent implements OnInit {

    postForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.postForm = this.fb.group({
            titulo: ['', Validators.required],
            contenido: ['', Validators.required],
            autor: ['', Validators.required]
        });
    }