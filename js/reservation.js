timeslot = document.getElementsByClassName("clickable");
console.log (timeslot.length)
hello = 0

const time = document.querySelector('#time')
let ammount = time.dataset.ammount
console.log(ammount)
for (let i = 0; i < timeslot.length; i++) {
    
    timeslot[i].onclick = selected
}
firsttime = false;
function selected(e)
            {

                // console.log(e.target.offsetParent.className);
                
                
                    wasselected = document.getElementsByClassName('selected')
                    console.log(wasselected);
                    
                    for (let i = 0; i < wasselected.length ; i++) {
                        wasselected[i].classList.replace("selected", "clickable")
                        
                    }
                    // old.classList.replace("selected", "clickable")  
                 
                
            
                console.log(e.toElement.id);
                
                    e.target.offsetParent.classList.replace("clickable", "selected");
                    extra = e.target.offsetParent.id
                    for (let i = 0; i < ammount; i++) {
                        
                        // h = extra
                        next = document.getElementById(extra ++)
                        next.classList.replace("clickable", "selected");                
                    }
                firsttime = true
                old = e.target.offsetParent;
                document.cookie = "choiceid =" + old.id
                
                
                
            }