// next line is only needed when you dont use time in datumscript.js or dont use datumscript at all
// const time = document.querySelector('#time');
let hour = time.dataset.hours;
let minutes = time.dataset.minutes;
let nowH = time.dataset.hours;
let nowM= time.dataset.minutes;
const timedouble0 = ["00","01","02","03","04","05","06","07","08","09"];
// setting the begin and end time
if (hour <= 9) {
    hour = 9
}
if (hour >= 20) {
    hour = 20
    minutes = 0
}
showTime(hour, minutes);
document.cookie = "hour = " + check(hour);
document.cookie = "minute = "+ check(minutes);
function upH() {
    ++hour
    //end time
    if (hour >= 20) {
        hour = 20;
        minutes = 0;
    }
    //going back if at the end not needed becouse i use the above
        /*if (hour >= 24) {
            hour = 0
        }*/
    document.cookie = "hour = " + check(hour);
    showTime(hour, minutes)
    
}

function downH() {
    --hour
    //start time
    if (hour <= nowH && time.dataset.date==old.id) {
        hour = nowH
    }else if (hour <= 9) {
        hour = 9
    }
    //going back if at the end not needed becouse i use the above
        /*if (hour <= -1) {
            hour = 23
        }*/
    document.cookie = "hour = " + check(hour);
    showTime(hour, minutes)
}

function upM() {
    ++minutes
    //setting the minutes when hour is 20 to 0
    if (hour == 20) {
        minutes = 0;
    }
    //back to 0
    if (minutes >= 60 && time.dataset.date==old.id && hour <= nowH) {
        minutes = nowM
    }else if (minutes >= 60) {
        minutes = 0
    }
    document.cookie = "minute = "+ check(minutes);
    showTime(hour, minutes)
}

function downM() {
    --minutes
    //setting the minutes when hour is 20 to 0
    if (hour == 20) {
        minutes = 0;
    }

    if (hour <= nowH && minutes<=nowM && time.dataset.date==old.id){
        minutes = nowM
    }
    // back to 59 when minutes is on -1
    if (minutes <= -1) {
        minutes = 59;
    }
    document.cookie = "minute = "+ check(minutes);
    showTime(hour, minutes)
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
    // need to make it the first time a nuber so it can be put inside a array as the variable so thats wy i do ++ --
    t++
    t--
    if (t<10) {
        return timedouble0[t]
    }else{
        return t
    }
}

