// Change mode
// between dark and light
export function switcher() {

    const modeIcons = {
        dark: 'bi bi-moon-fill text-white',
        light: 'bi bi-brightness-high-fill'
    }

    // Active options.
    const activeIcon = document.querySelector('.icon-mode-indicator');
    let activableMode = this.value;

    // const darkMode = document.querySelector('.dark-mode');

    if(activableMode === "Dark") {
		// darkMode.style.height = "100vh";
		activeIcon.innerHTML = `<i class='${modeIcons.dark}'></i>`;
        this.value = "Light";
        this.style.backgroundColor = 'white';
        this.style.color = '#233142';
        document.body.setAttribute('class', 'bg-dark');

    } else {
        // darkMode.style.height = "0vh";
		activeIcon.innerHTML = `<i class='${modeIcons.light}'></i>`
        this.value = "Dark";
        this.style.backgroundColor = '#233142';
        this.style.color = 'white';
        document.body.setAttribute('class', 'bg-white');
    }
        

    console.log(this)


	// const body = document.body;
    // const darkMode = document.querySelector(".dark-mode");

	// body.classList.toggle("dark");

	// Dark mode is running
	// if(body.classList.contains("dark")) {
		// modeButton.value = "Light";
	// } else {
		// modeButton.value = "Dark";
		// darkMode.style.height = "0vh";
		// document.querySelector(".mode-indicator").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
	// }
}
