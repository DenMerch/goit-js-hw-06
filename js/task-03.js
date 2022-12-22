const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.marginLeft = "auto";
gallery.style.marginRight = "auto";
gallery.style.gap = "50px";
gallery.style.flexDirection = "column";

images.forEach(image => {
  const urlLink = image.url;
  const alt = image.alt;
  const item = `<li class = "gallery__item"><img class = "gallery__img" src=" ${urlLink} " alt="${alt}"></img></li>`;
  gallery.insertAdjacentHTML("beforeend", item);
});
const items = document.querySelectorAll(".gallery__item");
items.forEach(item => {
  item.style.listStyle = "none";
  item.style.width = "1300px";
})

const image = document.querySelectorAll(".gallery__img");
image.forEach(image => {
  image.style.objectFit = "contain";
  image.style.width = "1200px";
})





