import { renderItemsList } from "./utilities.js";
const url = "http://localhost:8080/sweaters";
const first_page = document.getElementById("first");

export const getCards = async () => {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export async function renderCards() {
  let cards = await getCards();
  renderItemsList(cards);
}

if (first_page != null) {
  first_page.addEventListener("load", renderCards());
}
