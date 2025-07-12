"use strict"
class UI{
    constructor(cards){
        this.cards=cards;
    }
  displayCards() {
let cartona=``;
let card=document.getElementById("cards");
this.cards.forEach(element => {
    cartona+=`
    <div class="col">
    <div class="card bg-transparent position-relative overflow-hidden " style="height:400px;"   data-id="${element.id} ">
     <div class="gray-overlay"></div> 
  <img src="${element.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title text-white d-flex justify-content-between">${element.title} <span class="badge text-bg-secondary text-center d-flex align-items-center justify-content-center">Free</span> </h5>
   <p class="card-text text-secondary">${element.short_description}</p>
  </div>
    <div class="card-footer text-body-secondary text-white  d-flex justify-content-between">
   <span class="badge text-bg-secondary">${element.genre}</span>
   <span class="badge text-bg-secondary">${element.platform}</span>
  </div>
</div> 
</div>
    `
   
   
});
card.innerHTML=cartona;
  let games=document.querySelectorAll(".card");
  let arrayGames = Array.from(games);
  arrayGames.forEach(el=>{
    el.addEventListener("click",async()=>{
    const id = el.getAttribute("data-id").trim();
     location.href = `details.html?id=${id}`;

    })
  })
          }

  
}

export default UI;