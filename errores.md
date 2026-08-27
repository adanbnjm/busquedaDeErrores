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

cursos
.1 El Select * from en obtenerCursos está mal escrito
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
