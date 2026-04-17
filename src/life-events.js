// Life events JavaScript source file

// Retirement Hub theme
//Quick and dirty workaround to get radio button filters working until that WET tag filter updates PR lands (https://github.com/wet-boew/wet-boew/pull/9904)
const puppetMaster = document.getElementById("puppetmaster");

//If the puppetmaster (radio button filters) exists
if (puppetMaster) {
	let puppet = document.getElementById("puppet");

	//Automatically generate the puppet (i.e. checkbox-only version of the filters to be used by the tag filter plugin behind-the-scenes)
	if (!puppet) {
		//Copy the puppetmaster's node
		puppet = puppetMaster.cloneNode(true);

		//Change the puppet's ID
		puppet.setAttribute("id", "puppet");

		//Change the puppet's background colour (to make it stand out)
		puppet.classList.add("bg-success");

		//Add 3 HR elements (to help separate it from the puppetmaster)
		for (let i = 0; i < 3; i++) {
			const newHr = document.createElement("hr");
			puppet.prepend(newHr);
		}

		//Replace LI "radio" classes with "checkbox" classes
		puppet.querySelectorAll(".radio").forEach((radioClassElm) => {
			radioClassElm.classList.replace("radio", "checkbox");
		});

		//Rework radio buttons into checkboxes the tagfilter plugin likes
		puppet.querySelectorAll("input").forEach((inputElm) => {
			inputElm.setAttribute("type", "checkbox");
			inputElm.setAttribute("name", "allFilters");
			inputElm.classList.add("wb-tagfilter-ctrl");
		});

		puppetMaster.after(puppet);
	}


	//Reveal the generic information checkbox and puppet filters if the page's URL contains a debug parameter
	const checklistUrl = new URL(window.location);
	const checklistUrlParams = new URLSearchParams(checklistUrl.search);

	//If not in debug mode, hide the puppet... otherwise, show the generic information checkboxes
	if (!checklistUrlParams.has("debug")) {
		puppet.setAttribute("hidden", "");
	}
	else {
		const genericCheckboxMaster = puppetMaster.querySelector("[hidden]");
		const genericCheckboxPuppet = puppet.querySelector("[hidden]");

		//Reveal the puppetmaster's generic information checkbox and give it a danger background to distinguish it (since it's a hidden form control that's being revealed)
		genericCheckboxMaster.classList.add("bg-danger");
		genericCheckboxMaster.removeAttribute("hidden");

		//Reveal the puppet's generic information checkbox and give it a danger background to distinguish it (since it's a hidden form control that's being revealed)
		genericCheckboxPuppet.classList.add("bg-danger");
		genericCheckboxPuppet.removeAttribute("hidden");
	}


	//If the puppet (checkbox filters) exists...
	if (puppet) {

		//Replicate changes made to the puppetmaster's radio buttons in the puppet's checkboxes
		//In other words...
		//-If the user toggles a checkbox in the puppetmaster, toggle it in the puppet too
		//-If the user ticks a radio button in the puppetmaster, tick its equivalent checkbox in the puppet and untick its siblings
		puppetMaster.addEventListener("change", (e) => {
			let relatedInputs = puppetMaster.querySelectorAll("input[name='" + e.target.name + "']");

			//Adjust the puppet's checkboxes for the current question to match the puppetmaster's current state
			relatedInputs.forEach(function (currentInput) {
				const currentInputValue = currentInput.value;
				const currentPuppetInput = puppet.querySelector("input[value='" + currentInputValue + "']");

				//If the puppet's checkbox exists...
				if (currentPuppetInput) {

					//Fake click the puppet's checkboxes to make them match (can't change their checked properties since the tag filter plugin doesn't rely on change events)
					if (e.target.value === currentPuppetInput.value) {
						//Checkbox is being toggled or a radio button is being ticked
						currentPuppetInput.click();
					}
					else if (e.target.checked && currentPuppetInput.checked) {
						//Untick the puppet's adjacent radio button inputs to match
						currentPuppetInput.click();
					}
				}
			});
		});
	}
}


try {
	document.getElementById("wb-lng").getElementsByTagName("a")[0].href += window.location.search;
} catch {
	console.log("Could not find other language link");
}
