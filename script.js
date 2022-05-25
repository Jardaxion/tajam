//Изменение кружечков
let circles = document.querySelectorAll('.header__content_circles-circle');

circles.forEach(circle => {
    circle.addEventListener('click', function() {
        if(!this.classList.contains('active')){
            removeActive();
            this.classList.add('active');
        }
    })
});

function removeActive() {
    circles.forEach(circle => {
        circle.classList.remove('active');
    })
}
//Слайдер
let allImages = document.querySelectorAll('.peopleSay__slider__images img')
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let count = 3;
let disabledPrev = false;
let disabledNext = false;

next.addEventListener('click', () => {
    slideNext();
})

prev.addEventListener('click', () => {
    slidePrev();
})

function slideNext() {
    disabledPrev=false;
    if(!disabledNext){
        count++;
        document.getElementById(count-1).classList.remove('active');
        document.getElementById(count).classList.add('active');
        document.getElementById(count-1+"Text").classList.remove('active');
        document.getElementById(count+"Text").classList.add('active');
    }
    if(count==allImages.length){
        disabledNext = true;
    } else{
        disabledNext = false;
    }
}

function slidePrev() {
    disabledNext = false;
    if(!disabledPrev){
        count--;
        document.getElementById(count+1).classList.remove('active');
        document.getElementById(count).classList.add('active');
        document.getElementById(count+1+"Text").classList.remove('active');
        document.getElementById(count+"Text").classList.add('active');
    }
    if(count==1){
        disabledPrev = true;
    } else{
        disabledPrev = false;
    }
}

