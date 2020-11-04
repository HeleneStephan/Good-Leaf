"use strict";

console.log("test");
const api = "https://trefle.io/api/v1/";
const token = "3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw";
console.log("test2");

async function gettingData() {
  console.log("test3");
  //const ediblePlant = document.querySelector("#randomEdiblePlant");
  try {
    const response = await fetch(`${api}plants?token=${token}`);
    console.log("response", response);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log("error");
  }
}

console.log("test4");

gettingData();
