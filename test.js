"use strist";
/*
const fetch = require("node-fetch");

(async () => {
  const response = await fetch(
    "https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw"
  );
  const json = await response.json();
  console.log(json);
})();

*/
//const fetch = require("node-fetch");

// The parameters for our POST request
const params = {
  //  origin: "YOUR-WEBSITE-URL",
  //  ip: "THE-WEBSITE-USER-IP",
  token: "3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw",
}(async () => {
  const response = await fetch("https://trefle.io/api/auth/claim", {
    method: "post",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  console.log(json);
})();

fetch("https://trefle.io/api/v1/genus?token=${token}")
  .then((response) => {
    // response data is initially encoded and we have to convert it to
    // JS object
    const pr = response.json(); // response.json() creates a promise
    return pr;
  })
  .then((data) => {
    data.forEach((obj) => {
      document.body.innerHTML = `
      <h1>IT'S FINE!</h1>
    `;
      const newEdiblePlant = obj.links.mission_patch;
    });
  })
  .catch((error) => {
    document.body.innerHTML = `
      <h1>THERE IS A PROBLEM!</h1>
    `;
  });

console.log("blabla");
