
const list = document.querySelectorAll('.advisement img');
let ADID =0;
let x = 1;
let intValio =null;
intValioslider();

function intValioslider() {
    if (list.length === 0) return; 


    list.forEach(img => img.classList.remove("displaySlide"));
    list[ADID].classList.add("displaySlide");
    list[(ADID + x) % list.length].classList.add("displaySlide");

    if (intValio) clearInterval(intValio); 
    intValio = setInterval(next, 2000);
}
function next() {
    ADID++;
    showSlide(ADID);
    
}
function showSlide(i){
    
    if (i>=list.length-1) {
        ADID = 0;
    } 
    list.forEach(list =>{
       
        list.classList.remove("displaySlide");
    })
    list[ADID].classList.add("displaySlide");
    list[ADID+x].classList.add("displaySlide");
}



// ====================================================================\\
// ---------------------------------cart--------------------------------||
//=====================================================================//




// const itemButtons = document.querySelectorAll('.items1 button');
// const ordersList = document.querySelectorAll('.ordersLest');
// const formButton = document.querySelector('.BillingInformation button');

// function addToCart(item) {
//     console.log("Item added to cart:", item);
// }

// itemButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         // addToCart(button); 
//     });
// });

// formButton.addEventListener("click", () => {
   
//     alert('oh no');
// });

