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
const list = document.querySelector(".gallery");

images.forEach((image) => {
  const li = document.createElement("li");
  li.className = "gallery-item";
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.className = "gallery-img";
  li.appendChild(img);
  list.appendChild(li);
});

list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.justifyContent = "center";
list.style.listStyle = "none";
list.style.padding = "0";

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.style.margin = "15px";
  item.style.padding = "15px";
  item.style.border = "1px dotted #112244";
});

const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach((img) => {
  img.style.maxWidth = "100%";
 
});





