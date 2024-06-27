let baseRecipes = [
	{
		id: 1,
		title: "Spaghetti Bolognaise",
		description: "Un plat classique et savoureux de pâtes à la sauce tomate et viande hachée.",
		steps: `Étape 1 : Faire cuire les pâtes selon les instructions sur l'emballage. Égoutter et réserver. 

Étape 2 : Dans une poêle, faire revenir de la viande hachée avec de l'oignon et de l'ail jusqu'à ce qu'elle soit bien dorée. Ajouter de la sauce tomate et laisser mijoter. 

Étape 3 : Servir les pâtes avec la sauce bolognaise, saupoudrer de parmesan râpé.`,
		image: "https://i0.wp.com/www.programme-malin.com/wp-content/uploads/2020/09/P%C3%A2tes-%C3%A0-la-bolognaise.jpg?fit=1920%2C1080&ssl=1",
		ingredients: [
			{ id: 0, name: "Spaghetti", quantity: "300", unit: "g" },
			{ id: 1, name: "Viande hachée", quantity: "300", unit: "g" },
			{ id: 2, name: "Oignon", quantity: "1", unit: "pièces" },
			{ id: 3, name: "Ail", quantity: "2", unit: "g" },
			{ id: 4, name: "Sauce tomate", quantity: "400", unit: "mL" },
			{ id: 5, name: "Parmesan râpé", quantity: "50", unit: "g" },
		],
		preparationTime: "15 min",
		cookingTime: "30 min",
		notes: 4,
		nbOfNotes: 27,
	},
	{
		id: 2,
		title: "Salade César",
		description: "Une salade fraîche et croquante avec une vinaigrette crémeuse.",
		steps: `Étape 1 : Préparer la vinaigrette en mélangeant de la moutarde, du jus de citron, de l'ail, du parmesan, du sel et du poivre. 
        
        Étape 2 : Couper la laitue romaine en morceaux, ajouter des croûtons et du poulet grillé. 
        
        Étape 3 : Verser la vinaigrette sur la salade et mélanger délicatement.`,
		image: "https://img.cuisineaz.com/1280x720/2018/02/10/i135580-salade-cesar-allegee.jpeg",
		ingredients: [
			{ id: 0, name: "Laitue romaine", quantity: "1", unit: "pièces" },
			{ id: 1, name: "Croûtons", quantity: "50", unit: "g" },
			{ id: 2, name: "Poulet grillé", quantity: "200", unit: "g" },
			{ id: 3, name: "Moutarde", quantity: "1", unit: "c. à soupe" },
			{ id: 4, name: "Jus de citron", quantity: "2", unit: "c. à soupe" },
			{ id: 5, name: "Ail", quantity: "1", unit: "g" },
			{ id: 6, name: "Parmesan râpé", quantity: "30", unit: "g" },
		],
		preparationTime: "15 min",
		cookingTime: "0 min",
		notes: 4.5,
		nbOfNotes: 32,
	},
	{
		id: 3,
		title: "Poulet rôti aux herbes",
		description: "Un plat principal simple mais délicieux avec des saveurs d'herbes fraîches.",
		steps: `Étape 1 : Préchauffer le four. Assaisonner le poulet avec du sel, du poivre, et des herbes fraîches comme le romarin et le thym. 
        
        Étape 2 : Faire rôtir le poulet au four jusqu'à ce qu'il soit doré et bien cuit. 
        
        Étape 3 : Servir avec des légumes rôtis ou une salade verte.`,
		image: "https://maxi.cdnartwhere.eu/wp-content/uploads/recipe/2015-10/poulet-roti-aux-herbes-1000x720-963x542-c-default.jpg?ck=37a6259cc0c1dae299a7866489dff0bd",
		ingredients: [
			{ id: 0, name: "Poulet entier", quantity: "1", unit: "pièces" },
			{ id: 1, name: "Sel", quantity: "5", unit: "g" },
			{ id: 2, name: "Poivre", quantity: "2", unit: "g" },
			{ id: 3, name: "Herbes fraîches (romarin, thym)", quantity: "10", unit: "g" },
		],
		preparationTime: "10 min",
		cookingTime: "60 min",
		notes: 4,
		nbOfNotes: 18,
	},
	{
		id: 4,
		title: "Tarte aux pommes",
		description: "Un dessert classique et réconfortant avec une pâte croustillante et des pommes fondantes.",
		steps: `Étape 1 : Préparer la pâte en mélangeant de la farine, du beurre et de l'eau. Étaler la pâte dans un moule à tarte. 
        
        Étape 2 : Peler et couper les pommes en tranches fines. Disposer les pommes sur la pâte. Saupoudrer de sucre et de cannelle. 
        
        Étape 3 : Cuire au four jusqu'à ce que la croûte soit dorée et les pommes tendres.`,
		image: "https://img.cuisineaz.com/660x660/2015/06/02/i87327-recete-tarte-pommes-a-l-ancienne.jpg",
		ingredients: [
			{ id: 0, name: "Pâte brisée", quantity: "1", unit: "pièces" },
			{ id: 1, name: "Pommes", quantity: "4", unit: "pièces" },
			{ id: 2, name: "Sucre", quantity: "50", unit: "g" },
			{ id: 3, name: "Cannelle", quantity: "2", unit: "g" },
		],
		preparationTime: "20 min",
		cookingTime: "40 min",
		notes: 4.5,
		nbOfNotes: 45,
	},
	{
		id: 5,
		title: "Soupe à l'oignon gratinée",
		description: "Une soupe chaude et savoureuse, garnie de fromage fondu et de croûtons croustillants.",
		steps: `Étape 1 : Faire fondre le beurre dans une casserole et faire cuire les oignons jusqu'à ce qu'ils soient dorés. 
        
        Étape 2 : Ajouter le bouillon de poulet et laisser mijoter. Assaisonner avec du sel, du poivre et du thym. 
        
        Étape 3 : Verser la soupe dans des bols individuels, garnir de croûtons et de fromage râpé. Faire gratiner au four jusqu'à ce que le fromage soit doré.`,
		image: "https://img-3.journaldesfemmes.fr/DPVAofXWKpNK-StT_-IEqffOOYY=/750x500/9156772aea654e56bd0fe1c71e47c362/ccmcms-jdf/39918439.jpg",
		ingredients: [
			{ id: 0, name: "Oignons", quantity: "4", unit: "pièces" },
			{ id: 1, name: "Beurre", quantity: "30", unit: "g" },
			{ id: 2, name: "Bouillon de poulet", quantity: "1", unit: "L" },
			{ id: 3, name: "Croûtons", quantity: "50", unit: "g" },
			{ id: 4, name: "Fromage râpé", quantity: "50", unit: "g" },
			{ id: 5, name: "Thym", quantity: "5", unit: "g" },
		],
		preparationTime: "15 min",
		cookingTime: "45 min",
		notes: 4,
		nbOfNotes: 38,
	},
	{
		id: 6,
		title: "Risotto aux champignons",
		description: "Un plat crémeux et réconfortant à base de riz Arborio et de champignons.",
		steps: `Étape 1 : Faire revenir les champignons avec de l'ail et du beurre jusqu'à ce qu'ils soient dorés. 
        
        Étape 2 : Ajouter le riz Arborio et faire cuire jusqu'à ce qu'il devienne translucide. Ajouter progressivement du bouillon de légumes chaud, en remuant souvent. 
        
        Étape 3 : Incorporer du parmesan râpé et du persil frais avant de servir.`,
		image: "https://images.ricardocuisine.com/services/recipes/8723-v2.jpg",
		ingredients: [
			{ id: 0, name: "Riz Arborio", quantity: "300", unit: "g" },
			{ id: 1, name: "Champignons", quantity: "200", unit: "g" },
			{ id: 2, name: "Ail", quantity: "2", unit: "g" },
			{ id: 3, name: "Beurre", quantity: "30", unit: "g" },
			{ id: 4, name: "Bouillon de légumes", quantity: "1", unit: "L" },
			{ id: 5, name: "Parmesan râpé", quantity: "50", unit: "g" },
			{ id: 6, name: "Persil frais", quantity: "10", unit: "g" },
		],
		preparationTime: "15 min",
		cookingTime: "30 min",
		notes: 4.5,
		nbOfNotes: 55,
	},
	{
		id: 7,
		title: "Pancakes",
		description: "Des pancakes moelleux et délicieux pour un petit-déjeuner parfait.",
		steps: `Étape 1 : Mélanger la farine, le sucre, la levure chimique et le sel dans un bol. 
        
        Étape 2 : Ajouter le lait, l'œuf et le beurre fondu. Mélanger jusqu'à obtenir une pâte lisse. 
        
        Étape 3 : Faire cuire les pancakes dans une poêle chaude jusqu'à ce qu'ils soient dorés des deux côtés.`,
		image: "https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.8890503582601677xw:1xh;center,top&resize=1200:*",
		ingredients: [
			{ id: 0, name: "Farine", quantity: "150", unit: "g" },
			{ id: 1, name: "Sucre", quantity: "30", unit: "g" },
			{ id: 2, name: "Levure chimique", quantity: "8", unit: "g" },
			{ id: 3, name: "Sel", quantity: "2", unit: "g" },
			{ id: 4, name: "Lait", quantity: "200", unit: "mL" },
			{ id: 5, name: "Œuf", quantity: "1", unit: "pièces" },
			{ id: 6, name: "Beurre fondu", quantity: "30", unit: "g" },
		],
		preparationTime: "10 min",
		cookingTime: "15 min",
		notes: 4.5,
		nbOfNotes: 62,
	},
	{
		id: 8,
		title: "Tacos au poulet",
		description: "Des tacos mexicains garnis de poulet mariné et de légumes frais.",
		steps: `Étape 1 : Faire mariner le poulet dans du jus de lime, du paprika, de l'ail et du cumin. 
        
        Étape 2 : Cuire le poulet mariné jusqu'à ce qu'il soit bien cuit. Couper en morceaux. 
        
        Étape 3 : Garnir les tortillas avec le poulet cuit, la laitue, les tomates, l'avocat et la coriandre.`,
		image: "https://www.healthyfoodcreation.fr/wp-content/uploads/2023/05/TACOS-1.jpg",
		ingredients: [
			{ id: 0, name: "Filet de poulet", quantity: "300", unit: "g" },
			{ id: 1, name: "Jus de lime", quantity: "30", unit: "mL" },
			{ id: 2, name: "Paprika", quantity: "5", unit: "g" },
			{ id: 3, name: "Ail", quantity: "2", unit: "g" },
			{ id: 4, name: "Cumin", quantity: "3", unit: "g" },
			{ id: 5, name: "Tortillas", quantity: "4", unit: "pièces" },
			{ id: 6, name: "Laitue", quantity: "50", unit: "g" },
			{ id: 7, name: "Tomates", quantity: "2", unit: "pièces" },
			{ id: 8, name: "Avocat", quantity: "1", unit: "pièces" },
			{ id: 9, name: "Coriandre", quantity: "10", unit: "g" },
		],
		preparationTime: "20 min",
		cookingTime: "15 min",
		notes: 4.5,
		nbOfNotes: 53,
	},
	{
		id: 9,
		title: "Ratatouille",
		description: "Un plat végétarien méditerranéen coloré et savoureux.",
		steps: `Étape 1 : Faire revenir les oignons et l'ail dans de l'huile d'olive. 
        
        Étape 2 : Ajouter les aubergines, les courgettes, les poivrons et les tomates. Laisser mijoter jusqu'à ce que les légumes soient tendres. 
        
        Étape 3 : Assaisonner avec du sel, du poivre, du thym et du basilic frais.`,
		image: "https://dxpulwm6xta2f.cloudfront.net/eyJidWNrZXQiOiJhZGMtZGV2LWltYWdlcy1yZWNpcGVzIiwia2V5IjoiUkVQX2x2XzEzNDU2X3JhdGF0b3VpbGxlX3RvbWF0ZV9wb2l2cm9uX2F1YmVyZ2luZV9jb3VyZ2V0dGUuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo4MH0sInBuZyI6eyJxdWFsaXR5Ijo4MH0sIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=",
		ingredients: [
			{ id: 0, name: "Aubergine", quantity: "1", unit: "pièces" },
			{ id: 1, name: "Courgette", quantity: "1", unit: "pièces" },
			{ id: 2, name: "Poivron rouge", quantity: "1", unit: "pièces" },
			{ id: 3, name: "Tomates", quantity: "2", unit: "pièces" },
			{ id: 4, name: "Oignon", quantity: "1", unit: "pièces" },
			{ id: 5, name: "Ail", quantity: "2", unit: "g" },
			{ id: 6, name: "Huile d'olive", quantity: "30", unit: "mL" },
			{ id: 7, name: "Thym frais", quantity: "5", unit: "g" },
			{ id: 8, name: "Basilic frais", quantity: "10", unit: "g" },
		],
		preparationTime: "15 min",
		cookingTime: "30 min",
		notes: 4,
		nbOfNotes: 41,
	},
	{
		id: 10,
		title: "Sushi",
		description: "Des sushis frais et savoureux, parfaits pour une soirée sushi maison.",
		steps: `Étape 1 : Cuire le riz à sushi selon les instructions. 
        
        Étape 2 : Préparer les garnitures comme le saumon cru, le thon, l'avocat et les concombres. 
        
        Étape 3 : Assembler les sushis en utilisant une natte en bambou, servir avec du wasabi et de la sauce soja.`,
		image: "https://www.exoticca.com/fr/blog/wp-content/uploads/2019/06/Journee-internationale-du-sushi.jpg",
		ingredients: [
			{ id: 0, name: "Riz à sushi", quantity: "300", unit: "g" },
			{ id: 1, name: "Saumon cru", quantity: "100", unit: "g" },
			{ id: 2, name: "Thon cru", quantity: "100", unit: "g" },
			{ id: 3, name: "Avocat", quantity: "1", unit: "pièces" },
			{ id: 4, name: "Concombre", quantity: "1", unit: "pièces" },
			{ id: 5, name: "Wasabi", quantity: "10", unit: "g" },
			{ id: 6, name: "Sauce soja", quantity: "30", unit: "mL" },
		],
		preparationTime: "30 min",
		cookingTime: "0 min",
		notes: 4.5,
		nbOfNotes: 76,
	},
	{
		id: 11,
		title: "Hamburger maison",
		description: "Un burger classique avec du bœuf juteux, du fromage fondant et des légumes frais.",
		steps: `Étape 1 : Former les steaks hachés avec du sel et du poivre. Les faire cuire dans une poêle chaude jusqu'à ce qu'ils soient cuits selon votre préférence. 
        
        Étape 2 : Toastez les pains à burger. 
        
        Étape 3 : Assemblez les burgers avec la laitue, la tomate, l'oignon, le fromage et la sauce de votre choix.`,
		image: "https://www.socopa.fr/wp-content/uploads/2023/05/hamburger-maison-au-four.jpg",
		ingredients: [
			{ id: 0, name: "Steak haché", quantity: "200", unit: "g" },
			{ id: 1, name: "Pain à burger", quantity: "2", unit: "pièces" },
			{ id: 2, name: "Fromage cheddar", quantity: "2", unit: "tranches" },
			{ id: 3, name: "Laitue", quantity: "50", unit: "g" },
			{ id: 4, name: "Tomate", quantity: "1", unit: "pièces" },
			{ id: 5, name: "Oignon", quantity: "1", unit: "pièces" },
			{ id: 6, name: "Sauce burger", quantity: "30", unit: "mL" },
		],
		preparationTime: "20 min",
		cookingTime: "10 min",
		notes: 4,
		nbOfNotes: 63,
	},
];

