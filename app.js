const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((item) => {
	// console.log(item.classList);
	item.addEventListener("click", () => {
		const activeBtn = document.getElementsByClassName("active")[0];
		// console.log(activeBtn);
		if (!item.classList.contains("active")) {
			activeBtn.classList.remove("active");
			const activeId = activeBtn.dataset.id;
			document.getElementById(activeId).classList.remove("active");
			item.classList.add("active");
			const nextId = item.dataset.id;
			// console.log(id);
			document.getElementById(nextId).classList.add("active");
		}
	});
});
