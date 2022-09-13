const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '855ea0d734mshbf36e3ce34a512fp105f93jsndd216aa16782',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

// fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=${formText.value}`, options)
// //fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3", options)
// 	.then(response => response.json())
//   .then(data => console.log(data))
// 	//.then(data => data.forEach(recipe => {renderRecipe(recipe)}))
// 	.catch(err => console.error(err));



//TOGGLE BELOW


const seasons = document.querySelectorAll(".season");
seasons.forEach((season) => {season.addEventListener("click", (e) => {
    season.lastElementChild.toggleAttribute('hidden')
})});




//CLICK EVENT 

const seasonsDiv = document.querySelector("#seasons")
const produceLists = document.getElementsByClassName(".produce-list")
const produceItems = Array.from(document.getElementsByTagName("li"))
const formText = document.querySelector("#search-form-input")
const formButton = document.querySelector("#search-form")
const recipeDiv = document.getElementById("recipes")

function handleClick(e){
    formText.value = e.target.textContent
     console.log(formText.value)

     fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=${formText.value}`, options)
    //fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3", options)
	  .then(response => response.json())
    .then(data => console.log(data))
	  //.then(data => data.forEach(recipe => {renderRecipe(recipe)}))
	  .catch(err => console.error(err));
}


produceItems.forEach(listItem => {
    listItem.addEventListener('click', (e) => 
    handleClick(e))
})






function handleForm(){
    formButton.addEventListener('submit', (e) => 
    e.preventDefault())
}

function renderRecipe(){
    const recipeName = document.createElement("h4")
    const recipeImageURL = document.createElement("h6")
    const recipeDescription = document.createElement("h5")
//turned values into strings to test code, need to change back
    recipeName.textContent = "recipe.name"
    recipeImageURL.src = "recipe.thumbnail_url"
    recipeDescription.textContent = "recipe.description"

    const newRecipeCard = {
        name: recipeName,
        thumbnail_url: recipeImageURL,
        description: recipeDescription
    }

    recipeDiv.append(newRecipeCard)

    console.log(newRecipeCard)
}

renderRecipe()

// RECIPE RETURNS

// let newRecipe = ''

// let newRecipeCard = {
//     name: "",
//     thumbnail_url: "",
//     description: ""
// }