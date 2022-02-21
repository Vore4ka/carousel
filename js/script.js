let goodsList = document.querySelector('.goods__list');

let nextBtn = document.querySelector('.slider__button--next');
let prevBtn = document.querySelector('.slider__button--prev'); 

let itemsMove=0;

nextBtn.addEventListener('click', function(){
    if (itemsMove <= -3540) {
        itemsMove = 0 ;
    } else {
        itemsMove -= 1180;
    }
    goodsList.style = "transform: translateX(" + itemsMove +"px)";
});

prevBtn.addEventListener('click', function(){
    if (itemsMove >= 0) {
        itemsMove = -3540 ;
    } else {
        itemsMove += 1180;
    }
    goodsList.style = "transform: translateX(" + itemsMove +"px)";
});
