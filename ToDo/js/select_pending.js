/* Handler for the display of pending tasks from the DB
	Uses the var itemRaw which comes json-encoded from the DB through select_pending.php
*/

var select_pending = function () {

	//This is the backend file connecting to the DB
	const php = "php/select_pending.php";

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
			let container = document.getElementById('pendingContainer');
			//Clean up the html
			container.innerHTML = "";
			
			//Dump items in the DOM
			for (let c in itemRaw) {
				//c refers to every task found, one at a time
				console.log(c);

				/* BUILD YOUR OWN HTML FOR THE LIST ???
				* Use document.createElement("tag")
				* See other app for examples.
				* The values comme in an array: itemRaw
				* You use it like this:
				* itemRaw[c].nameOfVar
				* The nameOfVar is the name you provided to the JSON in the PHP*/

				//Create Complete Button
				let bttnSPAN = document.createElement('span');
				let bttn = document.createElement("a");
				bttn.innerHTML = "&#10004;";
				bttn.addEventListener("click", function () {
					update_task(itemRaw[c].ID); //??? Make sure this ID matches your DB
				});

				//Organize the structure and dump in html
				bttnSPAN.appendChild(bttn);
				???.appendChild(bttnSPAN); // PUT THE BUTTON WHERE YOU WANT IT
				/* APPEND THE OTHER ELEMENTS FOR YOUR LIST */
				container.appendChild(???);  //PUT YOUR ITEM ELEMENT IN THE PENDING LIST CONTAINER

			}
        }
	};
	xhr.send(formData);
};
select_pending();

