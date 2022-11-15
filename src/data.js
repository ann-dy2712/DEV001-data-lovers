//export const example = () => {
//return 'example';
//};


//export const anotherExample = () => {
//return 'OMG';
//};

// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}
console.log(getFilm);

//Searcher all films
export const searchFilms = (data, condition, value) => {
  return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
}
console.log(searchFilms);

//Funcion ordenar por fecha

export const orderFilms = (data, select) => {
  if (select === "0-9") {
    return data.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);
  }

  if (select === "9-0") {
    return data.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);
  }
  return data;
};
console.log(orderFilms);

//Crear export para ordenar peliculas de la A a la Z y de la Z a la A
export const ordenaFilms = (data, select) => {
  if (select === "A-Z") {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
  }

  if (select === "Z-A") {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
  }
  return data;
};
console.log(ordenaFilms);

