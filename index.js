document.addEventListener("DOMContentLoaded", () => {
	const title = document.getElementById("title-wrapper");
	const skills = document.getElementById("skills-wrapper");
	const grid = document.getElementById("skills-grid");
	const skill = document.querySelector(".flip-wrapper");
	const exp = document.getElementById("experience-wrapper");
	const expGrid = document.getElementById("experience-grid");
	const job = document.querySelector(".job");
	setGridParentHeight(skills, grid, skill);
	document.getElementById("site-wrapper").addEventListener("scroll", () => {
		revealOnScroll(skills);
		revealOnScroll(exp);
	});
	window.onresize = () => {
		setGridParentHeight(skills, grid, skill);
	};
});

function revealOnScroll(element) {
	const top = element.getBoundingClientRect().top;
	const windowHeight = window.innerHeight;
	const fadeThreshold = 0.5;
	if (top < windowHeight * fadeThreshold) {
		element.style.opacity = 1;
		const divider = element.querySelector(".divider");
		if (divider) {
			setTimeout(() => {
				divider.classList.add("animate-divider");
			}, 500);
		}
	}
}

function setGridParentHeight(parent, grid, griditem) {
	const rows = getComputedStyle(grid)
		.getPropertyValue("grid-template-rows")
		.split(" ").length;
	const gap = 20;
	parent.style.height = `${100 + (griditem.clientHeight + gap) * (rows + 1)}px`;
}
