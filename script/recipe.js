switchConnectButton();

const getRecipeID = () => {
	const param = new URLSearchParams(window.location.search);
	return parseInt(param.get("id"));
};

const getRecipe = (id) => {
	const recipesList = JSON.parse(localStorage.getItem("recipes"));
	return recipesList.find((recipe) => recipe.id === id);
};

const recipe = getRecipe(getRecipeID());

console.log(recipe);

const displayRecipePreview = () => {
	// IMAGE
	const img = document.createElement("img");
	img.src = recipe.image;
	img.alt = recipe.name;
	img.classList.add("w-full", "max-h-96", "object-cover");
	document.getElementById("img-container").appendChild(img);

	// NOM DE LA RECETTE
	const name = document.createElement("h2");
	name.textContent = recipe.title;
	name.classList.add("text-2xl", "font-bold");
	document.getElementById("recipe-name").appendChild(name);

	// TEMPS DE PREPARATION
	const preparationTime = document.createElement("p");
	preparationTime.textContent = `Préparation : ${recipe.preparationTime}`;
	document.getElementById("times").appendChild(preparationTime);

	// TEMPS DE CUISSON
	const cookingTime = document.createElement("p");
	cookingTime.textContent = `Cuisson : ${recipe.cookingTime}`;
	document.getElementById("times").appendChild(cookingTime);

	// NOTES DE LA RECETTE
	const note = document.createElement("span");
	for (let i = 0; i < Math.round(recipe.notes); i++) {
		note.textContent += "⭐";
	}
	document.getElementById("ratings").appendChild(note);

	// NOMBRE DE NOTES DE LA RECETTE
	const nbOfNotes = document.createElement("span");
	nbOfNotes.textContent = ` (${recipe.nbOfNotes} notes)`;
	note.insertAdjacentElement("afterend", nbOfNotes);

	// DESCRIPTION DE LA RECETTE
	const description = document.createElement("p");
	description.textContent = recipe.description;
	document.getElementById("recipe-description").appendChild(description);
};

displayRecipePreview();

const displayIngredients = () => {
	const ingredients = recipe.ingredients;
	ingredients.forEach((ingredient) => {
		// Création du container
		const ingredientContainer = document.createElement("ul");
		ingredientContainer.classList.add("flex", "justify-between", "items-center");
		document.getElementById("ingredients-list").appendChild(ingredientContainer);

		// Création du nom de l'ingrédient
		const ingredientElementName = document.createElement("li");
		ingredientElementName.textContent = ingredient.name;

		// Création du nombre d'ingrédients
		const ingredientElementQuantity = document.createElement("li");
		ingredientElementQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
		ingredientElementQuantity.classList.add("font-semibold");

		ingredientContainer.appendChild(ingredientElementName);
		ingredientContainer.appendChild(ingredientElementQuantity);
	});
	// document.getElementById("ingredients-list").appendChild(ingredientElementName);
};

displayIngredients();

// AFFICHAGE DES ETAPES DE LA RECETTE
const displaySteps = () => {
	let steps = recipe.steps;
	steps = steps.trim(); // Supprime les espaces en début/fin de ligne
	steps = steps.replace(/\t/g, "<br>"); // Remplacement des tabulations par des sauts de ligne
	steps = steps.replace(/\n/g, "<br>"); // Remplacement des retours chariot par des sauts de ligne
	document.getElementById("recipe-steps-list").innerHTML = `${steps}`;
};

displaySteps();

// GESTION DES FAVORIS
const addRecipeToFavorites = () => {
	const recipesList = JSON.parse(localStorage.getItem("recipes"));
	recipesList.push(recipe);
	localStorage.setItem("favorite-recipes", JSON.stringify(recipesList));
	console.log(recipesList);
};

const removeRecipeFromFavorites = () => {
	const recipesList = JSON.parse(localStorage.getItem("favorite-recipes"));
	recipesList.splice(recipesList.indexOf(recipe), 1);
	localStorage.setItem("favorites recipes", JSON.stringify(recipesList));
	console.log(recipesList);
};
