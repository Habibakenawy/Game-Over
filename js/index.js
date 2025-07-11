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
    //   let details=new Details();
    //  let ans= await details.fetchDetails(1);
    // console.log(ans)
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
  document.getElementById("loader").classList.remove("d-none");
}

function hideLoader() {
  document.getElementById("loader").classList.add("d-none");
}
