const listado = (peliculas) => {
    document.querySelector('#pelicula').innerHTML = peliculas.map(pelicula => {
     
      let limite = '';
      if(pelicula.people === pelicula.capacity)
      {
          limite = `<option value='${pelicula.id}' disabled>${pelicula.name}</option>`;
      }
      else
      {
          limite = `<option value="${pelicula.id}">${pelicula.name}</option>`;
      }
      
      return limite;
    });

  };

  export {listado};