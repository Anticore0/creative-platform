new Splide('#slider1', {
    type: 'loop',
    perPage: 5,
    pagination: false,
    gap: '1.1em',
    breakpoints: {
        1200: {
            perPage: 3,
        },
        900: {
            perPage: 2,
        },
        600: {
            perPage: 1,
        },
    }
}).mount();

var splide = new Splide('#slider2', {
    arrows: false,
    perPage: 1,

});
const track = document.querySelector('#slider2 .splide__track');
const list = track.querySelector('#slider2 .splide__list');

splide.on('moved', (index) => {
    const translateX = `${index * -100}%`;
    list.style.transform = `translateX(${translateX})`;
});

splide.mount();