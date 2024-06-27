let recipes = JSON.parse(localStorage.getItem("recipes"));
const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get("id"));

let newIngredientsList = [];
let ingredientIdCount = 0;

const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);

const addIngredient = (ingredient, quantity, unit) => {
	const ingredientsContainer = document.getElementById("edit-ingredients-list");

	const newIngredientInList = document.createElement("li");
	newIngredientInList.classList.add("flex", "gap-2", "items-center");
	newIngredientInList.textContent = `${ingredient} : ${quantity} ${unit}`;

	const uniqueId = `${ingredientIdCount++}`;
	newIngredientInList.setAttribute("id", uniqueId);

	const deleteIcon = document.createElement("span");
	deleteIcon.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #ff090f;"></i>';
	deleteIcon.classList.add("cursor-pointer", "p-2");
	deleteIcon.setAttribute("id", "delete-ingredient");
	newIngredientInList.appendChild(deleteIcon);
	ingredientsContainer.appendChild(newIngredientInList);

	newIngredientsList.push({
		id: uniqueId,
		name: ingredient,
		quantity: quantity,
		unit: unit,
	});
};

// Ajoute un ingrédient à la liste
document.getElementById("edit-add-ingredient-btn").addEventListener("click", (event) => {
	event.preventDefault();
	const ingredient = document.getElementById("edit-ingredients-name").value;
	const quantity = document.getElementById("edit-ingredients-quantity").value;
	const unit = document.getElementById("edit-ingredients-unit").value;
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
document.getElementById("edit-ingredients-list").addEventListener("click", (event) => {
	// Vérifie si l'élément cliqué est un élément de la liste d'ingrédients, sinon on l'ignore
	if (event.target.closest("#delete-ingredient")) {
		const ingredientElement = event.target.closest("li");
		const ingredientId = ingredientElement.getAttribute("id");
		ingredientElement.remove();

		newIngredientsList = newIngredientsList.filter((ingredient) => ingredient.id !== ingredientId);
	}
});

if (recipeToEdit) {
	// Préremplir les champs de formulaire avec les données de la recette
	document.getElementById("edit-name").value = recipeToEdit.title;
	document.getElementById("edit-description").value = recipeToEdit.description;
	document.getElementById("edit-img").value = recipeToEdit.image;

	recipeToEdit.ingredients.forEach((ingredient) => {
		addIngredient(ingredient.name, ingredient.quantity, ingredient.unit);
	});

	document.getElementById("edit-steps").value = recipeToEdit.steps;

	document.getElementById("edit-preparation-time").value = recipeToEdit.preparationTime.split(" ")[0];
	document.getElementById("edit-cooking-time").value = recipeToEdit.cookingTime.split(" ")[0];

	document.getElementById("edit-preparation-time-unit").value = recipeToEdit.preparationTime.split(" ")[1];
	document.getElementById("edit-cooking-time-unit").value = recipeToEdit.cookingTime.split(" ")[1];

	// Écouteur d'événement pour le formulaire d'édition
	document.getElementById("edit-form").addEventListener("submit", (event) => {
		event.preventDefault();
		// Récupérer les valeurs modifiées depuis les champs de formulaire
		const editedRecipe = {
			id: recipeToEdit.id,
			title: document.getElementById("edit-name").value,
			description: document.getElementById("edit-description").value,
			steps: document.getElementById("edit-steps").value,
			image: document.getElementById("edit-img").value,
			ingredients: newIngredientsList,
			preparationTime: `${document.getElementById("edit-preparation-time").value} ${document.getElementById("edit-preparation-time-unit").value}`,
			cookingTime: `${document.getElementById("edit-cooking-time").value} ${document.getElementById("edit-cooking-time-unit").value}`,
			notes: recipeToEdit.notes,
			nbOfNotes: recipeToEdit.nbOfNotes,
		};

		// Mettre à jour la recette dans le tableau "recipes"
		recipes = recipes.map((recipe) => (recipe.id === editedRecipe.id ? editedRecipe : recipe));

		// Mettre à jour localStorage
		localStorage.setItem("recipes", JSON.stringify(recipes));

		// Rediriger vers la page principale
		window.location.href = "../index.html";
	});
} else {
	// Gérer le cas où aucune recette correspondante n'est trouvée
	console.error("Recette non trouvée !");
}
