<?php
//First load the DB connection
require_once("db_connect.php");

//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($dbi) {
    //Build the SQL query
    $ID = $_REQUEST['ID'];

    $q = "UPDATE ToDo_Tasks SET completed = 1 WHERE ID = ?";

    //prepare statement, execute, store_result
    if ($updateStmt = $dbi->prepare($q)) {
        //update bind parameter types & variables as required
        //s=string, i=integer, d=double, b=blob
        $updateStmt->bind_param("i", $ID);
        $updateStmt->execute();
//        $updatedRows += $updateStmt->affected_rows;
    } else {
        echo "Error";
    }

    //echo($updatedRows);
    $updateStmt->close();
    $dbi->close();
}
// Return to main page
echo "OK: item updated";

?>