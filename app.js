
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


const itemButtons = document.querySelectorAll('.items1 button, .items2 button');
const ordersList = document.querySelector('.orderList');




itemButtons.forEach(button => {
    button.addEventListener("click", () => {
        const newDiv = document.createElement('div');
        const itemId = button.getAttribute('data-id');
        const itemDiv = document.getElementById(itemId);
        const span = document.createElement('span');
        span.textContent = 1; // Set the text or content of the span

        // Set class and content for newDiv
        newDiv.setAttribute("class", "OrdersItem");
        newDiv.innerHTML = itemDiv.innerHTML;

        // Append the span to newDiv
        newDiv.appendChild(span);

        // Append the new div to the orders list
        ordersList.appendChild(newDiv);
    });
});
// --------------------------------------- cloes cart-------------
let iconCart = document.querySelector(".icon");
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')

})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')

})
// itemButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const newDiv = document.createElement('div');
//         newDiv.setAttribute('class' ,'.OrdersItem');
//         newDiv.innerHTML= 'first'
//         newDiv.prepend('orderList');

//     });
// });

// formButton.addEventListener("click", () => {
   
//     alert('oh no');
// });

