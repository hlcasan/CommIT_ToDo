/* Handler to add update a task, set it as completed
	Calls update_task.php to dump item in DB
*/

var update_task = function(taskID) {
        //This is the backend file updateing in the DB
        const php = "php/update_task.php";

        //This is what we send to the server for the PHP file
        const xhr = new XMLHttpRequest();
        let formData = new FormData();
        //Add the task’s ID to be sent to the PHP
        formData.append("ID",taskID);

        //Connect to the PHP
        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Everything ok, get the response
                console.log(xhr.responseText);

                // Call a refresh of the list of names
                select_pending();
                select_completed();
            }
        };
        xhr.send(formData);
};
update_task();
