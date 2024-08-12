
const list = document.querySelectorAll('.advisement img');
let ADID =0;
let x = 1;
let intValio =null;
intValioslider();


function intValioslider() {
    list[ADID].classList.add("displaySlide");
    list[ADID+x].classList.add("displaySlide");
    intValio = setInterval(next, 2000);
}
function showSlide(i){
    
    if (i>=list.length-1) {
        ADID = 0;
        x=1;
    } else if(i <0){
        ADID = list.length -1 ;
    }
    list.forEach(list =>{
       
        list.classList.remove("displaySlide");
    })
    list[ADID].classList.add("displaySlide");
    list[ADID+x].classList.add("displaySlide");

}
function next() {
    ADID++;
    showSlide(ADID);
    
}
function back() {
    clearInterval(intValio);
    ADID--;
    showSlide(ADID);
    
}



// ====================================================================\\
// ---------------------------------cart--------------------------------||
//=====================================================================//






