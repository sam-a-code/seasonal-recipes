const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "855ea0d734mshbf36e3ce34a512fp105f93jsndd216aa16782",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const baseUrl = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=";

//TOGGLE BELOW

const seasons = document.querySelectorAll(".season");
seasons.forEach((season) => {
  season.children[0].addEventListener("click", () => {
    season.lastElementChild.toggleAttribute("hidden");
  });
});

//CLICK EVENT

const seasonsDiv = document.querySelector("#seasons");
const produceLists = document.getElementsByClassName(".produce-list");
const produceItems = Array.from(document.getElementsByTagName("li"));
const formText = document.querySelector("#search-form-input");
const formButton = document.querySelector("#search-form");
const recipeDiv = document.getElementById("recipes");

function handleClick(e) {
  formText.value = e.target.textContent;
}

produceItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => handleClick(e));
});

function getRecipes() {
  return fetch(`${baseUrl}${formText.value}`, options).then((response) =>
    response.json()
  );
}

function handleForm() {
  formButton.addEventListener("submit", (e) => {
    e.preventDefault();
    getRecipes()
      .then((recipes) => {
        recipes.results.forEach((recipe) => {
          renderRecipe(recipe);
        });
      })
      .catch((err) => console.error(err));
  });
}

handleForm();

function renderRecipe(recipe) {
  const recipeName = document.createElement("h4");
  const recipeImageURL = document.createElement("img");
  const recipeDescription = document.createElement("h5");
  const recipeLink = document.createElement("a")
  const newRecipeCard = document.createElement("div")

  recipeLink.textContent = "Recipe link"
  recipeLink.href = `tasty.co/recipe/${recipe.slug}`
  recipeName.textContent = recipe.name;
  recipeImageURL.src = recipe.thumbnail_url;
  recipeDescription.textContent = recipe.description;

    newRecipeCard.append(recipeName, recipeImageURL, recipeDescription, recipeLink)
    newRecipeCard.setAttribute('id', 'recipe-card')
    recipeImageURL.setAttribute('id', 'recipe-image')

    // newRecipeCard = {
    //   name: recipeName,
    //   thumbnail_url: recipeImageURL,
    //   description: recipeDescription,
    // }

    //  newRecipeCard.textContent = {
    //   recipeName,
    //   recipeImageURL,
    //   recipeDescription,
    //   recipeLink
    // }

  recipeDiv.append(newRecipeCard);
  console.log(recipeLink)
//   recipeDiv.append(recipeName, recipeImageURL, recipeDescription, recipeLink);

}
