import data from "./data.js";
const container = document.getElementById("container");

const user01 = JSON.parse(data);



for(let i = 0; i < user01.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card-user");
  card.innerHTML=  `
     <img src=${user01[i].picture.large} >
     <h1>${user01[i].name.first} ${user01[i].name.last} </h1>
     <p> ${user01[i].location.street.name} ${user01[i].location.street.number}</p> `,
     container.appendChild(card)
    };


// const map1 = array1.map(x => x * 2); //Array.prototype.map()
