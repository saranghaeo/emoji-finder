let getJsonFile = (pathToFile) => {
	let request = new XMLHttpRequest();

	request.open("GET", pathToFile, false);
	request.send(null);

	return JSON.parse(request.responseText);
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");

let str = "";
let itemsList = document.getElementById("items");

allEmoji.forEach((emoji) => {
	str += `<div class="item">
        	<p class="emoji">${emoji.symbol}</p>
        	<p class="symbol">${emoji.title}</p>
        	<p class="discription">${emoji.keywords}</p>
      	</div>`;
});
itemsList.innerHTML = str;

let descList = document.getElementsByClassName("item");

function dynamicSearch(searchQuery) {
	for (let i = 0; i < descList.length; i++) {
		if (allEmoji[i].keywords.includes(searchQuery)) {
			descList[i].style.display = "flex";
		} else {
			descList[i].style.display = "none";
		}
	}
}
