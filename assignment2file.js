/*Huilin Zou
Assignment 2
*/
let arr = [2, 5, 2, 6, 2];

const myEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

const callback = (val) => {
  console.log(val);
};
myEach(arr, callback1);
/////////////////////////////////////////////////

function myMap(arr, callback1) {
  for (let i = 0; i < arr.length; i++) {
    callback1(arr[i]);
  }
}

function callback1(num) {
  console.log(num * 2);
}
myMap(arr, callback1);

/////////////////////////////////////////////////
const myFilter = (arr, callback2) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback2(arr[i])) console.log(arr[i]);
  }
};

function callback2(word) {
  return word.length < 4;
}
myFilter(arr, callback2);

//////////////////////////////////////

function mySome(arr, callback3) {
  for (let i = 0; i < arr.length; i++) {
    if (callback3(arr[i])) {
      return true;
    }
    return false;
  }
}

function callback3(num) {
  return num % 2 === 0;
}
console.log(mySome(arr, callback3));

//////////////////////////////////////

function myEvery(arr, callback4) {
  for (let i = 0; i < arr.length; i++) if (!callback4(arr[i])) return false;
  return true;
}

function callback4(num) {
  return num % 2 == 0;
}
console.log(myEvery(arr, callback4));

//////////////////////////////////////

let sum = 0;

function myReduce(arr, callback5) {
  for (let i = 0; i < arr.length; i++) {
    sum += callback5(arr[i]);
  }
  return sum;
}
function callback5(num) {
  return num;
}
console.log(myReduce(arr, callback5));
//////////////////////////////////////
function myIncudes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(myIncudes(arr, 7));
//////////////////////////////////////
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return false;
}

console.log(myIncudes(arr, 3));
//////////////////////////////////////

function myPush(arr, target) {
  return arr.concat(target).length;
}

console.log(myPush(arr, 7));

//////////////////////////////////////
function myLastIndexOf(arr, target) {
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] == target) return true;
  }
  return false;
}

console.log(myLastIndexOf(arr, 77));

//////////////////////////////////////

function grabKeys(obj) {
  let keyObeject = [];
  for (let i in obj) keyObeject.push(i);
  return keyObeject;
}
let obj = { name: "eileen", age: 25, color: "green" };
console.log(grabKeys(obj));

function grabValues(obj) {
  let values = [];
  for (item in obj)
    if (typeof item != "Function") {
      values.push(obj[item]);
    }

  return values;
}
console.log(grabValues(obj));
