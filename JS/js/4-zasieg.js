// zmienna globalna - deklarowana poza jakimkolwiek blokiem kodu
let number = 101; 

// const addNumber = () => {
//     let number = 5;
//     let newNumber = 14;


// }
// addNumber();

if(true == true){
    let number = 5;
    let newNumber = 14;
    var zmiennaVar = 120;
    console.log(`Zmienne lokalne w bloku kodu: ${number} i ${newNumber} i ${zmiennaVar}`);
}

// zwrócenie zmiennnej lokalnej do przestrzeni globalnej
const zasiegZmiennejVar = () => {
    var liczba = 100; 
}

const wynikDzialaFunkcji = zasiegZmiennejVar()
console.log(wynikDzialaFunkcji);
// console.log(liczba);
// console.log(number);
// console.log(zmiennaVar);
// console.log(newNumber);

// zwrócenie zmiennej lokalnej do przestrzeni globalnej - sposób 2 - niezalecany
var liczba2;
const zasiegZmiennejVar2 = () => {
    liczba2 = 100;
}
zasiegZmiennejVar2();
console.log(liczba2);