import SheetDB from "sheetdb-js";

if (window.location.pathname.includes("/p/survey")) {
	const SHEET_URL = "https://sheetdb.io/api/v1/gmf3kd7pooic1";

	document.addEventListener("DOMContentLoaded", () => {
		const successModal = document.getElementById("success-modal");
		const brands = document.getElementById("brands-name");
		const satisfactionRadios = document.querySelectorAll(
			"input[name='satisfaction']"
		);
		const suggestionInput = document.getElementById("suggestion-input");
		const submitButton = document.getElementById("submit-survey");

		submitButton.addEventListener("click", (e) => {
			e.preventDefault();

			let selectedSatisfaction;
			for (const satisfactionRadio of satisfactionRadios) {
				if (satisfactionRadio.checked) {
					selectedSatisfaction = satisfactionRadio.value;
					break;
				}
			}

			const form = new FormData();
			form.append("Date", "DATETIME");
			form.append("Brand", brands.textContent.trim());
			form.append("Satisfaction", selectedSatisfaction);
			form.append("Suggestion", suggestionInput.value);

			SheetDB.write(SHEET_URL, {
				sheet: "Survey",
				data: {
					Date: "DATETIME",
					Brand: brands.textContent.trim(),
					Satisfaction: selectedSatisfaction,
					Suggestion: suggestionInput.value,
				},
			}).then((res) => {
				successModal.showModal();
			});
		});
	});
}
