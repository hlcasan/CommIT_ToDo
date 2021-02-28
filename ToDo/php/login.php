<?php

//Libraries
require_once("db_connect.php");

    if ($dbi) {
        // SQL query
        $q = "SELECT ID FROM ToDo_Users WHERE uname = ?"; /* make it match your DB ??? */

        // Array to translate to json
        $rArray = array();

        if ($stmt = $dbi->prepare($q)) {
            //Prepare input
            $uname = $_REQUEST['uname'];
            $stmt->bind_param("s",$uname);

            //Prepare output
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($rId);

            //Collect results
            while($r = $stmt->fetch()) {
                $rArray[] = [
                    "ID"=>$rId /* make it match your DB ??? */
                ];
            }
            
            //Encode JSON
            echo json_encode($rArray);
            
            $stmt->close();
        }
        else {
            echo "no execute statement";
        }

    }
    else {
        echo "Connection Error: " . mysqli_connect_error();
    }
    mysqli_close($dbi);

?>
