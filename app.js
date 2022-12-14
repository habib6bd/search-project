const searchFood =() => {
// console.log('search clicked');
const searchField = document.getElementById('searchField');
const searchText = searchField.value;
searchField.value = '';
// console.log(searchText);
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
fetch(url)
.then(res => res.json())
.then(data => displaySearchResult(data?.meals))
}

const displaySearchResult = (meals) => {
// console.log(meals);


const searchResult = document.getElementById('searchResult');
meals.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
    <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
              </div>
            </div>
    `
    searchResult.appendChild(div);
})
}
