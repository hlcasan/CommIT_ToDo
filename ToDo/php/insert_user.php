<?php
//First load the DB connection
require_once("db_connect.php");

//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($dbi) {
    //Build the SQL query
    $uname = $_REQUEST['uname'];

    $q = ""; /* PROVIDE YOUR OWN SQL ??? */

    //prepare statement, execute, store_result
    if ($insertStmt = $dbi->prepare($q)) {
        //update bind parameter types & variables as required
        //s=string, i=integer, d=double, b=blob
        $insertStmt->bind_param("s", $uname);
        $insertStmt->execute();

        //Get new user’s ID
        $rArray[] = [
            "ID"=>$insertStmt->insert_id /* Make sure this matches */
        ];

        echo json_encode($rArray);

    } else {
        echo "Error";
    }

    $insertStmt->close();
    $dbi->close();
}

?>