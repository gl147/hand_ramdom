let dealButton = document.querySelector(".generate_button");
let fcsuit = document.querySelector(".fcsuit");
let fcrange = document.querySelector(".fcrange");
let scsuit = document.querySelector(".scsuit");
let scrange = document.querySelector(".scrange");
let first_card = document.querySelector(".first_card");
let second_card = document.querySelector(".second_card");

dealButton.addEventListener("click", (e) => {
  let responce = generate_hand();
  console.log(responce);
  fcrange.innerHTML = responce[0];
  switch (responce[1]) {
    case "h":
      fcsuit.innerHTML = "&#9825";
      first_card.style.backgroundColor = "rgb(241, 98, 62)";
      break;
    case "s":
      fcsuit.innerHTML = "&#9828";
      first_card.style.backgroundColor = "rgb(73, 70, 70)";
      break;
    case "d":
      fcsuit.innerHTML = "&#9826";
      first_card.style.backgroundColor = "rgb(79, 45, 226)";
      break;
    case "c":
      fcsuit.innerHTML = "&#9831";
      first_card.style.backgroundColor = "rgb(82, 230, 109)";
      break;
  }
  scrange.innerHTML = responce[3];
  switch (responce[4]) {
    case "h":
      scsuit.innerHTML = "&#9825";
      second_card.style.backgroundColor = "rgb(241, 98, 62)";
      break;
    case "s":
      scsuit.innerHTML = "&#9828";
      second_card.style.backgroundColor = "rgb(73, 70, 70)";
      break;
    case "d":
      scsuit.innerHTML = "&#9826";
      second_card.style.backgroundColor = "rgb(79, 45, 226)";
      break;
    case "c":
      scsuit.innerHTML = "&#9831";
      second_card.style.backgroundColor = "rgb(82, 230, 109)";
      break;
  }
});

const cards = {
  c: ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
  s: ["s", "d", "c", "h"],
};

let generate_rang = () => {
  return Math.floor(Math.random() * 13);
};

let generate_suit = () => {
  return Math.floor(Math.random() * 4);
};

let generate_card = () => {
  return cards.c[generate_rang()] + cards.s[generate_suit()];
};

let generate_hand = () => {
  let result = "";
  let card1 = generate_card();
  let card2 = generate_card();
  if (card1 === card2) {
    console.log(card1 + " " + card2 + " got it!!!");
    card2 = generate_card();
  }
  result = card1 + " " + card2;
  return result;
};
