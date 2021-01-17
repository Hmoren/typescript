// import { User, Album, Picture, PhotoOrientation } from './photo-app';

import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'hmoreno.dev', 'Hernán Moreno', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

user.removeAlbum(album);
console.log('user', user);


// Principio de responsabilidad unica. Idealmente un archivo deberia tener un proposito o responsabilidad unica: definir una clase, una interfaz, un enumerado, etc.
// Esto mejora la legibilidad de codigo, facilita la lectura, testing y favorece su mantenimiento.
// Utilizamos archivos separados y la utilizacion de import, export para lograr un poco mas de mantenibiilidad. Podemos usar tambien carpetas para separar nuestros archivos.
// Para observar una carpeta entera usamos para compilar: 
// tsc --project myFolder --watch
// y para ejecutar
// node photo-app/dist/main.js
