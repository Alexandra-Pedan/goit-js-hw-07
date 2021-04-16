// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange() {
  span.style.fontSize = input.value + "px";
}



// const inputEl = document.getElementById("font-size-control");
// const textEl = document.getElementById("text");

// inputEl.addEventListener("input", (e) => {
//   const size = inputEl.value;
//   // console.log(size);

//   textEl.style.fontSize = size + "px";
// });