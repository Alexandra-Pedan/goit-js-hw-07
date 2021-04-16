// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('#gallery');

// const item = images.map((image) => {
//     const element = document.createElement('li').createElement('img');
//     element.src = image.url;
//     element.alt = image.alt;
//     return element;
// })

// gallery.append(...item);


const galeryEl = document.querySelector("#gallery");

galeryEl.insertAdjacentHTML("afterbegin", galleryImg());

function galleryImg() {
  return images
    .map(
      ({ url, alt }) =>
        `<li><img class="gallery_image" src="${url}" alt="${alt}"></li>`
    )
    .join("");
}

// function galleryImg() {
//   return images
//     .map(
//       ({ url, alt }) =>
//         `<li class="gallery_li" ><img class="gallery_image" src="${url}" alt="${alt}"></li>`
//     )
//     // .join("");
// }