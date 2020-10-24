import { post } from "./post.js";
const create_form = document.getElementById("form");
const inputs = document.querySelectorAll(".create__form__fields__input");
const brand = document.getElementById("brand");
const country = document.getElementById("country");
const season = document.getElementById("season");
const material = document.getElementById("material");
const size = document.getElementById("size");
const price = document.getElementById("price");

let fields = [brand, country, season, material, size, price];

create_form != null &&
  create_form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (validatedData(fields)) {
      let sweater = generateSweater();
      await post(sweater);
    }
  });

function generateSweater() {
  return {
    season: season.value.trim().toUpperCase(),
    countryOfManufacture: country.value.trim(),
    brandName: brand.value.trim(),
    priceInUah: parseFloat(price.value.trim()),
    material: material.value.trim(),
    size: parseInt(size.value.trim()),
  };
}

export function validatedData(array) {
  let countEmptyFields = 0;
  array.forEach((input) => {
    if (input.value === "") {
      input.previousElementSibling.style.display = "block";
      input.style.borderColor = "red";
      countEmptyFields++;
    }
  });
  if (countEmptyFields > 0) {
    removeError();
    return false;
  }
  return true;
}

function removeError() {
  fields.forEach((input) => {
    input.addEventListener("focus", () => {
      input.previousElementSibling.style.display = "none";
      input.style.borderColor = "#c7997f";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
    });
  });
}
