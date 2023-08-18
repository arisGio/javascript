const axios = require("axios");

const fetchData = async () => {
  const data = axios.get("https://cat-fact.herokuapp.com/facts");

  console.log(data);
};

fetchData();
