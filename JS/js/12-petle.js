const imiona = [
    'Maciek',
    'Zosia' ,
    'Pawel' ,
    'Jola'
];

for(let i = 0; i <= imiona.length-1; i++){
    if(i%2 == 0) {
    continue;
    // break;
    }
    console.log(imiona[i]);


}
// for in - jedyna pętla po iteracji po obiektach

const obj = {
    imie: 'Adam' ,
    nazwisko: 'Nowacki' ,
    wiek: 36
} 

for(let i in obj){
    console.log(`Właściwość: ${i} :::::: Wartość właściwości: ${obj[i]}` )
}


// pętla while

let number = 10;
let iter = 0; 
let wynik = [];


while(iter <= number) {
    wynik.push(`iteracja nr ${iter +1}`);
    iter++;

}

console.log(wynik.join(` :::: `));