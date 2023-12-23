function saveOptions(e) {
	e.preventDefault();
	browser.storage.sync.set({
		mirror: document.querySelector("#mirror").value,
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.getElementById("prefMirror").textContent = result.mirror || "https://yewtu.be/watch?v=";
		document.querySelector("#mirror").value = result.mirror || "https://yewtu.be/watch?v=";
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	let getting = browser.storage.sync.get("mirror");
	getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);