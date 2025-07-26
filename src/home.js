//Логіка сторінки Home
import axios from "axios";

const ulCategories  = document.querySelector('.categories');
const ulProducts = document.querySelector('.products');
const buttonLoadMore = document.querySelector('.load-more-btn');

async function getAllCategories() {
    try {
        const data = await axios.get('https://dummyjson.com/products/category-list');
        return data.data;
    } catch(error) {
        console.log(error.message);
    }
}

async function renderCategories() {
 const data = await getAllCategories();
data.unshift('All');
const markupCategories = data.map((item) => `
<li class="categories__item">
   <button class="categories__btn" type="button">${item}</button>
 </li>
`).join('');
ulCategories.insertAdjacentHTML('beforeend', markupCategories);
console.log(markupCategories);
}

renderCategories();


