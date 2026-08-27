1* Contraseña de PostgreSQL: La contraseña de la base de datos no se estaba tomando correctamente del archivo .env.
2* Buscar por nombre: La búsqueda tenía un error en la consulta y no estaba tomando correctamente el nombre ingresado.
3* curso_id: El mensaje mostrado cuando el curso_id era 0 o menor no era el adecuado.
4* ID inválido: No se verificaba que el ID ingresado fuera un número válido.
5* Búsqueda vacía: Se podía hacer una búsqueda sin ingresar ningún nombre.
6* Swagger: No estaba registrada la ruta para buscar estudiantes por nombre.
7\* Ordenamiento: El listado se ordenaba primero por ID y después por edad, por lo que se estaba aplicando el ordenamiento dos veces.
no se si todos estos errores estan bien, o si faltan.
pero esto es lo que me parecio que necesitaba modificar.
