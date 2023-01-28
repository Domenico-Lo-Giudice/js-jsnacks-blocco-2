// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde.Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let oddNumbers = document.getElementById("red");
let evenNumbers = document.getElementById("green");


for (let i = 0; i < numbers.length; i++) {

    
    if (numbers[i] % 2 == 0) {
        
        evenNumbers.innerHTML += numbers[i];
          
    } else {
        
        oddNumbers.innerHTML += numbers[i];
         
    }
}