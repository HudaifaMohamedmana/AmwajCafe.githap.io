
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



// =======================================================================\\
// ------------------------------------cart-------------------------------||
// =======================================================================//


const itemButtons = document.querySelectorAll('.items1 button, .items2 button');
const ordersList = document.querySelector('.orderList');
const iconContSpan =document.querySelector('.CortIcon span');
// console.log(iconContSpan)


itemButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemId = button.getAttribute('data-id');
        const itemDiv = document.getElementById(itemId);
        iconContSpan.textContent++;
        // iconContSpan++
        let existingDiv = ordersList.querySelector(`[data-item-id="${itemId}"]`);
        
        if (existingDiv) {
            const span = existingDiv.querySelector('span');
            span.textContent = parseInt(span.textContent) + 1;
        } else {
            const newDiv = document.createElement('div');
            newDiv.setAttribute("class", "OrdersItem");
            newDiv.setAttribute("data-item-id", itemId); 
            
            newDiv.innerHTML = itemDiv.innerHTML;
            const span = document.createElement('span');
            span.textContent = '1';
            newDiv.appendChild(span);
            ordersList.appendChild(newDiv);
        }
        

    });
});

// --------------------------------------- cloes cart-------------
let iconCart = document.querySelector(".icon");
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let formCheckOut = document.querySelector('.chekout');



iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')

})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')

})

formCheckOut.addEventListener('click', () => {
    const orderList =document.querySelectorAll(".orderList div");

    if (orderList.length <= 0) {
        alert('There is nothing to check out');
        return; 
    }else{

    formCheckOut.style.backgroundColor = "red";

    window.location.href = 'cart.html';
}
});
const formButton = document.querySelector('.formDiv button');

formButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    alert('thanks for yor purches');

});

// ------------------------- form --------------------------------------------------------------------------
// const formButton = document.querySelector('.formDiv form');

// formButton.addEventListener("click", (event) => {
//     event.preventDefault(); 

//     alert('thanks for yor purches');
// });
// document.querySelector('.formDiv form').addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent form submission

//     alert('Thanks for your purchase!');
// });
