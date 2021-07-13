const fs = require("fs");
const { add, deleteItem, list } = require("./utils");
let movieList = [];

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList.push(tempNetflix);
} catch (error) {
  movieList = [];
}

const app = () => {
  if (process.argv[2] === "add") {
    add(movieList, process.argv[3]);
  } else if (process.argv[2] === "delete") {
    deleteItem(movieList, process.argv[3]);
  } else if (process.argv[2] === "list") {
    list(movieList);
  }
};

app();

// const add = () => {
//   if (process.argv[2] === "add") {
//     tempMovie = { title: process.argv[3] };

//     movieList.push(tempMovie);
//     let stringMovieList = JSON.stringify(movieList.flat(1));

//     fs.writeFileSync("./netflix.json", stringMovieList);
//   }
// };

// const deleteItem = () => {
//   if (process.argv[2] === "delete") {
//     let deleteIndex;
//     movieList[0].map((movie, index) => {
//       if (movie.title === process.argv[3]) {
//         deleteIndex = index;
//       }
//     });
//     movieList[0].splice(deleteIndex, 1);
//     let stringMovieList = JSON.stringify(movieList.flat(1));
//     fs.writeFileSync("./netflix.json", stringMovieList);
//   }
// };

// const list = () => {
//   if (process.argv[2] === "list") {
//     console.log(movieList);
//   }
// };

// add();
// list();
// deleteItem();