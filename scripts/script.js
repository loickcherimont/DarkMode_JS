const switcher = document.getElementById("switcher");
const curtains = document.querySelector(".curtains");

switcher.addEventListener('click', () => {
	const body = document.body;
	

	body.classList.toggle("dark");

	// Dark mode is running
	if(body.classList.contains("dark")) {
		curtains.style.height = "100vh";
		switcher.value = "Light";
		document.querySelector(".mode-indicator").innerHTML = '<i class="bi bi-moon-fill"></i>';
	} else {
		switcher.value = "Dark";
		curtains.style.height = "0vh";
		document.querySelector(".mode-indicator").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
	}1
})
