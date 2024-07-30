import moment from "moment-timezone";

document.addEventListener("DOMContentLoaded", () => {
	const articleCreatedAt = document.getElementById("article-created");

	articleCreatedAt.textContent = moment(
		articleCreatedAt.textContent.split("UTC").join("")
	)
		.tz(moment.tz.guess())
		.format("MMMM DD, YYYY - HH:mm");
});
