const fs = require("fs");

exports.add = (movieList, entry) => {
  tempMovie = { title: entry };

  movieList.push(tempMovie);
  let stringMovieList = JSON.stringify(movieList.flat(1));
  fs.writeFileSync("./netflix.json", stringMovieList);
  console.log(stringMovieList);
};

exports.deleteItem = (movieList, entry) => {
  let deleteIndex;
  movieList[0].map((movie, index) => {
    if (movie.title === entry) {
      deleteIndex = index;
    }
  });
  movieList[0].splice(deleteIndex, 1);
  let stringMovieList = JSON.stringify(movieList.flat(1));
  fs.writeFileSync("./netflix.json", stringMovieList);
};

exports.list = (movieList) => {
  console.log(movieList);
};