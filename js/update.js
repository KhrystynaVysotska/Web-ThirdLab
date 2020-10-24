import { validatedData } from "./submit.js";

const url = "http://localhost:8080/sweaters";
const edit_form = document.getElementById("edit");
const edit_page = document.getElementById("edit_page");
const brand = document.getElementById("brand");
const country = document.getElementById("country");
const season = document.getElementById("season");
const material = document.getElementById("material");
const size = document.getElementById("size");
const price = document.getElementById("price");

let fields = [brand, country, season, material, size, price];

edit_form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let id = getId();
  if (validatedData(fields)) {
    let updatedObject = generateUpdatedObject();
    let response = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(updatedObject),
    })
      .then(() => {
        window.location.href = "./index.html";
      })
      .catch((error) => console.log(error));
  }
});

function generateUpdatedObject() {
  return {
    season: season.value.trim().toUpperCase(),
    countryOfManufacture: country.value.trim(),
    brandName: brand.value.trim(),
    priceInUah: parseFloat(price.value.trim()),
    material: material.value.trim(),
    size: parseInt(size.value.trim()),
  };
}
async function renderCurrentObjectData() {
  let element = await getCurrentObject();
  brand.value = element.brandName;
  country.value = element.countryOfManufacture;
  season.value = element.season.toString().toLowerCase();
  material.value = element.material;
  size.value = element.size;
  price.value = element.priceInUah;
}

async function getCurrentObject() {
  try {
    let response = await fetch(url + "/" + getId());
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
function getId() {
  let query_string = window.location.search;
  let params = new URLSearchParams(query_string);
  let id = params.get("id");
  return id;
}

renderCurrentObjectData();
