// const first = list[0];
const main = document.querySelector("main");

const createCard = (obj, indx) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.id = indx;

  const face = document.createElement("img");
  face.src = obj.picture.large;
  face.alt = "Portrait";

  const text = document.createElement("div")
  const title = document.createElement("p");
  title.className = "personName";
  title.innerText = "Name:" + " " +obj.name.title + " " + obj.name.first + " " +obj.name.last;
  
  const location = document.createElement("p");
  location.className ="location";
  location.innerText = "Location: "+obj.location.street +", "+obj.location.city +", "+obj.location.state;
  
//  const timezone = document.createElement("p")
//  timezone.className = "timezone";
//  timezone.innerText = "Timezone:" + " " + obj.timezone.description;

//  newCard.appendChild(timezone);
  newCard.appendChild(title);
  newCard.appendChild(location);
  newCard.appendChild(face);
  main.appendChild(newCard);
  
};

// createCard(first);
const loopCreate = arr => {
  for (let i = 0; i < arr.length; i++) createCard(arr[i], i);
};

loopCreate(list);
