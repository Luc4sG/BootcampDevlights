// Ejercicio 1 - Use an Array to Store a Collection of Data
const yourArray = ['Hola', 1, true, null, undefined];

// Ejercicio 2 - Access an Array's Contents Using Bracket Notation
const myArray = ['a', 'b', 'c', 'd'];
myArray[1] = 'Hola';

// Ejercicio 3 - Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  };

// Ejercicio 4 - Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  };

// Ejercicio 5 - Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);

// Ejercicio 6 - Add Items Using splice()
function htmlColorNames(arr) {
    arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
    };

// Ejercicio 7 - Copy Array Items Using slice()
function forecast(arr) {
    return arr.slice(2,4);
  };
  
// Ejercicio 8 - Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }

// Ejercicio 9 - Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; 
    return sentence;
  }

// Ejercicio 10 - Check For The Presence of an Element With indexOf()   
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }

// Ejercicio 11 - Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

// Ejercicio 12 - Create complex multi-dimensional arrays
let myNestedArray = [
    [['deep']],
    [[['deeper']]],
    [[[['deepest']]]]];

// Ejercicio 13 - Add Key-Value Pairs to JavaScript Objects
foods.bananas = 13
foods.grapes = 35
foods.strawberries = 27

// Ejercicio 14 - Modify an Object Nested Within an Object
userActivity.data.online = 45

// Ejercicio 15 - Access Property Names with Bracket Notation
function checkInventory(scannedItem) {
    return foods[scannedItem];
  }

// Ejercicio 16 - Use the delete Keyword to Remove Object Properties
delete foods.oranges
delete foods.plums
delete foods.strawberries

// Ejercicio 17 - Check if an Object has a Property
function isEveryoneHere(userObj) {
    if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) {
      return true;
    }
    return false;
  }
    
// Ejercicio 18 - Iterate Through the Keys of an Object with a for...in Statement
function countOnline(userObj) {
   let result = 0;
    for (let user in userObj) {
      if (userObj[user].online === true) {
        result++;
      }
    }
    return result;
}

// Ejercicio 19 - Generate an Array of All Object Keys with Object.keys()
function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }

// Ejercicio 20 - Modify an Array Stored in an Object
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }