"use strict";

const api = "https://trefle.io/api/v1/";
const token = "3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw";
const plantDiv = document.querySelector("#randomEdiblePlant");
let ediblePlant = {};

//html content
const name = document.createElement("H3");
const img = document.createElement("IMG");
const resume = document.createElement("P");

async function gettingData() {
  try {
    const response = await fetch(
      `${api}plants?filter_not[edible_part]=null&token=${token}`
    );
    const jsonData = (await response.json()).data;
    while (!ediblePlant.image_url) {
      ediblePlant = jsonData[Math.floor(Math.random() * jsonData.length)];
    }

    // edible plant name display
    name.textContent = ediblePlant.common_name;
    plantDiv.appendChild(name);

    // edible plant image display
    img.src = ediblePlant.image_url;
    plantDiv.appendChild(img);

    // edible plant sumary display
    resume.textContent = "blabla";
    plantDiv.appendChild(resume);

    // edible plant total informations display
  } catch (error) {
    console.log("error");
    // error name display
    name.textContent = "Plant not found";
    plantDiv.appendChild(name);

    // error image display
    img.src = "../img/error.png";
    plantDiv.appendChild(img);

    resume.textContent =
      "We are sorry, there is an error, please try again to discover a new edible plant!";
    plantDiv.appendChild(resume);

    // error sumary display

    // error informations display
  }
}

gettingData();
