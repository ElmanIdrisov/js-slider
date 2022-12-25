const sliderList = document.querySelector('.slider-list');
const slide = sliderList.querySelector('div');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

let incrementSlidePosition = 0;

function toLeft() {
    if (incrementSlidePosition >= 415) {
        return;
    }

     if (incrementSlidePosition >= 0) {
        incrementSlidePosition += slide.clientWidth + 5;
        sliderList.style.transform = `translateX(-${incrementSlidePosition}px)`;
     } 
} 

function toRight () {

    if (incrementSlidePosition === 0) {
        return;
    }
    
    if(incrementSlidePosition > 0) {
        incrementSlidePosition -= slide.clientWidth + 5;
        sliderList.style.transform = 'translateX(-' + incrementSlidePosition + 'px)';
        return;
    }
    
   
}

leftButton.addEventListener ('click', () => toLeft());
rightButton.addEventListener('click', () => toRight());
