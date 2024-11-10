/*
// let - ole valmis, vahemälus luuakse uus muutuja
let fruit = ['apple', 'banana', 'orange', 'watermelon']; // konteineri nime sees mitmeid andmeid. jutumärgid, et kood ei arvaks et oleks muutuja nt väärtusega vaid lihtsalt andmed
let fruitLength = fruit.length; // massiivi pikkus
console.log(fruitLength); // näitab, et massiiv on 4 elementi pikk
// igal massiivil on oma aadress. 1. element alati aadressil 0. Õun- 0, Bannaan- 1, Apelsiin- 2. Arbuus- 3
// massiivi pikkus alati 1 võrra suurem, kui viimase elemendi indeks
console.log(fruit[1]); // kui tahta kätte saada banaani. kohal 1 banaan
console.log(fruit[fruitLength-1]); // näitab viimast elementi
*/

const slides = document.getElementsByClassName('carousel__item'); // muutuja, mida ei hakka muutma, väärtuseid vahemälus ei saa muuta. Salvestab andmed, kus pildid asuvad
const slidesTotal = slides.length; // massiivi pikkus, mitu slaidi on. //konteiner nimega slides, kuhu salvestatakse andmed divide kohta, kus asuvad pildid
const nextButton = document.querySelector('#carousel__button--next'); // andmete (nuppude) salvestamine muutujasse
const prevButton = document.querySelector('#carousel__button--prev');

let slidePosition = 0; // manipuleerib elementide asukohta massiivis. vaikimisi asuk 0

nextButton.addEventListener('click', () => {//nupud reageerivad klikkidele. ootab klikki, kui klikk toimub läheb edasi
   
    // klikkides praegune pilt kustutatakse, kuvatakse järgmine
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible'); //olenemata slaidist, kustutab klassi nime ja slaidi leheküljelt
    }

    // kui hetkene slide position on viimane, siis järgmine mida kuvatakse peab näitama 1. elementi (indeks 0)
    if(slidePosition === slidesTotal - 1) { // kui praegu slidepos = viimane element, siis next nuppu vajutades
        slidePosition = 0; //peab kuvama siis 1. elementi
    } else { // muul juhul +1
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel__item--visible'); // annab visible klassi tagasi
});


prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible'); // kustutame kõik pildid
    }

    if(slidePosition === 0) { // mis divid kuvati, kui 1. div/elem, siis kuva viimast, muuljuhul -1
        slidePosition = slidesTotal - 1; // klikkides vasakut nuppu, kuvatakse viimast slaidi loetelust
    } else {
        slidePosition--; // muidu slaidi asukoht -1, kuvatakse 1. elementi
    }

    slides[slidePosition].classList.add('carousel__item--visible'); // määrame slaidile asukohal klassi nimega visible
});
