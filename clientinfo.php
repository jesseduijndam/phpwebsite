<?php
    require_once "includes/database.php";
    $ids = array_map('intval', explode(",", $_COOKIE['ids']));
    $Fid = $ids[0];
    $Sid = $ids[count($ids) - 1];
        // $query ="UPDATE `openslots` SET  `genomen` = 1  WHERE `id` BETWEEN $Fid AND $Sid ";
        // mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
        
?>