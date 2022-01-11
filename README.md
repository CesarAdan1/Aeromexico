# Aeromexico prueba frontend

Para levantar el proyecto, continuar con las siguientes intrucciones

### `git clone`
Guarda una copia local del proyecto.

### `npm install`
Dentro de la carpeta del proyecto local ejecutar el script para obtener las librerias utilizadas

### `npm run dev`
Ejecucion del proyecto, en el directorio raiz, levanta en el navegador. Abrir: http://localhost:5001

## Para levantar el servidor, en la carpeta raiz.
### Levantar el servidor en la terminal y entrar a 
### cd server, correr `npm i` y despues `npm start`

Ejecucion para levantar el servidor, levanta en el navegador con la siguiente url y obtiene la informacion de los personajes http://localhost:3000/characters


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

# Bugs o problemas
Al configurar el proyecto olvide colocar un plugin en el archivo .babelrc, lo cual causaba un error al manaejar async/await. Se lo resolvio instalando una dependecia y modificando el archivo .babelrc

Redux lo encuentro un poco mas complicado y poder usar los reducer lo soluciones buscando mas acerca del funcionamiento de redux es la primera vez que lo utilizo actualmente utilizo mayormente context.

El proyecto funciona en modo responsive, pero no logre hacer que funcionaran algunas funciones en modo desktop o tablet.

