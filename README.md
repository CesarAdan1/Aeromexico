# Aeromexico prueba frontend

Para levantar el proyecto, continuar con las siguientes intrucciones. Abre la terminal

### `git clone`
Clona el proyecto de un repositorio.

### `npm install`
Dentro de la carpeta del proyecto local ejecutar el script para obtener las librerias utilizadas

## Para levantar el servidor, en la carpeta raiz.
### Levantar el servidor en la terminal y recibir datos
### `npm run json:server `

Ejecucion para levantar el servidor, levanta en el navegador con la siguiente url y obtiene la informacion de los personajes http://localhost:3000/characters

### Corre el cliente en otra terminal con el comando:
### `npm run dev`

Ejecucion del proyecto, en el directorio raiz, levanta en el navegador. Abrir: http://localhost:3005

### tests
## `npm run test`

### Ver el demo:
    http://aeromexico-t.s3-website-us-east-1.amazonaws.com/

# ¿Qué es lo que más te gustó de tu desarrollo?
Lo que mas me gusto fue maquetar el diseno y seguir especificaciones de diseno en Figma. Asi como configurar el proyecto y construir los componentes.
Finalmente poder manejar el estado de la aplicacion usando hooks y redux.

# Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

1. Automatizar la integracion con un servicio como versel o circle-ci al igual que dockerizar y aprender un poco mas sobre implementarlo en la app.

2. Realizar las pruebas unitarias y tambien investigar e implementar la automatizacion con Docker y algun servicio cloud.

3. Crear un modal para cada personaje con mas informacion y/o
anadirle un perfil utilizando react router y agregarle una ruta con el nombre de cada personaje mostrando su descripcion.

4. Anadir un modal cuando no se pueda agregar otropersonaje favorito que desaparezca en 2 segs.

5. Refactorizar el codigo: la parte de redux y refactorizar los componentes para hacerlos mas pequenos.

6. Trabajar un poco mas en la responsividad.

7. Reconfigurar redux para crear un archipo con los types y luego las actions. Y quizas un reducer para mostrar los datos, otro para favoritos/no favoritos y otro para agregar el nuevo personaje y combinarlos.

# Bugs o problemas
Al configurar el proyecto olvide colocar un plugin en el archivo .babelrc, lo cual causaba un error al manaejar async/await. Se lo resolvio instalando una dependecia y modificando el archivo .babelrc

El proyecto esta configurado con webpack y se necesito configurar el proyecto para que recibiera svg y otros tipos de archivo, asi como cambair el orden de la configuracion de css y sass para que leyera el archivo de ant.css y funcionara el modal.

Redux lo encuentro un poco mas complicado y poder usar los reducer lo soluciones buscando mas acerca del funcionamiento de redux es la primera vez que lo utilizo actualmente utilizo mayormente context.

El proyecto funciona en modo responsive, pero no logre hacer que funcionaran algunas funciones en modo desktop o tablet.

El proyect tenia la un conflicto con las keys, ya que se repitieron.
