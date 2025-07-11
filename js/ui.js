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
    <div class="card bg-transparent position-relative overflow-hidden " style="height:400px;" onclick="AddtoLocalStorage(${element.id})">
     <div class="gray-overlay"></div> 
  <img src="${element.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title text-white d-flex justify-content-between">${element.title} <span class="badge text-bg-secondary">Free</span> </h5>
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
          }
AddtoLocalStorage(id){
localStorage.setItem("ID",JSON.stringify(id));
}
   displayDetails(){

//  <div class="row text-white">
//     <div class="col">
//    <h5>Details Game</h5>
//    <img src="" alt="">
//     </div>
//     <div class="col">
//         <button type="button" class="btn-close position-relative start-100" aria-label="Close"></button>
//          <h5>Title: <span class="badge text-bg-info">Info</span></h5> 
//          <h6>Category: <span class="badge text-bg-info">Info</span></h6>
//          <h6>Platform: <span class="badge text-bg-info">Info</span></h6>
//          <h6>Status: <span class="badge text-bg-info">Info</span></h6>
//          <p>details <span class="badge text-bg-info">Info</span></p>
//          <button type="button" class="btn btn-outline-warning">Show Game</button>

//     </div>
// </div>
     }
}

export default UI;