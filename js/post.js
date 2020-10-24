import { addItemToPage } from "./utilities.js";
const url = "http://localhost:8080/sweaters";

export const post = async (data) => {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = "./index.html";
    })
    .catch((error) => console.log(error));
};
