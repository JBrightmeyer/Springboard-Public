const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	
	//if searchbox is empty returns an empty list instead of the full array otherwise returns array with the updated list items 
	if (str == ""){
		return [];
	}
	else {
		return fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
	}
}

function searchHandler(e) {
	
	//Clears previous search suggestions
	document.querySelector("#suggestions-fruit").innerHTML = ""

	//update the ul to include search results
	let suggestions = search(document.querySelector("#fruit").value);
	for (let i = 0; i < suggestions.length; i++){
		let suggestionLi = document.createElement("li");
		suggestionLi.classList.add("suggestion-li");
		suggestionLi.innerText = suggestions[i];
		document.querySelector("#suggestions-fruit").appendChild(suggestionLi);
	}
}

// I didn't use this function because I thought it would be best if the search handler updated the list based on the results
// function showSuggestions(results, inputVal) {
// }

//If an li is clicked, updates the value of the user input to the innerText of the li and clears the list of suggestions
function useSuggestion(e) {
	document.querySelector("#fruit").value = e.target.innerText;
	document.querySelector("#suggestions-fruit").innerHTML = ""
}

//handles typing in the user input
input.addEventListener('keyup', searchHandler);

//handles clicking on a created li
suggestions.addEventListener('click', useSuggestion);