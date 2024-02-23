//console.log('test');

//- Dichiaro l'array
const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

//console.log(slides); //lista immagini array


//- Dichiaro una variabile con valore 0 per indicare la prima posizione dell'array
let imgActive = 0;
//console.log(slides[imgActive]); //immagine nella prima posizione dell'array


//- Dichiaro una variabile che vada a prendere la prima classe scelta dal documento
const slidesElement = document.querySelector('.slides');
//console.log(slidesElement); //seleziona la prima classe .slider del documento

//- Seleziono gli elementi della DOM
const preElement = document.querySelector('.pre');
const nextElement = document.querySelector('.next');
console.log(preElement, nextElement);

//-Avvio un FOR per ciclare le immagini
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    //console.log(slide); //printa la slide valore index

    let slideUp = `<img class="${i === imgActive ? 'active' : ''}" src="./assets/img/${slide}">`;

    //- Printo il tag img con percorso e classe sull'html
    slidesElement.innerHTML += slideUp;
    //console.log(slideUp);//img con classe e percorso

    //slidesElement.insertAdjacentElement('beforeend', slideUp);
};



//- Aggiungo gli event lister abbinati ai bottoni per scorrere le immagini
preElement.addEventListener('click', function () {
    //console.log('indietro'); al click printo indietro

    //- Ad ogni click dell'event lister decremento il valore dell'array
    imgActive--;
    //console.log(imgActive); check per l'incremento dell'active img
    if (imgActive < 0) {
        imgActive = slides.length - 1;
    };

    const currentImage = document.querySelector('img.active');
    //- rimuovo la classe active dell'immagine visualizzata 
    currentImage.classList.remove('active');

    //- poi la reinserisco nella prossima immagine
    const allSlide = document.querySelectorAll('.slides img');
    allSlide[imgActive].classList.add('active');

})

nextElement.addEventListener('click', function () {
    //console.log('avanti'); al click printo avanti

    //- Ad ogni click dell'event lister incremento il valore dell'array
    imgActive++;
    //console.log(imgActive); check per l'incremento dell'active img

    if (imgActive > slides.length - 1) {
        imgActive = 0;
    };

    const currentImage = document.querySelector('img.active');
    //- rimuovo la classe active dell'immagine visualizzata 
    currentImage.classList.remove('active');

    //- poi la reinserisco nella prossima immagine
    const allSlide = document.querySelectorAll('.slides img');
    allSlide[imgActive].classList.add('active');

})