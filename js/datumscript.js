today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
previousMonth = document.getElementById("previous");
nextMonth = document.getElementById("next");
let thisdatepassed = false
let hello = 0
let old = 0
monthsshort = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dec"];
months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

//getting the inline js out of my php
selectYear.onchange = jump;
selectMonth.onchange = jump;
previousMonth.onclick = previous;
nextMonth.onclick = next;

//getting options for the onchange smaler and automaticly updated
showOptions();


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
  
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
    
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
   
}
function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";
    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) 
        {
            if (i === 0 && j < firstDay) 
            {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) 
            {
                break;
            }

            else {
                cell = document.createElement("td");
                cell.id = `${date}/${month+1}/${year}` ;
                cellText = document.createTextNode(date);
                if ((date < today.getDate() && year === today.getFullYear() && month === today.getMonth()) || j == 0 || j == 6) {
                    cell.classList.add("notavaileble");
                }
                if (j== 0 || j == 6) {
                    
                }else{
                if (year === today.getFullYear()) 
                {
                    if (month === today.getMonth() && date >= today.getDate()) {
                        cell.onclick = naam;
                    }else if (month > today.getMonth()) {
                        cell.onclick = naam;
                    }
                }else if (year >= today.getFullYear()) {
                    cell.onclick = naam;
                }
                }
                cell.appendChild(cellText);
                cell.classList.add("no-copy")
                
                cell.classList.add("notanymore")
                row.appendChild(cell);
                date++;
            }
            function naam(e)
            {
                
                if (hello >= 1) 
                {
                    old.classList.replace("date-selected", "notanymore")  
                }
                
            
                console.log(e.toElement.id);
                
                    e.toElement.classList.replace("notanymore", "date-selected");
                
                hello++
                old = e.toElement;
                document.cookie = "datum = " + old.id
                
            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

function showOptions() {
    //making it an easier name
    let optionsMonth = selectMonth;
    let optionsYear = selectYear;
    //clearing old options just to be shure
    optionsMonth.innerHTML = "";
    optionsYear.innerHTML = "";

    //the months using montsshort
    for (let i = 0; i < 12; i++) {
        let option =  document.createElement("option");
        option.value = i;
        optionText = document.createTextNode(monthsshort[i]);
        option.appendChild(optionText);
        optionsMonth.appendChild(option);
    }

    //the years auto updating to only one year extra after half a year got passed
    for (let i = currentYear; i < currentYear + 2 ; i++) {
        let option =  document.createElement("option");
        option.value = i;
        optionText = document.createTextNode(i);
        option.appendChild(optionText);
        optionsYear.appendChild(option);
    }

}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) 
{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}