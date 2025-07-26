import refs from './js/refs';//Логіка сторінки Home

import { createMarkupProducts, renderCategories } from './js/render-function';

renderCategories();
createMarkupProducts();

refs.ulCategories.addEventListener("click", onCategoriesBtn);

function onCategoriesBtn(event) {
  if (!event.target.classList.contains("categories__btn")) {
    return
  }
  const category = event.target.textContent;

  const allBtn = event.currentTarget.querySelectorAll('.categories__btn');

  allBtn.forEach((btn) => {
    btn.classList.remove('categories__btn--active')
  }
  )

  event.target.classList.add('categories__btn--active');

  if (category === "All") {
    renderCategories();
  } else {

    
  }


}




