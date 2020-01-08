<?php
require_once "includes/database.php";
require_once "includes/autofill.php";
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
    <life id="time" data-date= <?=date("j/n/Y") ?> data-year= <?= date("Y") ?> data-month= <?= date("n") ?> data-hours= <?= date("G")?> data-minutes= <?= date('i') ?> />
        <h3 id="monthAndYear"></h3>
        <table id="col-add">
            <thead>
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
        
    <script src="js/datumscript.js"></script>
</body>
</html>