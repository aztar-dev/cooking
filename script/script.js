const modalRecipe = document.getElementById("modal-recipe");
const closeModalRecipe = document.getElementById("close");
const cancelBtn = document.getElementById("cancel-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.querySelector("#next-btn");
const newRecipeForm = document.getElementById("new-recipe-form");
const addIngredientBtn = document.getElementById("add-ingredient-btn");
const submitBtn = document.getElementById("submit-btn");
const ingredientsList = document.getElementById("ingredients-list");

const defineMaxID = () => {
	let maxID = localStorage.getItem("maxId") ? parseInt(localStorage.getItem("maxId")) : 0;
	baseRecipes.forEach((recipe) => {
		if (recipe.id >= maxID) {
			maxID = recipe.id;
		}
	});

	localStorage.setItem("maxID", maxID);
};

const init = () => {
	switchConnectButton();

	if (!localStorage.getItem("pageLoaded")) {
		firstLoad();
		defineMaxID();
	}
};

init();

// Ouvre la popup de création de recette
addButton.addEventListener("click", (event) => {
	event.preventDefault();
	makeVisibleFlex(modalRecipe);
});

// NAVIGATION FORMULAIRE AJOUT RECETTE (SUIVANT / PRÉCÉDENT)
let i = 1;
nextBtn.addEventListener("click", (event) => {
	event.preventDefault();
	switch (i) {
		case 1:
			makeHidden(document.getElementById("recipe-name"));
			makeHidden(document.getElementById("recipe-img"));
			makeHidden(document.getElementById("recipe-description"));
			makeVisibleFlex(document.getElementById("recipe-ingredients"));
			makeVisible(previousBtn);
			break;
		case 2:
			makeHidden(document.getElementById("recipe-ingredients"));
			makeVisibleFlex(document.getElementById("recipe-steps"));
			break;
		case 3:
			makeHidden(document.getElementById("recipe-steps"));
			makeVisibleFlex(document.getElementById("recipe-preparation-time"));
			makeVisibleFlex(document.getElementById("recipe-cooking-time"));
			makeHidden(nextBtn);
			makeVisible(submitBtn);
			break;
		default:
			break;
	}
	i++;
});

previousBtn.addEventListener("click", (event) => {
	event.preventDefault();
	switch (i) {
		case 2:
			makeHidden(document.getElementById("recipe-name"));
			makeHidden(document.getElementById("recipe-img"));
			makeHidden(document.getElementById("recipe-ingredients"));
			makeHidden(previousBtn);
			makeVisible(document.getElementById("recipe-name"));
			makeVisible(document.getElementById("recipe-img"));
			makeVisible(document.getElementById("recipe-description"));
			break;
		case 3:
			makeVisible(document.getElementById("recipe-ingredients"));
			makeHidden(document.getElementById("recipe-steps"));
			break;
		case 4:
			makeHidden(document.getElementById("recipe-preparation-time"));
			makeHidden(document.getElementById("recipe-cooking-time"));
			makeHidden(document.getElementById("submit-btn"));
			makeVisible(document.getElementById("recipe-steps"));
			makeVisible(nextBtn);
			break;

		default:
			break;
	}
	i--;
});

// Bouton annuler dans la popup de création de recette
cancelBtn.addEventListener("click", (event) => {
	event.preventDefault();
	newRecipeForm.reset();

	switch (i) {
		case 1:
			break;
		case 2:
			makeHidden(document.getElementById("recipe-name"));
			makeHidden(document.getElementById("recipe-img"));
			makeHidden(document.getElementById("recipe-ingredients"));
			makeHidden(previousBtn);
			makeVisible(document.getElementById("recipe-name"));
			makeVisible(document.getElementById("recipe-img"));
			makeVisible(document.getElementById("recipe-description"));
			ingredientIdCount = 0;
			newIngredientsList = [];
			ingredientsList.innerHTML = "";
			break;
		case 3:
			makeHidden(document.getElementById("recipe-steps"));
			makeVisible(document.getElementById("recipe-name"));
			makeVisible(document.getElementById("recipe-img"));
			makeVisible(document.getElementById("recipe-description"));
			ingredientIdCount = 0;
			newIngredientsList = [];
			ingredientsList.innerHTML = "";
			break;
		case 4:
			makeHidden(document.getElementById("recipe-preparation-time"));
			makeHidden(document.getElementById("recipe-cooking-time"));
			makeHidden(document.getElementById("submit-btn"));
			makeVisible(document.getElementById("recipe-name"));
			makeVisible(document.getElementById("recipe-img"));
			makeVisible(document.getElementById("recipe-description"));
			makeVisible(nextBtn);
			makeHidden(previousBtn);
			ingredientIdCount = 0;
			newIngredientsList = [];
			ingredientsList.innerHTML = "";
			break;

		default:
			break;
	}

	i = 1;
});

// Ferme la popup de création de recette
closeModalRecipe.addEventListener("click", (event) => {
	event.preventDefault();
	makeHidden(modalRecipe);
});

// Fermer la popup de création de recette au clic sur l'extérieur
window.onclick = (event) => {
	if (event.target == modalRecipe) {
		makeHidden(modalRecipe);
	}
};

// Fonction pour ajouter un ingrédient à la liste dans la popup de création de recette
let newIngredientsList = [];
let ingredientIdCount = 0;

const addIngredient = (ingredient, quantity, unit) => {
	const newIngredientInList = document.createElement("li");
	const uniqueId = `${ingredientIdCount++}`;
	newIngredientInList.textContent = `${ingredient} : ${quantity} ${unit}`;
	newIngredientInList.setAttribute("id", uniqueId);

	const deleteIcon = document.createElement("span");
	deleteIcon.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #ff090f;"></i>';
	deleteIcon.classList.add("cursor-pointer", "p-2");
	deleteIcon.setAttribute("id", "delete-ingredient");
	newIngredientInList.appendChild(deleteIcon);
	ingredientsList.appendChild(newIngredientInList);

	newIngredientsList.push({
		id: uniqueId,
		name: ingredient,
		quantity: quantity,
		unit: unit,
	});
};

// Event qui ajoute un ingrédient à la liste dans la popup de création de recette au clic sur le bouton

addIngredientBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const ingredient = document.getElementById("ingredients-name").value;
	const quantity = document.getElementById("ingredients-quantity").value;
	const unit = document.getElementById("ingredients-unit").value;
	if (ingredient === "") {
		alert("Veuillez renseigner un nom d'ingrédient");
	} else if (quantity === "") {
		alert("Veuillez renseigner une quantité");
	} else if (unit === "") {
		alert("Veuillez renseigner une unité de mesure");
	} else {
		addIngredient(ingredient, quantity, unit);
	}
});