const disconnectButton = document.getElementById("disconnect");
const addButton = document.getElementById("add");

const firstLoad = () => {
	localStorage.setItem("pageLoaded", true);
	localStorage.setItem("recipes", JSON.stringify(baseRecipes));
};

const isAdmin = () => {
	return localStorage.getItem("isAdmin") === "true";
};

const makeHidden = (element) => {
	if (element) {
		element.classList.add("hidden");
	}
};

const makeVisible = (element) => {
	if (element) {
		element.classList.remove("hidden");
	}
};

const makeVisibleFlex = (element) => {
	element.classList.remove("hidden");
	element.classList.add("flex");
};

const switchConnectButton = () => {
	const connectButton = document.getElementById("connect");
	const headerButtonsList = document.getElementById("header-buttons-list");
	if (isAdmin()) {
		makeHidden(connectButton);
		makeVisible(disconnectButton);
		if (addButton) {
			makeVisible(addButton);
		}
		headerButtonsList.classList.add("gap-2");
	} else {
		makeVisible(connectButton);
		makeHidden(disconnectButton);
		makeHidden(addButton);
		headerButtonsList.classList.remove("gap-2");
	}
};

// Bouton déconnexion
disconnectButton.addEventListener("click", (event) => {
	localStorage.removeItem("isAdmin");
	window.location.href = "../index.html";
});
