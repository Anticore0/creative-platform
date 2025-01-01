new Splide('#slider1', {
    type: 'loop',
    perPage: 5,
    gap: '1.1em'
}).mount();
var splide = new Splide('#slider2', {
    arrows: false,
    perPage: 1,

});
const track = document.querySelector('#slider2 .splide__track');
const list = track.querySelector('#slider2 .splide__list');

splide.on('moved', (index) => {
    console.log(`Moved to slide: ${index}`);
    const translateX = `${index * -100}%`;
    list.style.transform = `translateX(${translateX})`;
});

splide.mount();