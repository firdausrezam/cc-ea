document.addEventListener("DOMContentLoaded", () => {
	const infobars = document.querySelectorAll(".infobar-component");

	if (infobars) {
		infobars.forEach((bar) => {
			const closeButton = bar.querySelector(".infobar-dismiss");

			closeButton.addEventListener("click", () => {
				bar.classList.add("hidden");
			});
		});
	}
});
