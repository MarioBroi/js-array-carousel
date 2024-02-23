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

//-Avvio un FOR per ciclare le immagini
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    //console.log(slide); //printa la slide valore index

    let slideUp = `<img class="${i === imgActive ? 'active' : ''}" src="./assests/img/${slide}">`;

    //- Printo il tag img con percorso e classe sull'html
    slidesElement.innerHTML += slideUp;
    console.log(slideUp);//img con classe e percorso
}