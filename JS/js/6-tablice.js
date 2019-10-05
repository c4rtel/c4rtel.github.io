const samochody = [
    'honda', 
    'Zastawa' ,
    'Citroen',
    'Mazda' ,
    'Audi'
];



// dodajemy na końcu 
samochody.push('BMW' , 'Porsche');

// dodajemy na początku
samochody.unshift('Dacia' , 'Skoda');

// usuwamy z końca tablicy i zwracamy usuniety elemnt do zmiennej
let usunietyZKonca = samochody.pop();
// console.log(samochody, samochody.length);
// console.log(`Usuniety element to: ${usunietyZKonca}`);

// usuwamy z końca 3 elementy 
let usunieteZKonca3 = samochody.splice(samochody.length -3);


// zmiana tablicy na string 
let tekstZTablicy = samochody.join(`======`);
// console.log(tekstZTablicy);

// tablica ze stringa
let tablicaZeStringa = tekstZTablicy.split(`======`);
// console.log(tablicaZeStringa);

// Odwrócenie tablicy
let odwroconaTablica = samochody.reverse();
// console.log(odwroconaTablica);

// Posortowana tablica KOD TUTAJ NIE DZIAŁA, NIE SORTUJE
let posortowana = samochody.sort();
// console.log(posortowana); 

// sprawdzam czy elemnt istnieje w tablicy ver. 1 zwraca index elementu, jeśli brak zwraca -1
let czyIstniejeWTablicy = samochody.indexOf ('fiat');
// console.log(czyIstniejeWTablicy);

// sprawdzam czy elemnt istnieje w tablicy ver. 2 zwraca true albo false
let czyIstniejeWTablicy2 = samochody.includes ('Zastawa');
// console.log(czyIstniejeWTablicy2);


// Sprawdzam czy zmienna jest tablicą
let czyTablica = Array.isArray(samochody);
// console.log(czyTablica);


// metoda do przechodzenia po wszystkich elementach tablicy
samochody.forEach(function(elementTablicy, indexTablicy, tablica){
    console.log(`wartosc elementu: ${elementTablicy} | index elementu: ${indexTablicy}`);
    });

// usuwamy z początku tablicy i zwracamy usunięty element do zmiennej
let usunietyZPoczatku = samochody.shift();
// console.log(samochody, samochody.length)
// console.log(`Usunięty element z przodu to: ${usunietyZPoczatku}`);

