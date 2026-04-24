const valueOfCategories = document.querySelectorAll(`.item`);
console.log(`Numbers of categories: ${valueOfCategories.length}`);

valueOfCategories.forEach((item) => {
    console.log(`Category: ${item.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
});