const time = document.querySelector('#time');
hour = time.dataset.hours;
minutes = time.dataset.minutes;

const timedouble0 = ["00","01","02","03","04","05","06","07","08","09"];

showTime(hour, minutes);
document.cookie = "hour = " + check(hour);
document.cookie = "minute = "+ check(minutes);
function upH() {
    h = ++hour
    if (h >= 24) {
        h = 0
        hour = 0
    }
    document.cookie = "hour = " + check(hour);
    showTime(h, minutes)
    
}

function downH() {
    h = --hour
    if (h <= -1) {
        h = 23
        hour = 23
    }
    document.cookie = "hour = " + check(hour);
    showTime(h, minutes)
}

function upM() {
    m = ++minutes
    if (m >= 60) {
        minutes = 0
        m = 0
    }
    document.cookie = "minute = "+ check(minutes);
    showTime(hour, m)
}

function downM() {
    m = --minutes
    if (m <= -1) {
        minutes = 59
        m = 59
    }
    document.cookie = "minute = "+ check(minutes);
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
        celltext = document.createTextNode(check(hours));
        cell.appendChild(celltext);
        //make it non selectable
        cell.classList.add("no-copy");
        // saving the cell
        row2.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            celltext = document.createTextNode(":");
            cell.appendChild(celltext);
        //make it non selectable
        cell.classList.add("no-copy");
        // saving the cell
        row2.appendChild(cell);

        // creating cell
        cell = document.createElement("td");
        // putting the arrow in
            celltext = document.createTextNode(check(minutes));
            cell.appendChild(celltext);
        //make it non selectable
        cell.classList.add("no-copy");
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
function check(t) {
    if (t<10) {
        return timedouble0[t]
    }else{
        return t
    }
}

