import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const o={ulCategories:document.querySelector(".categories"),ulProducts:document.querySelector(".products"),buttonLoadMore:document.querySelector(".load-more-btn")};async function d(){try{return(await r.get("https://dummyjson.com/products/category-list")).data}catch(t){console.log(t.message)}}async function p(t=1){return(await r(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}async function c(){const t=await d();t.unshift("All");const s=t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("");o.ulCategories.insertAdjacentHTML("beforeend",s),console.log(s)}async function g(){const s=(await p()).products.map(({title:e,id:a,brand:n,category:i,price:l,thumbnail:u})=>`
<li class="products__item" data-id="${a}">
    <img class="products__image" src="${u}" alt="${e}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${n}</p>
    <p class="products__category">Category: ${i} </p>
    <p class="products__price">Price: ${l} $</p>
 </li>  
      `).join("");o.ulProducts.insertAdjacentHTML("beforeend",s)}c();g();o.ulCategories.addEventListener("click",_);function _(t){if(!t.target.classList.contains("categories__btn"))return;const s=t.target.textContent;t.currentTarget.querySelectorAll(".categories__btn").forEach(a=>{a.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active"),s==="All"&&c()}
//# sourceMappingURL=index.js.map
