// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)

const app = new Vue({
    el: '#root',
    data: {
        
        arrImages:[
            {
                title: 'Marvel\'s Spiderman Miles Morales',
                body: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                image: 'img/01.webp',
                imageClass2: 'img-slider'
            },
            {
                title: 'Marvel\'s Spiderman Miles Morales',
                body: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                image: 'img/02.webp',
                imageClass2: 'img-slider'
            },
            {
                title: 'Marvel\'s Spiderman Miles Morales',
                body: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                image: 'img/03.webp',
                imageClass: 'img-slider'
            },
            {
                title: 'Marvel\'s Spiderman Miles Morales',
                body: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                image: 'img/01.webp',
                imageClass: 'img-slider'
            },
            {
                title: 'Marvel\'s Spiderman Miles Morales',
                body: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                image: 'img/01.webp',
                imageClass: 'img-slider'
            },
        ],

    },
    methods:{
       
    }

});