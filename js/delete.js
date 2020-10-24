import { renderCards } from "./get.js";
const url = "http://localhost:8080/sweaters";

export async function deleteCard(id) {
  await fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then(renderCards)
    .catch((error) => console.log(error));
}
