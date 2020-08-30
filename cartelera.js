 const cartelera = (peliculas) => {
    document.querySelector('#cine').innerHTML = peliculas.map(pelicula => {
      const { name, year, people, capacity } = pelicula;
      
      let porcentaje = pelicula.porcentajef();
      
      if( porcentaje == 100 )
      {
          porcentaje = `<strong>${pelicula.porcentajef()}</strong>`; 
      }
      else
      {
          porcentaje = pelicula.porcentajef(); 
      }
      return `<div id='cartelera'>
                <h3>${name}</h3>
                <p>Año de estreno: ${year}</p>
                <p>Sillas ocupadas: ${people}</p>
                <p>Capacidad: ${capacity}</p>
                <p>Porcentaje: ${porcentaje}</p>
              </div>`; 
    });
  };

  export {cartelera} ;