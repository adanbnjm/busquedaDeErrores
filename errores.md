estudiantes
.
.
.
.
.
.
.
..

.
.
.
.
.
.
.
.
.
.
profesores
//errores de PROFESORES

//al probar el metodo GET

1. src/controllers/profesores.controller.ts --> error en el nombre de la funcion "crearProfesores" a "crearProfesor" (en singular)
2. src/config/db.ts --> error de sintaxis "process.env.DB_PASWORD" a "process.env.DB_PASSWORD" (faltaba la S)
   //al probar el medoto POST
3. el para metro telefono no estama enviado en el query
4. validacion de email - se agrega, en schema, el mensaje si el campo esta en blanco o no cumple con el formato "nombre@algo.algo"
   // al probar metodo DELETE
5. mensaje de "profesor eliminado" con ID inexistente
   .
   .
   .
   .
   .
   .
   .
   .

cursos
.1 El Select \* from en obtenerCursos está mal escrito
.2 En cursos.controller se puso que para el cursoRouter.get por id if(curso) saliera que no hay un curso
.3 En el esquema si solo había un puntito en el nombre se creaba el curso de todas maneras
.4 Igual en el esquema no había para impedir espacios en blanco, loque permitia escribir nombres en blanco
.5 En cursos.model el await está dando "DELETE FROM cursos" en vez de "DELETE FROM cursos WHERE id"
.6 La actualización está inviertida el nombre por la descripción porque en cursos.model el UPDATE en [] está primero descripción y luego nombre
.
.
.
.
.
.
.
.
.
.

calificaciones
.
.
.
.
.
.
.
..

.
.
.
.
.
.
.
.
.
.
