let recipes = JSON.parse(localStorage.getItem("recipes"));
const recipesList = document.getElementById("recipes-list");

const createNewCard = (recipe) => {
	const card = document.createElement("article");
	card.classList.add("flex", "flex-col", "gap-8", "bg-zinc-200/30", "p-8", "rounded-xl", "shadow-lg", "justify-between", "items-center", "w-full", "recipe-card", "md:w-full", "md:h-full");
	card.setAttribute("data-id", recipe.id);
	recipesList.appendChild(card);

	const cardLink = document.createElement("a");
	cardLink.classList.add("w-full", "relative");
	cardLink.href = `./recipe.html?id=${recipe.id}`;
	card.appendChild(cardLink);

	const cardImage = document.createElement("div");
	cardImage.classList.add("w-full", "min-h-48", "max-h-56", "overflow-hidden", "flex", "items-center", "justify-center");
	const image = document.createElement("img");
	image.src = recipe.image;
	image.classList.add("object-cover", "w-full", "h-auto");
	cardLink.appendChild(cardImage);
	cardImage.appendChild(image);

	const cardContent = document.createElement("div");
	cardContent.classList.add("flex", "flex-col", "gap-4", "w-full", "py-4");
	cardLink.appendChild(cardContent);

	const cardTitle = document.createElement("div");
	cardTitle.classList.add("flex", "flex-col", "gap-2");
	cardContent.appendChild(cardTitle);

	const title = document.createElement("h2");
	title.classList.add("text-2xl", "font-bold");
	title.textContent = recipe.title;
	cardTitle.appendChild(title);

	// NOTES DE LA RECETTE
	const noteContainer = document.createElement("div");
	noteContainer.classList.add("flex", "gap-2");
	cardTitle.appendChild(noteContainer);
	const note = document.createElement("span");
	for (let i = 0; i < Math.round(recipe.notes); i++) {
		note.textContent += "⭐";
	}
	noteContainer.appendChild(note);

	// NOMBRE DE NOTES DE LA RECETTE
	const nbOfNotes = document.createElement("span");
	nbOfNotes.textContent = ` (${recipe.nbOfNotes} notes)`;
	note.insertAdjacentElement("afterend", nbOfNotes);

	const cardDescription = document.createElement("p");
	cardDescription.textContent = recipe.description;
	cardContent.appendChild(cardDescription);

	const cardPreparationTime = document.createElement("div");
	cardPreparationTime.textContent = `Temps de préparation : ${recipe.preparationTime}`;
	cardContent.appendChild(cardPreparationTime);

	const cardCookingTime = document.createElement("div");
	cardCookingTime.textContent = `Temps de cuisson : ${recipe.cookingTime}`;
	cardContent.appendChild(cardCookingTime);

	if (isAdmin()) {
		const adminButtons = document.createElement("div");
		adminButtons.classList.add("flex", "justify-end", "gap-4", "self-end");
		cardLink.insertAdjacentElement("afterend", adminButtons);

		// BOUTON EDITION DE RECETTE
		const editIcon = document.createElement("span");
		editIcon.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		editIcon.classList.add("cursor-pointer", "p-2", "bottom-0", "right-0", "text-xl", "edit-recipe");
		adminButtons.appendChild(editIcon);

		// BOUTON SUPPRESSION DE RECETTE
		const deleteIcon = document.createElement("span");
		deleteIcon.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #ff090f;"></i>';
		deleteIcon.classList.add("cursor-pointer", "p-2", "bottom-0", "right-0", "text-xl", "delete-recipe");
		adminButtons.appendChild(deleteIcon);
	}
};

const displayRecipes = (list) => {
	recipesList.innerHTML = "";
	list.forEach((recipe) => {
		createNewCard(recipe);
	});
};

displayRecipes(recipes);

// SUPPRESSION DE RECETTES
const deleteRecipe = (id) => {
	recipes = recipes.filter((recipe) => parseInt(recipe.id) !== parseInt(id));
	localStorage.setItem("recipes", JSON.stringify(recipes));
	document.getElementById("recipes-list").innerHTML = "";
	displayRecipes(recipes);
};

// RECHERCHE DE RECETTES
// Bouton recherche
const searchBar = document.getElementById("search-recipe");
const searchBtn = document.getElementById("search-btn");

const searchRecipes = (search) => {
	const filteredRecipes = recipes.filter(
		(recipe) =>
			// retourne un résultat si le titre OU la description OU les étapes contiennent la recherche
			recipe.title.toLowerCase().includes(search.toLowerCase()) || recipe.description.toLowerCase().includes(search.toLowerCase()) || recipe.steps.toLowerCase().includes(search.toLowerCase())
	);
	displayRecipes(filteredRecipes);
};

searchBtn.addEventListener("click", (event) => {
	event.preventDefault();
	if (searchBar.value === "") {
		alert("Veuillez saisir quelque chose");
	} else {
		document.getElementById("recipes-list").innerHTML = "";
		searchRecipes(searchBar.value.trim());
	}
});

// EVENT LISTENERS BOUTONS ADMIN
document.getElementById("recipes-list").addEventListener("click", (event) => {
	const target = event.target;
	const recipeCard = target.closest(".recipe-card");

	if (target.closest(".edit-recipe")) {
		const recipeIdToEdit = recipeCard.getAttribute("data-id");
		window.location.href = `./edit-recipe.html?id=${recipeIdToEdit}`;
	} else if (target.closest(".delete-recipe")) {
		const recipeIdToDelete = recipeCard.getAttribute("data-id");
		deleteRecipe(recipeIdToDelete);
	}
});