// Supprime un ingrédient de la liste
ingredientsList.addEventListener("click", (event) => {
	// Vérifie si l'élément cliqué est un élément de la liste d'ingrédients, sinon on l'ignore
	if (event.target.closest("#delete-ingredient")) {
		const ingredientElement = event.target.closest("li");
		const ingredientId = ingredientElement.getAttribute("id");
		ingredientElement.remove();

		newIngredientsList = newIngredientsList.filter((ingredient) => parseInt(ingredient.id) !== parseInt(ingredientId));
	}
});

// Event qui permet de créer une nouvelle recette
newRecipeForm.addEventListener("submit", (event) => {
	let recipes = JSON.parse(localStorage.getItem("recipes"));
	let maxID = parseInt(localStorage.getItem("maxID")) + 1;
	const newRecipe = {
		id: maxID,
		title: document.getElementById("name").value,
		description: document.getElementById("description").value,
		steps: document.getElementById("steps").value,
		image: document.getElementById("img").value,
		ingredients: newIngredientsList,
		preparationTime: `${document.getElementById("preparation-time").value} ${document.getElementById("preparation-time-unit").value}`,
		cookingTime: `${document.getElementById("cooking-time").value} ${document.getElementById("cooking-time-unit").value}`,
		notes: 0,
		nbOfNotes: 0,
	};

	// Stocke la nouvelle liste de recettes
	localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
	recipes = JSON.parse(localStorage.getItem("recipes"));

	// Vide la liste des recettes
	document.getElementById("recipes-list").innerHTML = "";

	// Affiche les recettes sur la page
	displayRecipes(recipes);

	// Remise à zéro des champs du formulaire
	newRecipeForm.reset();

	// Stocke le nouveau maxID dans localStorage
	localStorage.setItem("maxID", maxID);

	// Ferme la popup de création de recette
	makeHidden(modalRecipe);
});
