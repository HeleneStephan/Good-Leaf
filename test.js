"use strist";

const fetch = require("node-fetch");

(async () => {
  const response = await fetch(
    "https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=3wvKP6EA2xFo7jZhKNyxnGg2MxOr7sXI-46HKkcTDbw"
  );
  const json = await response.json();
  console.log(json);
})();
