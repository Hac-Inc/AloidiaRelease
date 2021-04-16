function generateLogin() {
	let uname = document.getElementById("id-input").value;
	let pass = document.getElementById("password-input").value;
	let bookmark = `javascript: (function () { var token = document.createElement("div"); token.id = "AloidiaClientLoginToken"; token.innerHTML = "` + uname + `|` + pass + `"; document.head.appendChild(token); var script = document.createElement("script"); script.id = "AloidiaClientScript"; script.src = "https://hac-inc.github.io/AloidiaRelease.github.io/Aloidia.js"; document.head.appendChild(script) }())`;


	let popup = document.createElement("a");
	popup.innerHTML = '<a href="javascript: (function () { var token = document.createElement(`div`); token.id = `AloidiaClientLoginToken`; token.innerHTML = `' + uname + '|' + pass + '`; document.head.appendChild(token); var script = document.createElement(`script`); script.id = `AloidiaClientScript`; script.src = `https://hac-inc.github.io/AloidiaRelease.github.io/Aloidia.js`; document.head.appendChild(script) }())"><span style="display:none">Aloidia Client</span><input type="button" value="Drag me into your bookmarks bar!"></a>';
	//popup.style.padding
	document.getElementById("output").appendChild(popup);
	document.getElementById("output").style.display = "";


};


document.getElementById("login-submit").addEventListener('click', () => {
	generateLogin();
})
document.getElementById("id-input").addEventListener('keydown', (e) => {
	if (e.key === "Enter") {
		document.getElementById("login-submit").click();
	}
})
document.getElementById("password-input").addEventListener('keydown', (e) => {
	if (e.key === "Enter") {
		document.getElementById("login-submit").click();
	}
})