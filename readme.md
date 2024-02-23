# Instrucions
- Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

- MILESTONE 1
    - Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
- MILESTONE 2
    - Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
    - Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
    - Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
- MILESTONE 3
    - Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

## Steps
- MILESTONE 1
    - Preparo l'HTML e il foglio di stile con le diverse classi

- MILESTONE 2
    - Dichiaro l'array
    - Dichiaro una variabile con valore 0 per indicare la prima posizione dell'array
    - Dichiaro una variabile che vada a prendere la prima classe scelta dal documento
    - Avvio un FOR per ciclare le immagini
    - Printo il tag img con percorso e classe sull'html
    
- MILESTONE 3
    - Seleziono gli elementi della DOM
    - Aggiungo gli event lister abbinati ai bottoni per scorrere le immagini
    - Ad ogni click dell'event lister incremento il valore dell'array
        - poi rimuovo la classe dell'immagine visualizzata 
        - poi la reinserisco nella prossima immagine

### Tools
- class and inputs for html and css
- const / let
- array []
- for
- if/else
- event.lister
- class.list