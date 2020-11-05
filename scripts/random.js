"use strict";

// get API data
const api = "https://trefle.io/api/v1/";
const token = "3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw";
const plantDiv = document.querySelector("#randomEdiblePlant");
let ediblePlant = {};

// create html content
const name = document.createElement("H3");
const img = document.createElement("IMG");
const resume = document.createElement("P");
const presentation = document.createElement("DIV");

async function gettingData() {
  ediblePlant = {};
  presentation.innerHTML = "";
  resume.innerHTML = "";
  try {
    const response = await fetch(
      `${api}plants?filter_not[edible_part]=null&token=${token}`
    );
    const jsonData = (await response.json()).data;
    while (!ediblePlant.image_url) {
      ediblePlant = jsonData[Math.floor(Math.random() * jsonData.length)];
    }
    console.log(ediblePlant);

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
    plantDiv.appendChild(presentation);
    if (ediblePlant.synonyms) {
      const synonyms = ediblePlant.synonyms;
      console.log("here");
      const ul = document.createElement("UL");
      ul.innerHTML += `You could find <b>${name.textContent}</b> under different synonyms:`;
      presentation.appendChild(ul);
      console.log("there");
      console.log("synonyms", synonyms);
      console.log("synonyms.length", synonyms.length);
      console.log("synonyms[0]", synonyms[0]);
      synonyms.forEach((el) => {
        ul.innerHTML += `<li class="synonym">${el}</li>`;
      });
    }
  } catch (error) {
    console.log("error");
    // error name display
    name.textContent = "Plant not found";
    plantDiv.appendChild(name);

    // error image display
    img.src = "../img/green.png";
    plantDiv.appendChild(img);

    resume.textContent =
      "We are sorry, there is an error, please try again to discover a new edible plant!";
    plantDiv.appendChild(resume);

    // error sumary display

    // error informations display
  }
}

gettingData();

const edibleBtn = document.querySelector("#ediblePlantBtn");
edibleBtn.addEventListener("click", gettingData);
