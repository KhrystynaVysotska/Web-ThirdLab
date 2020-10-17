import {renderItemsList} from './utilities.js';
import {getCards} from './get.js'

let checkbox = document.querySelector("input[name=checkbox]");
const count_button = document.querySelector(
  ".content__management__count__button"
);
let total_sum = document.querySelector(".content__management__count-number");
const clear_input = document.querySelector(".header__button-clear");
const search_for_input = document.querySelector(".header__button-search");
const input = document.querySelector(".header__input");

let cards_original_array = [];
let cards_sorted_array = [];
let cards_filtered_array = [];

clear_input.addEventListener("click", () => {
  input.value = "";
  cards_filtered_array = [];
  renderItemsList(cards_original_array);
});
search_for_input.addEventListener("click", () => {
  cards_filtered_array = cards_original_array.filter((el) =>
    el.brandName.includes(input.value)
  );
  renderItemsList(cards_filtered_array);
});

function comparator(first_element, second_element) {
  return first_element.priceInUah - second_element.priceInUah;
}
checkbox.addEventListener("change", async function () {
  if (input.value != "") {
    if (this.checked) {
      let cards_filtered_sorted_array = cards_filtered_array.slice();
      cards_filtered_sorted_array.sort(comparator);
      renderItemsList(cards_filtered_sorted_array);
    } else {
      renderItemsList(cards_filtered_array);
    }
  } else {
    if (this.checked) {
      cards_sorted_array.sort(comparator);
      renderItemsList(cards_sorted_array);
    } else {
      renderItemsList(cards_original_array);
    }
  }
});

count_button.addEventListener("click", () => {
  total_sum.innerHTML = "";
  let sum = 0;
  if (input.value != "") {
    cards_filtered_array.map((el) => {
      sum += el.priceInUah;
    });
  } else {
    cards_original_array.map((el) => {
      sum += el.priceInUah;
    });
  }
  total_sum.innerHTML = sum;
});
const count_total_price = async () => {
  let cards_container = await getCards();
  cards_original_array = Array.from(cards_container);
  cards_sorted_array = cards_original_array.slice();
  let sum = 0;
  cards_original_array.map((el) => {
    sum += el.priceInUah;
  });
  total_sum.innerHTML = sum;
};

count_total_price();
