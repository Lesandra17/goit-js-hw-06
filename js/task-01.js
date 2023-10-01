const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  
 
});
