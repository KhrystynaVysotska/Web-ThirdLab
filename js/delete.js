import { renderCards } from "./get.js";
const url = "http://localhost:8080/sweaters";

export async function deleteCard(id) {
  await fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then((res) => console.log(res.status))
    .catch((error) => console.log(error));
}
