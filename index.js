import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const r=document.querySelector(".categories");document.querySelector(".products");document.querySelector(".load-more-btn");async function s(){try{return(await a.get("https://dummyjson.com/products/category-list")).data}catch(t){console.log(t.message)}}async function c(){const t=await s();t.unshift("All");const e=t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");r.insertAdjacentHTML("beforeend",e),console.log(e)}c();
//# sourceMappingURL=index.js.map
