const timeslot = document.getElementsByClassName("clickable");

const time = document.querySelector('#time');
const ammount = time.dataset.ammount;
for (let i = 0; i < timeslot.length; i++) {
    timeslot[i].onclick = selected;
}

function selected(e)
            {
                console.log(e.currentTarget)
                
                document.querySelectorAll('.selected').forEach(function(selectedElement){
                    selectedElement.classList.replace("selected", "clickable")
                });
                
                let extra = e.currentTarget.id
                for (let i = 0; i < ammount; i++) {
                    let next = document.getElementById(extra)
                    next.classList.replace("clickable", "selected");
                    extra ++;              
                }
            }