<?php
$justanarray = array();
session_start();
$_SESSION["appointing"] = $justanarray;
$_SESSION["loggedin"] = $justanarray;

session_write_close();

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
    <div class="centered">
        <life id="time" data-date= <?=date("j/n/Y") ?> data-year= <?= date("Y") ?> data-month= <?= date("n") ?> data-hours= <?= date("G")?> data-minutes= <?= date('i') ?> /> 
        <table id="col-add" class="bigger">
            <thead>
                <tr class="no-copy">
                    <th colspan="7" id="monthAndYear"></th>
                </tr>
                <tr class="no-copy">
                    <th>Zo</th>
                    <th>Ma</th>
                    <th>Di</th>
                    <th>Wo</th>
                    <th>Do</th>
                    <th>Vr</th>
                    <th>Za</th>
                </tr>
            </thead>

            <tbody id="calendar-body">
                <!-- the calender comes here -->
            </tbody>
        </table>
            <button id="previous">Previous</button>
            <button id="next">Next</button>   
        <br/>
        <form>
            <label for="month">Verander Naar: </label>
                <select name="month" id="month">
                    <!-- the months come here -->
                </select>
            <label for="year"></label>
                <select name="year" id="year" >
                    <!-- the years are here  -->
                </select>
        </form>
        <div class="onderelkaar">
            <table>
                <tbody id = "time-body">
                    <!-- the time picker belongs here -->
                </tbody>
            </table>
            <form action="action.php" method="get" >
                <input type="checkbox" name="wassen"  vlaue= 1> Wassen<br />
                <input type="checkbox" name="knippen" value= 1> Knippen<br />
                <input type="checkbox" name="krullen" value= 1> krullen<br />
                <input type="checkbox" name="kleuren" value= 1> kleuren<br />
                <input type="submit" value="Submit">
            </form>
            <script src="js/datumscript.js"></script>
            <script src="js/clockscript.js"></script>
        </div>
    </div>
</body>
</html>