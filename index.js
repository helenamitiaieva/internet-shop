import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";async function i(){try{return(await a.get("https://dummyjson.com/products/category-list")).data}catch(t){console.log(t.message)}}async function l(t=1){return(await a(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}const e={ulCategories:document.querySelector(".categories"),ulProducts:document.querySelector(".products"),buttonLoadMore:document.querySelector(".load-more-btn")};async function p(){const t=await i();t.unshift("All");const s=t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");e.ulCategories.insertAdjacentHTML("beforeend",s),console.log(s)}async function m(){const s=(await l()).products.map(({title:o,id:r,brand:c,category:n,price:u,thumbnail:d})=>`
<li class="products__item" data-id="${r}">
    <img class="products__image" src="${d}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${c}</p>
    <p class="products__category">Category: ${n} </p>
    <p class="products__price">Price: ${u} $</p>
 </li>  
      `).join("");e.ulProducts.insertAdjacentHTML("beforeend",s)}p();m();
//# sourceMappingURL=index.js.map
