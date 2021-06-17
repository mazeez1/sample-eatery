// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ky Kiske",
    job: "Food Critic",
    img:"./images/critic-1.jpg",
    text:
      "What a lovely establishment!",
  },
  {
    id: 2,
    name: "Chipp Zanuff",
    job: "Best Chef 2011 Winner",
    img:"./images/critic-2.jpg",
    text:
      "Great authentic food!",
  },
  {
    id: 3,
    name: "Giovanna",
    job: "Food Critic",
    img:
      "./images/critic-3.jpg",
    text:
      "Best spot in the area and great for the price!",
  },
  {
    id: 4,
    name: "Milia Rage",
    job: "Food blogger",
    img:
      "./images/critic-4.jpg",
    text:
      "Masterpiece! ",
  },

  {
    id: 5,
    name: "Ram",
    job: "Professional Chef",
    img:
      "./images/critic-5.jpg",
    text:
      "Absolutely amazing stuff!! ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
