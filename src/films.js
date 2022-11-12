


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  let arrayDirectors = array.map(nombre => nombre.director);
  return arrayDirectors
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(e => e.director === director);
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array){
  const arrayScores = array.map(movie=>movie.score);
  const resultado = arrayScores.reduce((acc,el)=> acc+el,0);
  const averageByCategory = resultado/(array.length)
  return averageByCategory
}
function moviesAverageOfDirector(array, director) {
  const moviesDirector = array.filter(e => e.director === director);
  const averageByDirector= moviesAverage(moviesDirector);
  return averageByDirector

}
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayTitles= [...array].map(movie=> movie.title)
  const resultado= arrayTitles.sort((a,b)=>{
    titleA=a.toLowerCase()
    titleB=b.toLowerCase()
    if(titleA<titleB){
      return -1;
    }
    if(titleA>titleB){
      return 1;
    }
    return 0;
  });
  const only20movies= resultado.splice(0,20);
  return only20movies
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const arrayByTitle= [...array].sort((a,b)=>{
    titleA=a.title
    titleB=b.title
    if(titleA<titleB){
      return -1;
    }
    if(titleA>titleB){
      return 1;
    }
    return 0;
  }); 

  const arrayByYear = arrayByTitle.sort((a,b)=>{
    const movieA=a.year
    const movieB=b.year
    return movieA-movieB 
  });
  return arrayByYear
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  const moviesByGenre = array.filter(e => {
    if(e.genre.includes(genre) && e.score !== '') {
      return true
    }
  });
  const average = Number(moviesAverage(moviesByGenre).toFixed(2));
  return average 
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {  
  const newArray = [...array].map(({...film}) => { 
      const reg=/\d+/g;
      let newString = film.duration.match(reg);
      let number1= parseInt(newString[0])*60
      let number2= parseInt(newString[1]);
      if(newString.length===2){
        minutes= Number(number1+number2)
      }
      else if(newString.length===1){
        minutes=Number(number1)
      }
      film.duration=minutes
      return film
    });
    return newArray 
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  const moviesByYear = [...array].filter(e => e.year === year);
  const comparor= (a,b)=>{
    return b.score-a.score
  } 
  const bestMovie = moviesByYear.sort(comparor)
  return bestMovie.slice(0,1) 
  
  }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
