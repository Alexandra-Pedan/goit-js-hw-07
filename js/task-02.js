const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const listIngredients = document.querySelector('#ingredients');


const list = ingredients.map(ingredient => {
    const el = document.createElement('li');
    el.textContent = ingredient;
    return el;
});


listIngredients.append(...list);

