import { getAllProducts, getAllCategories } from './products-api';
import refs from './refs';
export async function renderCategories() {
  const data = await getAllCategories();
  data.unshift('All');
  const markupCategories = data
    .map(
      item => `
<li class="categories__item">
   <button class="categories__btn" type="button">${item}</button>
 </li>
`
    )
    .join('');
  refs.ulCategories.insertAdjacentHTML('beforeend', markupCategories);
  console.log(markupCategories);
}

export async function createMarkupProducts() {
  const data = await getAllProducts();
  const markupProducts = data.products
    .map(({ title, id, brand, category, price, thumbnail }) => {
      return `
<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${brand}</p>
    <p class="products__category">Category: ${category} </p>
    <p class="products__price">Price: ${price} $</p>
 </li>  
      `;
    })
    .join('');
  refs.ulProducts.insertAdjacentHTML('beforeend', markupProducts);
}
