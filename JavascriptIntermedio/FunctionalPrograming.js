//Ejercicio 1 - Learn About Functional Programming
const tea4TeamFCC = getTea(40);

//Ejercicio 2 - Understand Functional Programming Terminology
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

//Ejercicio 3 - Understand the Hazards of Using Imperative Code
// Dos maneras, usar slice o usar splice el problema es que splice modifica el array original
Window.prototype.tabClose = function(index) {
    var tabsBeforeIndex = this.tabs.slice(0, index); 
    var tabsAfterIndex = this.tabs.slice(index + 1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
    return this;
    };

Window.prototype.tabClose = function(index) {
    this.tabs.splice(index, 1)
    return this;
    };

//Ejercicio 4 - Avoid Mutations and Side Effects Using Functional Programming
function incrementer() {
    return fixedValue + 1;
}

//Ejercicio 5 - Pass Arguments to Avoid External Dependence in a Function
function incrementer(arg) {
    return arg + 1;
}

//Ejercicio 6 - Refactor Global Variables Out of Functions
function add(bL,bookName) {
    let bookList = [...bL];
    bookList.push(bookName);
    return bookList;
  }

function remove(bL,bookName) {
    let bookList = [...bL];
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
      bookList.splice(book_index, 1);
      return bookList;}
  }

//Ejercicio 7 - Use the map Method to Extract Data from an Array
const ratings = watchList.map(wl => ({
    title: wl["Title"],
    rating: wl["imdbRating"]
}));

//Ejercicio 8 - Implement map on a Prototype
Array.prototype.myMap = function(callback) {
    var newArray = [];
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
}

//Ejercicio 9 - Use the filter Method to Extract Data from an Array
const filteredList = watchList.filter(wl => wl["imdbRating"] >= 8.0).map(wl => ({
    title: wl["Title"],
    rating: wl["imdbRating"]
}));

//Ejercicio 10 - Implement the filter Method on a Prototype
Array.prototype.myFilter = function(callback) {
    var newArray = [];
    this.forEach(a => {
        if (callback(a) == true) {
            newArray.push(a);
        }
    });
    return newArray;
}

//Ejercicio 11 - Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

//Ejercicio 12 - Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}

//Ejercicio 13 - Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}

//Ejercicio 14 - Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}

//Ejercicio 15 - Use the reduce Method to Analyze Data  // Para sacar el avg dividimos por el total de peliculas de christopher nolan
function getRating(watchList) {
    var averageRating = watchList.filter(wl => wl["Director"] == "Christopher Nolan").map(wl => Number(wl["imdbRating"])).reduce((sum, rating) => sum + rating) / watchList.filter(wl => wl["Director"] == "Christopher Nolan").length;
    return averageRating;
}

//Ejercicio 16 - Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
function squareList(arr) {
    return arr.filter(a => a > 0 && a % parseInt(a) == 0).map(a => a * a);
}

//Ejercicio 17 - Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    return arr.sort(function(a,b) {
        return a===b ? 0 : a<b ? -1 : 1;
    });
}

//Ejercicio 18 - Return a Sorted Array Without Changing the Original Array
function nonMutatingSort(arr) {
    return [].concat(arr).sort(function(a,b) {
        return a===b ? 0 : a<b ? -1 : 1;
    });
}

//Ejercicio 19 - Split a String into an Array Using the split Method. 
function splitify(str) {
    return str.split(/\W/);
}

//Ejercicio 20 - Combine an Array into a String Using the join Method
function sentensify(str) {
    return str.split(/\W/).join(" ");
}

//Ejercicio 21 - Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
}

//Ejercicio 22 - Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    return arr.every(a => a > 0);
}

//Ejercicio 23 - Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    return arr.some(a => a > 0);
}

//Ejercicio 24 - Introduction to Currying and Partial Application
const add = x => y => z => x + y + z;

