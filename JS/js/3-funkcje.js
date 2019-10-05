function mnozenie(liczba1, liczba2, liczba3) {
    // przypisuję do zmiennej 'wynik' wynik mnożenia trzech parametrów
let wynik = liczba1 * liczba2 * liczba3;

// Tworzę tekst z wynikiem 0 2pososby - ES5 i ES6
let rezultatDzialaniaFunkcji = 'Twój wynik to: ' + wynik;
let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;

// zwracamz funkcji rezultat jej działania, wszystko poniżej return już się nie wykona
return rezultatDzialaniaFunkcji2;

// console.log(rezultatDzialaniaFunkcji, rezultatDzialaniaFunkcji2);

}
// let wynikDzialaFunkcji = mnozenie(2,2,2);
// console.log(wynikDzialaFunkcji);

// przepisanie powyższej funkcji na funkcję strzałkową

const mnozenieFatArrow = (par1, par2, par3) => {
    let wynik = par1 * par2 * par3;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;
    return rezultatDzialaniaFunkcji2; 
}

let wynikMnozeniaFatArrow = mnozenieFatArrow(3,3,3);
console.log(wynikMnozeniaFatArrow);

// Przepisanie powyższej funkcji na funkcję strzałkowo - skótowo

const mnozenieSkrotowo = (p1, p2, p3) => `Twój wynik to:  ${p1 * p2 * p3}`;
let wynikSkrotowo = mnozenieSkrotowo(1,2,3);
let wynikSkrotowo2 = mnozenieSkrotowo(4,2,3);
let wynikSkrotowo3 = mnozenieSkrotowo(3,2,3);
let wynikSkrotowo4 = mnozenieSkrotowo(1,1,3);

console.log(wynikSkrotowo, wynikSkrotowo2, wynikSkrotowo3, wynikSkrotowo4);
