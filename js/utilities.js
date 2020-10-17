import { deleteCard } from "./delete.js";

const itemsContainer = document.querySelector(".content__cards");

const itemTemplate = ({
  sweaterId,
  brandName,
  countryOfManufacture,
  season,
  material,
  size,
  priceInUah,
}) => `
<div class="content__card">
<img
  src="./images/sweater.jpg"
  alt="sweater"
  class="content__card__image"
/>
<div class="content__card__characteristics">
  <p class="content__card__brand">
    ${brandName}
  </p>
  <p class="content__card__country">
    ${countryOfManufacture}
  </p>
  <div class="content__card__characteristic">
    <p class="characteristic_name">
      season:
    </p>
    <p class="characteristic_value season">
      ${season}
    </p>
  </div>
  <div class="content__card__characteristic">
    <p class="characteristic_name">
      material:
    </p>
    <p class="characteristic_value">
      ${material}
    </p>
  </div>
  <div class="content__card__characteristic">
    <p class="characteristic_name">
      size:
    </p>
    <p class="characteristic_value">
      ${size}
    </p>
  </div>
  <div class="content__card__characteristic">
    <p class="characteristic_name">
      price:
    </p>
    <p class="characteristic_value price">
      ${priceInUah}
    </p>
  </div>
</div>
<div class="content__card__button">
  <button
    id="btn-edit-${sweaterId}"
    type="button"
    name="button"
    class="content__card__button-edit"
  >Edit</button>
  <button
    id="btn-remove-${sweaterId}"
    type="button"
    name="button"
    class="content__card__button-remove"
  >Remove</button>
</div>
</div>`;
const addItemToPage = ({
  sweaterId,
  brandName,
  countryOfManufacture,
  season,
  material,
  size,
  priceInUah,
}) => {
  itemsContainer.insertAdjacentHTML(
    "beforeend",
    itemTemplate({
      sweaterId,
      brandName,
      countryOfManufacture,
      season,
      material,
      size,
      priceInUah,
    })
  );
  const remove_button = document.getElementById("btn-remove-" + sweaterId);
  remove_button.addEventListener("click", () => {
    deleteCard(sweaterId);
  });
};
export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";
  for (const item of items) {
    addItemToPage(item);
  }
};
