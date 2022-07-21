
const oneKmPrice = 0.21

const buttonElement = document.querySelector('input[type="submit"]');
console.log(buttonElement);

buttonElement.addEventListener('click',function (){
    let kmTravel = document.getElementById('distance');
    let ticketPrice = parseFloat(kmTravel.value) * oneKmPrice ;
    let age = document.getElementById('age').value;

    if ( age < 18 ) {
        ticketPrice = ticketPrice * 0.8;
    }    
    if ( age > 65 ) {
        ticketPrice = ticketPrice * 0.6;
    }
    
    ticket_price = document.getElementById('ticket_price');

    console.dir(ticket_price);

    ticket_price.innerHTML = 'il prezzo del biglietto è di: € ' + ticketPrice.toFixed(2);

    console.log(ticketPrice);
})






//se l'età è minore di 18
// if ( age < 18 ) {
//     ticketPrice = ticketPrice * 0.8
//     console.log(ticketPrice)
// }

// //se l'età è maggiore di 65
// if ( age > 65 ) {
//     ticketPrice = ticketPrice * 0.6
//     console.log(ticketPrice)
// }





//chiedere all'utente quanti km deve fare
// let kmTravel  
// kmTravel = Math.abs(kmTravel)

// //chiedere all'utente quanti anni ha 
// let age = parseInt( prompt('how old are you?') )

// //controllare validità dei dati
// if(isNaN(age)) {
//     age = 50
// }

// if(isNaN(kmTravel)) {
//     alert('distance not valid')
// }

// //costo al km
// const oneKmPrice = 0.21

// //calcolo il prezzo in base ai km
// let ticketPrice = (kmTravel * oneKmPrice)

// console.log(kmTravel , age , ticketPrice)



