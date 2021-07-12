const fs = require("fs");
let movieList = [];

try {
    let tempJson = fs.readFileSync("./netflix.json");
    let tempNetflix = JSON.parse(tempJson)
    movieList.push(tempNetflix);
} catch (error) {
    movieList = []
}

// ADD SOMETHING TO THE ARRAY
const add = () => {
   if (process.argv[2] === "add") {
       tempMovie = {title: process.argv[3]};
       movieList.push(tempMovie)
      let stringMovieList = JSON.stringify(movieList.flat(1));
      console.log(movieList);
       fs.writeFileSync("./netflix.json", stringMovieList);
};
};

// SHOW A LIST OF ITEMS IN THE ARRAY
const list = () => {
    if (process.argv[2] === "list"){

    }
    console.log(movieList);
}


// UPDATE THE ARRAY 
// const update = () => {
//     if (process.argv[2] === "update") {
//         movieList[0].unshift()
//         let stringMovieList = JSON.stringify(movieList);
//         fs.writeFileSync("./netflix.json", stringMovieList)
//     }
// }

// REMOVE SOMETHING FROM THE ARRAY
const removeItem = () => {
    if (process.argv[2] === "delete") {
        let deleteIndex;
        movieList[0].map((movie, index) => {
            if (movie.title === process.argv[3]){
            deleteIndex = index 
               }
        });
        movieList[0].splice(deleteIndex, 1);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync("./netflix.json", stringMovieList)
    }
}

add();
removeItem();
list();
update();