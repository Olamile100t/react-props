
// forEach() – Executes a provided function once for each array element.
// map() – Creates a new array by applying a function to each element.
// filter() – Creates a new array with elements that pass a test.
// some() – Returns true if at least one element passes a test.
// every() – Returns true if all elements pass a test.
// find() – Returns the first element that satisfies a provided test function.
//  Questions
// .forEach()
// Print each movie's title and rating to the console.
// .map()
// Create a new array of strings in the format:
// "Title (Rating/10)", e.g. "Inception (8.8/10)".
// .filter()
// Get only the movies with a rating above 8.
// .some()
// Check if there's any movie in the "drama" genre with a rating above 5.




export const movies =[
    {title: "inception", rating: 8.8, genre:"sci-fi"},
    {title: "Titanic", rating: 7.8, genre:"romance"},
    {title: "The Room", rating: 3.7, genre:"drama"},
    {title: "The Matrix", rating: 8.7, genre:"sci-fi"},
    {title: "The Notebook", rating: 7.9, genre:"romance"},
    


];

// const printMovie = movies.forEach(movie =>(
//     console.log(movie.title + "-" + movie.rating)
// ))
// console.log(printMovie);


// const newArray = movies.map(movie =>(
    //     return `${movie.title }+ "-" + (${movie.rating}/10)
    // ));
    // console.log(newArray);

    // filter
    // const filteredMovies = movies.filter(movie => movie.rating > 8)
    // console.log(filteredMovies);

    // const hasDrama = movies.some(movie => movie.genre === "drama" && movie.rating > 5)
    // console.log(hasDrama);