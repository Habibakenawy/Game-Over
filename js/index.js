//main page
"use strict"
import Home from "./games.js"
import UI from "./ui.js"
import Details from "./details.js"

document.addEventListener("DOMContentLoaded", () => {
  let links = document.querySelectorAll(".link");
  let arrayLinks = Array.from(links);
  let categories = [
    "mmorpg",
    "shooter",
    "sailing",
    "permadeath",
    "superhero",
    "pixel"
  ];

  arrayLinks.forEach((el, index) =>
    el.addEventListener("click", async (event) => {
      event.preventDefault();
      arrayLinks.forEach(link => link.classList.remove("active"));
      const category = categories[index];
      showLoader()
      let fetch_link = new Home();
      let cards = await fetch_link.fetchCards(category);
      hideLoader()
      let Cards = new UI(cards);
      Cards.displayCards();
  
    

    })
  );




  (async function loadInitialCategory() {
    const defaultCategory = "mmorpg";
    showLoader();
    let fetch_link = new Home();
    let cards = await fetch_link.fetchCards(defaultCategory);
    hideLoader();
    let Cards = new UI(cards);
    Cards.displayCards();
   arrayLinks.forEach(link => link.classList.remove("active"));
   arrayLinks[0].classList.add("active");
  })();
});


function showLoader() {
 const loader= document.getElementById("loader")
    if (loader) loader.classList.remove("d-none");

}

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("d-none");
}
