const numberOfFilms = +prompt(`How many films have you already watched?`, ``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(`One of the last movies you watched?`, ``),
      b = prompt(`How much do you rate?`, ``),
      c = prompt(`One of the last movies you watched?`, ``),
      d = prompt(`How much do you rate?`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
