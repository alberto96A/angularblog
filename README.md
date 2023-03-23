# GestionProyectos

- Instalar Bootstrap

## RUTAS:


- /proyectos -> ListaProyectos
- /proyectos/new -> FormularioProyectos

## INTERFACES:

-Proyecto
(id: titulo, texto, autor, imagen, fecha, categoria, archivo: boolean, manager: string)

## SERVICIOS

-Proyectos

--**getAll()** - Recupera todo los proyectos
**create()** - Crea un nuevo proyecto a partir de los datos que reciba

## COMPONENTES

### ListaProyectos 

A partir del método **getAll** del servicio, recupera todos los proyectos y los muestra de una forma clara


### FormularioProyectos

- Formulario de tipo Model -> Importar la libreria ReactiveFormsModule
- Creacion del formulario en el TS (FormGroup y los FormControl) y enlace posterior con los elementos del HTML
- Todos los campos son requeridos
- El envio del formulario no se debería permitir hasta que no sea válido
- Cuando enviemos el formulario lanzamos el metodo de cracion del servicio
- Una cez creado el proyecto navegamos a la lista