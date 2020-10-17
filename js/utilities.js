const itemsContainer = document.querySelector(".content__cards");

const getItemId = (id) => `item-${id}`;
const itemTemplate = ({
  id,
  brandName,
  countryOfManufacture,
  season,
  material,
  size,
  priceInUah,
}) => `
<div id="${getItemId(id)}" class="content__card">
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
    type="button"
    name="button"
    class="content__card__button-edit"
  >Edit</button>
  <button
    type="button"
    name="button"
    class="content__card__button-remove"
  >Remove</button>
</div>
</div>`;

export const addItemToPage = ({
  id,
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
      id,
      brandName,
      countryOfManufacture,
      season,
      material,
      size,
      priceInUah,
    })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";
  for (const item of items) {
    addItemToPage(item);
  }
};
