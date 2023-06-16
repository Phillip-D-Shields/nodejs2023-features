import fetch from "node-fetch";

async function fetchData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.dir(data);
    console.log(data.slip.advice);
    console.table(data.slip);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
