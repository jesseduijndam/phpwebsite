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
    <table>
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

    

        <button id="previous" onclick="previous()">Previous</button>

        <button id="next" onclick="next()">Next</button>
    
    <br/>
    <form>
        <label for="month">Jump To: </label>
        <select name="month" id="month" onchange="jump()">
            <option value=0>Jan</option>
            <option value=1>Feb</option>
            <option value=2>Mar</option>
            <option value=3>Apr</option>
            <option value=4>May</option>
            <option value=5>Jun</option>
            <option value=6>Jul</option>
            <option value=7>Aug</option>
            <option value=8>Sep</option>
            <option value=9>Oct</option>
            <option value=10>Nov</option>
            <option value=11>Dec</option>
        </select>


        <label for="year"></label>
        <select name="year" id="year" onchange="jump()">
            <option value=2019>2019</option>
            <option value=2020>2020</option>
            <option value=2021>2021</option>
            <option value=2022>2022</option>
            <option value=2023>2023</option>
            <option value=2024>2024</option>
            <option value=2025>2025</option>
            <option value=2026>2026</option>
            <option value=2027>2027</option>
            <option value=2028>2028</option>
            <option value=2029>2029</option>
            <option value=2030>2030</option>
        </select>
    </form>
    <table>
        <tbody id = "time-body">
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