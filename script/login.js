const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

const admins = [
	{ email: "admin1", password: "azerty" },
	{ email: "admin2", password: "azerty" },
	{ email: "a", password: "a" },
];

localStorage.setItem("admins", JSON.stringify(admins));

const adminsList = JSON.parse(localStorage.getItem("admins"));

const checkLogin = (username, password) => {
	return adminsList.some((admin) => admin.email === username && admin.password === password); // parcourt le tableau et vérifie si le nom d'utilisateur et le mot de passe correspondent
};

// EVENT LISTENERS

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	if (checkLogin(usernameInput.value, passwordInput.value)) {
		localStorage.setItem("isAdmin", true);
		window.location.href = "./index.html";
	} else {
		alert("Vous n'êtes pas un administrateur");
	}
});

cancelButton.addEventListener("click", (event) => {
	event.preventDefault();
	window.location.href = "./index.html";
});
