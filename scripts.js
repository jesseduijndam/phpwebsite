today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
let thisdatepassed = false
let hello = 0
let old = 0
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


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
                cellText = document.createTextNode(date);
                if (date < today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("notavaileble");
                }
                
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
                cell.appendChild(cellText);

                cell.id = `${date}/${month+1}/${year}` ;
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


// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) 
{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}