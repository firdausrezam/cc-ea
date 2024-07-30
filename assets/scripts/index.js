import "./infobar.js";
import "./article_page.js";

document.addEventListener("DOMContentLoaded", () => {
	const mobileDropdown = document.getElementById("mobile-dropdown");
	const mobileDropdownButton = document.getElementById(
		"mobile-dropdown-button"
	);
	const surveyModal = document.getElementById("survey-modal");
	const closeSurveyModalBtn = document.getElementById("close-survey-modal");
	let windowWidth = window.innerWidth;
	let expandMobileDropdown = false;

	if (surveyModal) {
		setTimeout(() => {
			surveyModal.classList.add("flex");
			surveyModal.classList.remove("hidden");
		}, 3000);
	}

	window.addEventListener("load", () => {
		if (window.location.hash) {
			const articleId = window.location.hash.split("#")[1];
			document
				.getElementById(`accordion-${articleId}`)
				.setAttribute("checked", "checked");
			document
				.getElementById(articleId)
				.scrollIntoView({ behavior: "smooth" });
		}
	});

	window.addEventListener("resize", () => {
		windowWidth = window.innerWidth;

		if (windowWidth < 768) {
			if (expandMobileDropdown) {
				mobileDropdown.classList.remove("hidden");
				mobileDropdown.classList.add("flex");
			} else {
				mobileDropdown.classList.remove("flex");
				mobileDropdown.classList.add("hidden");
			}
		} else {
			mobileDropdown.classList.remove("flex");
			mobileDropdown.classList.add("hidden");
		}
	});

	const toggleMobileDropdown = () => {
		expandMobileDropdown = !expandMobileDropdown;
		if (windowWidth < 768) {
			if (expandMobileDropdown) {
				mobileDropdown.classList.remove("hidden");
				mobileDropdown.classList.add("flex");
			} else {
				mobileDropdown.classList.remove("flex");
				mobileDropdown.classList.add("hidden");
			}
		} else {
			mobileDropdown.classList.remove("flex");
			mobileDropdown.classList.add("hidden");
		}
	};

	mobileDropdownButton.addEventListener("click", () => {
		toggleMobileDropdown();
	});

	if (closeSurveyModalBtn) {
		closeSurveyModalBtn.addEventListener("click", () => {
			surveyModal.classList.add("hidden");
		});
	}
});
