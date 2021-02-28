/* Handler for the display of completed tasks from the DB
	Uses the var itemRaw which comes json-encoded from the DB through select_completed.php
*/

var select_completed = function () {

	//This is the backend file connecting to the DB
	const php = "php/select_completed.php";

	//Handles the server call to the PHP file and the data we get back
	const xhr = new XMLHttpRequest();

	//Send the current user’s ID
	var formData = new FormData();
	formData.append("user",window.localStorage.getItem("todoUser"));

	//Will contain the raw data from the DB
	let itemRaw = [];

	//Connect to the PHP
    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        //This is stuff to tell us what is going on
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            //Everything ok, get the names in JSON
            itemRaw = JSON.parse(xhr.responseText);
			console.log(itemRaw); // print response

			//The HTML container for the list of names
			let container = document.getElementById('completedContainer');
			//Clean up the html
			container.innerHTML = "";
			
			//Dump items in the DOM
			for (let c in itemRaw) {
				//c contains every person found, one at a time
				console.log(c);
				
				/* BUILD YOUR OWN HTML FOR THE LIST ???
				* Use document.createElement("tag")
				* See other app for examples.
				* The values comme in an array: itemRaw
				* You use it like this:
				* itemRaw[c].nameOfVar
				* The nameOfVar is the name you provided to the JSON in the PHP*/

			}
        }
	};
	xhr.send(formData);
};
select_completed();

