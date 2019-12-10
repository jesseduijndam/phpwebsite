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
<life id="time" data-hours= <?= date("G")?> data-minutes= <?= date('i') ?> />
    <h3 id="monthAndYear"></h3>
    <table id="col-add">
        <thead>
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
        </thead>

        <tbody id="calendar-body">

        </tbody>
    </table>

    

        <button id="previous">Previous</button>

        <button id="next">Next</button>
    
    <br/>
    <form>
        <label for="month">Jump To: </label>
        <select name="month" id="month">
            
        </select>


        <label for="year"></label>
        <select name="year" id="year" >
            
        </select>
    </form>
    <table>
        <tbody id = "time-body">
            
        </tbody>
    </table>
    <form action="action.php" method="get" >
    <p>Firstname:</p>
    <input type="text"  name="Fname" /><br />
    <p>Lastname:</p>
    <input type="text"  name="Lname" /><br /><br />
    <input type="checkbox" name="dienst" value="wassen"> Wassen<br />
    <input type="checkbox" name="dienst" value="knippen"> Knippen<br />
    <input type="checkbox" name="dienst" value="stijlen"> stijlen<br />
    <input type="checkbox" name="dienst" value="wassen"> Wassen<br />
    <input type="submit" value="Submit">
</form>
    <script src="js/datumscript.js"></script>
    <script src="js/clockscript.js"></script>
</body>
</html>