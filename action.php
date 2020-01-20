<?php
    require_once "includes/database.php";
    
    session_start();
    $ammount = 0;
        if (!isset($_GET['wassen'])) {$wassen = false;} else {$ammount += 1; $wassen = true;}
        if (!isset($_GET['knippen'])) {$knippen = false;} else {$ammount += 4; $knippen = true;}
        if (!isset($_GET['krullen'])) {$krullen = false;} else {$ammount += 2; $krullen = true;}
        if (!isset($_GET['kleuren'])) {$kleuren = false;} else {$ammount += 3; $kleuren = true;}
    $query = "INSERT INTO `opties`(`wassen`, `kleuren`, `knippen`, `krullen`) VALUES ('$wassen', '$kleuren', '$knippen', '$krullen')";
        mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
    $query =    "SELECT `id` FROM `opties` ORDER BY id DESC LIMIT 0, 1";
        $choiceid = mysqli_fetch_assoc(mysqli_query($db, $query))['id'] or die('error: '. mysqli_error($db). ' with query' . $query);
    $date = $_COOKIE['datum'];
    $timechosen = date('H:i:s', mktime($_COOKIE['hour'], $_COOKIE['minute'], 0));
    $starttime = date('H:i:s', mktime($_COOKIE['hour'] - 1, $_COOKIE['minute']- 10, 0));
    $endtime = date('H:i:s', mktime($_COOKIE['hour'] + 1, $_COOKIE['minute'], 0));
    $query =   "SELECT 
                    `id`, 
                    date_format(starttijd,'%H:%i') AS starttijd, 
                    date_format(eindtijd,'%H:%i') AS eindtijd, 
                    date_format(datum, '%d-%c-%Y') AS datum 
                FROM 
                    `openslots` 
                WHERE 
                    (`starttijd` BETWEEN '$starttime' AND '$endtime') AND
                    (`datum` = '$date') AND
                    (`genomen` = '0')";
    $times = mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
    if($times){
        $timeslots = [];
        while($row = mysqli_fetch_assoc($times)){
            $timeslots[] = $row;
        }
    }
    $_SESSION["appointing"]["choices"] = $choiceid; 
    // var_dump($timeslots);
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>Document</title>
</head>
<body>
    <life id="time" data-ammount=<?= $ammount ?>>
    <table class = "hulp">
        <?php for ($i=0; $i < count($timeslots); $i++) { ?>
            <tr>
                <td>
                    <table class = "clickable" id = <?= $timeslots[$i]["id"];?>>
                        <tr>
                            <td >
                                <?= $timeslots[$i]["starttijd"];?>
                            </td>
                            <td rowspan = "2" >
                                <?= $timeslots[$i]["datum"];?>
                            </td>
                        </tr>
                        <tr >
                            <td >
                                <?= $timeslots[$i]["eindtijd"];?>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

        <?php }?>
    </table>

    <script src="js/reservation.js"></script>
</body>
</html>