Aplicaccion para Administracion de una biblioteca, el objetivo de esta app es poder llevar el control de los libros prestados y entregados, pose dos perfiles Administrador y Miembros estos segundos son aquellos que no tienen acceso a las herraminetas de adminstrador, el administrador pued dar de Alta a miembros y asu ves a adminsitradores, autoriza ordenes de pesrtamo o entregado y agregar libros al inventario.

El miembro puede entrar con la contraseña proporcionada por una admintrador y cambiarla en su perfil, asi como sus datos, puede ver el inventario de libros y solicitar el prestamo, y podra visualizar sus ordenes

## Available Scripts

Una vez Clonado en Repositorio debe de entrar a su carpera y ejecutar el siguente comando

### `npm i`

Para actualziar e instalara las dependencias y el siguente comando para desplegar la aplicacion

### `npm start`

La aplicación corre en la siguiente dirección.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Se ejecuta en modo desarrollo, Posteriormente se puede pasar a Producion<br />
You will also see any lint errors in the console.

En la Carpera /src es la raíz de la aplicacion

Se compone de Varias carpetas en su interior
```
 /components  En esta carpeta se guarda todos los compenente que ejecutan las acciones de la aplicacion
 /css Assets necesarios para los estilos css
 /helpers  En esta carpeta se guarda los componentes auxiliares presenten en toda la aplicacion que comparte informcion con los compenentes padres, hijos hermanos en este caso el Auth sirbe para vaidar si esta autntificado, para validar si es Admin o Miembro
 /img assets de imágenes
 /layouts  estructura y diseño de la aplicacion
 /routes Rutas de la aplicacion asi como la funcion para rutas protegidas
 /views Todas las vistas de la aplicación
```
## Datos acceso para pruebas NOTA: no usar en producción

Perfil Administrador
```
///Username: efren.almanza@gmail.com
///Password: qwerty
```
Perfil Miembro

```
///Username: efren@gmail.com
///Password: qwerty
```

## Arbol de rutas y archivos
```
 /src
 /---components
 /---css
 /---helpers
 /------auth.js <!--useContex ayuda con las variables compartidas UserContex-->
 /---img
 /---layout
 /---routes
 /------PrivateRoutes.js <!--funcion para rutas protegidas valida si estas autentificado -->
 /------routes.js <!--archivo de rutas--->
 /---views
 /------app.js   <!---archivo principal--->
 /index.js
 /.gitignore

```
 la conexion al backend es la ruta [http://localhost:3500] esta fija aun no establece de forma dinamica


 ## Sugerencias de Contribución

 Esta aplicacion aun no esta completa aun se puede mejora con esstas sugerencias

```
 1.-Componentes para recuperar password
 2.-Crear su propio usuario
 3.-Sistema de notificaciones y correos
 4.-Dashboard y reporteo
 5.-Mensajes de éxito
 6.-Recordar ultima pagina visitada y recordar el token para una acceder sin password y contraseña
 7.-Conexion dinámica al backend y variables de entorno
 8.-Mensajes de errores de conexión al usuario
 9.-Banderas de Conexión y Carga
```

