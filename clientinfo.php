<?php
    require_once "includes/database.php";
    session_start();
    foreach ($_POST as $key => $value) {
        if (empty($value)) {
            header("location: index.php");
            exit;
        }
        $_POST["$key"] = htmlentities($value);
        $_POST["$key"] = mysqli_real_escape_string($db, $value);
    }
    foreach ($_COOKIE as $key => $value) {
        if (empty($key)) {
            header("location: index.php");
            exit;
        }
        $_COOKIE["$key"] = htmlentities($value);
        $_COOKIE["$key"] = mysqli_real_escape_string($db, $value);
    }
    if (empty( $_SESSION["appointing"]["choices"])) {
        header("location: index.php");
        exit;
    }
    $_SESSION["appointing"]["choices"] = htmlentities($_SESSION["appointing"]["choices"]);
    $_SESSION["appointing"]["choices"] = mysqli_real_escape_string($db, $_SESSION["appointing"]["choices"]);
    
    $ids = array_map('intval', explode(",", $_COOKIE['ids']))   ;
    $Fid = $ids[0];
    $Lid = $ids[count($ids) - 1];
    $query ="UPDATE `openslots` SET  `genomen` = 1  WHERE `id` BETWEEN $Fid AND $Lid ";
        mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
    $sql = "SELECT `starttijd` FROM `openslots` WHERE `id` = $Fid";
        $starttijd = mysqli_fetch_assoc(mysqli_query($db, $sql))['starttijd'] or die('error: '. mysqli_error($db). ' with query' . $sql);
    $sql = "SELECT `eindtijd` FROM `openslots` WHERE `id` = $Lid";
        $eindtijd = mysqli_fetch_assoc(mysqli_query($db, $sql))['eindtijd'] or die('error: '. mysqli_error($db). ' with query' . $sql);
    $date = $_COOKIE['datum']; $fname = $_POST['firstname']; $lname = $_POST['lastname']; $email = $_POST['email']; $mobnummer = $_POST['mobnummer']; $choiceid = $_SESSION["appointing"]["choices"];
    
    $query = 
    "INSERT INTO 
        `reservaties`
            (`starttijd`, 
            `eindtijd`, 
            `date`, 
            `voornaam`, 
            `achternaam`, 
            `email`, 
            `telefoonnummer`, 
            `opties_id`) 
    VALUES(
        '$starttijd', 
        '$eindtijd', 
        '$date',
        '$fname',
        '$lname',
        '$email',
        '$mobnummer',
        '$choiceid') ";
    mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
    $query = "SELECT `id` FROM `reservaties`ORDER BY id DESC LIMIT 0, 1";
        $id = mysqli_fetch_assoc(mysqli_query($db, $query))['id'] or die('error: '. mysqli_error($db). ' with query' . $query);
    $query ="UPDATE `openslots` SET  `reservaties_id` = $id  WHERE `id` BETWEEN $Fid AND $Lid ";
        mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
    
?>