import axios from 'axios';
export async function getAllCategories() {
  try {
    const data = await axios.get(
      'https://dummyjson.com/products/category-list'
    );
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllProducts(currentPage = 1) {
  const response = await axios(
    `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`
  );
  return response.data;
}
