let init = false;
let swiper = Swiper;

const deleteBtn = document.getElementById("delete-icon");
const videoBtn = document.querySelector('.main__background--video');

const swiperMode = () => {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    if(mobile.matches) {
        if(!init) {
            init = true
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    },
                });
        }
    }
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', swiperMode)
window.addEventListener('resize', swiperMode)
    

videoBtn.addEventListener('click', function() {
    let modal = document.querySelector(".modal");
    modal.style.display = "block"
});

deleteBtn.addEventListener('click', function() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none"
});





