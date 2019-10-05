let kolekcjaAut = [];


class samochod {
    constructor(marka, model, przebieg, silnik, rok, kolor){
        this.marka = marka;
        this.model = model;
        this.przebieg = przebieg;
        this.silnik = silnik;
        this.rok = rok;
        this.kolor = kolor;
    }

    wyswietlInfo(){
        document.body.insertAdjacentHTML('beforeend',`
        Samochód\n
        Marka: ${this.marka}\n;
        Model: ${this.model}\n;
        Przebieg: ${this.przebieg}\n;
        Silnik: ${this.silnik}\n;
        Rok: ${this.rok}\n;
        Kolor: ${this.kolor}\n;
        </br>
        `);
    }

    zapiszDoBazy (){
        kolekcjaAut.push(this);
    }
}

let auto1 = new samochod(
    'BMW' ,
    'X6' ,
    50000 ,
    'diesel' ,
    2017 ,
    'zielony'
);

auto1.wyswietlInfo();
auto1.zapiszDoBazy();

auto1 = new samochod(
    'Audi',
    'A6',
    4000,
    'diesel',
    2019,
    'czerwone'
);
auto1.wyswietlInfo();
auto1.zapiszDoBazy();


// console.log(kolekcjaAut);

console.log(kolekcjaAut[0].marka);
kolekcjaAut.forEach(function(elementTablicy, indexTablicy){
    console.log(elementTablicy.marka, elementTablicy.model, elementTablicy.kolor, elementTablicy);



})