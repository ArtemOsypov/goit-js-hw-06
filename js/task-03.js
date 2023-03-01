const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galaryEl = document.querySelector(".gallery");

const galaryItemEl = images.map((image) => {
  const imgListEl = document.createElement("li");
  imgListEl.classList = "galary-item";
  // imgListEl.style.listStyle = "none";
  const imgEl = document.createElement("img");
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 200;
  imgListEl.append(imgEl);
  console.log(imgListEl);
  return imgListEl;
});

console.log(galaryItemEl);
galaryEl.append(...galaryItemEl);
