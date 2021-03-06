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
const essentialInformations = document.createElement("DIV");
const nameAndResume = document.createElement("DIV");
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

    // principal edible plant div
    plantDiv.appendChild(essentialInformations);

    // edible plant image display
    img.src = ediblePlant.image_url;
    essentialInformations.appendChild(img);

    // nameAndResume div to display Name and Resume together in different shapes
    essentialInformations.appendChild(nameAndResume);

    // edible plant name display
    name.textContent = ediblePlant.common_name
      ? ediblePlant.common_name
      : ediblePlant.scientific_name;
    nameAndResume.appendChild(name);

    // edible plant sumary display
    const family = ediblePlant.family_common_name
      ? ediblePlant.family_common_name
      : "an unreferenced family";
    const date = ediblePlant.year;
    resume.innerHTML = `The <b>${name.textContent}</b> belongs to the <b>${family}</b>. It was described in <b>${date}</b>. `;
    nameAndResume.appendChild(resume);

    // edible plant total informations display
    plantDiv.appendChild(presentation);
    if (
      ediblePlant.synonyms ||
      name.textContent != ediblePlant.scientific_name
    ) {
      const synonyms = ediblePlant.synonyms;
      const ul = document.createElement("UL");
      ul.innerHTML += `You could find <b>${name.textContent}</b> under different synonyms:`;
      presentation.appendChild(ul);
      if (name.textContent != ediblePlant.scientific_name) {
        ul.innerHTML += `<li class="synonym">${ediblePlant.scientific_name}</li>`;
      }
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
