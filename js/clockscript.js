const time = document.querySelector('#time')
hour = time.dataset.hours;
minutes = time.dataset.minutes
 
const timehour = [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const timeminute = [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

showTime(hour, minutes)

function upH() {
    if (hour >= 23) {
        hour = -1
    }
    h = timehour[hour++]
    showTime(h, minutes)
    
}

function downH() {
    if (hour <= 0) {
        hour = 24
    }
    h = timehour[hour--]
    showTime(h, minutes)
}

function upM() {
    if (minutes >= 60) {
        minutes = -1
    }
    m = timeminute[++minutes]
    showTime(hour, m)
}

function downM() {
    if (minutes <= 0) {
        minutes = 60
    }
    m = timeminute[--minutes]
    showTime(hour, m)
}

function showTime(hours, minutes) {

    // body
    tbl = document.getElementById("time-body");

    // making the old table dissappear
    tbl.innerHTML = "";

    //row1 content arrows up
        // creating tablerow
        let row1 = document.createElement("tr");

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
        cellarrow = document.createElement('arrowup')
        cell.appendChild(cellarrow)
        cell.onclick = upH; 
        // saving the cell
        row1.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            // empty cell 
        // saving the cell
        row1.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
        cellarrow = document.createElement('arrowup')
        cell.appendChild(cellarrow)
        cell.onclick = upM; 
        // saving the cell
        row1.appendChild(cell);
        // saving the row1 
        tbl.appendChild(row1);

    // row2 content the time
        // creating tablerow
        let row2 = document.createElement("tr");

        // creating cell
        cell = document.createElement("td");
        // putting in the number of hours
        celltext = document.createTextNode(timehour[hours]);
        cell.appendChild(celltext);
        // saving the cell
        row2.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            celltext = document.createTextNode(":");
            cell.appendChild(celltext);
        // saving the cell
        row2.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            celltext = document.createTextNode(minutes);
            cell.appendChild(celltext);
        // saving the cell
        row2.appendChild(cell);
        // saving the row2 
        tbl.appendChild(row2);

    // row3 content arrows down
        // creating tablerow
        let row3 = document.createElement("tr");

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
        cellarrow = document.createElement('arrowdown')
        cell.appendChild(cellarrow)
        cell.onclick = downH; 
        // saving the cell
        row3.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            // empty cell 
        // saving the cell
        row3.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
        cellarrow = document.createElement('arrowdown')
        cell.appendChild(cellarrow)
        cell.onclick = downM; 
        // saving the cell
        row3.appendChild(cell);
        // saving the row3 
        tbl.appendChild(row3);



}