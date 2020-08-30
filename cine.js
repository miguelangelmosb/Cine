import Pelicula from './pelicula';
import {cartelera} from './cartelera';
import {listado} from './listado';
  
const peliculas = [];


  cartelera(peliculas);
  
  listado(peliculas);
  
  document.querySelector('#nueva').addEventListener('click', () => {
    
    const pelicula = document.querySelector('#datos').value.split(','); 
    
    const p = new Pelicula(pelicula[0], pelicula[1], pelicula[2], pelicula[3], pelicula[4]);
    
    peliculas.push(p);
    cartelera(peliculas);
    listado(peliculas);
  });
  
  document.querySelector('#guardar').addEventListener('click', () => {
    const numero = parseInt(document.querySelector('#numero').value);
    const peliculaSeleccionada = [...document.querySelector('#pelicula').selectedOptions].shift().value;
  
    peliculas.map(pelicula => 
        {
            if(pelicula.id === peliculaSeleccionada)
            {
                pelicula.people = pelicula.people + numero;
            }
        });
    
    cartelera(peliculas);
    listado(peliculas);
  });