const timeslot = document.getElementsByClassName("clickable");
const idbut = document.getElementById("idlist");
idbut.onclick = idlist;
const time = document.querySelector('#time');
const ammount = time.dataset.ammount;
for (let i = 0; i < timeslot.length; i++) {
    timeslot[i].onclick = selected;
}

function selected(e){
    console.log(e.currentTarget)
    
    change();
    
    let extra = e.currentTarget.id
    for (let i = 0; i < ammount; i++) {
        let next = document.getElementById(extra)
        next.classList.replace("clickable", "selected");
        if (next.className == "notavaileble") {
            change();
            break;
        }
        extra ++;              
    }
}

function change(){
    document.querySelectorAll('.selected').forEach(function(selectedElement){
        selectedElement.classList.replace("selected", "clickable")
    });
}

function idlist() {
    let ids = [];
    document.querySelectorAll('.selected').forEach(function(selectedElement){
        
        ids.push(selectedElement.id)
    });
    document.cookie = 'ids = ' + ids;
    
}