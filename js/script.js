
/*=========== scroll navbar =============*/

const menuBtn = document.querySelector('.menu-bar');
const navigation = document.querySelector('.nav-item');
const navLinks = document.querySelectorAll('.nav-links');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navigation.classList.remove('active');
        menuBtn.classList.remove('active');
    })
})

const navBar = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
    navBar.classList.toggle("sticky", window.scrollY > 0);
});


/*=========== counter =============*/

let valueDisplays = document.querySelectorAll('.number');
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if (startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});

// ===================== scroll section active link =======================//

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href *='+ id +' ]').classList.add('active');
            });
        };
    });
};


//==================== resume pages active ===========================//

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.scrollY;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 250;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume-tabs a[href *= ' + sectionId +']').classList.add('current');
        } else {
            document.querySelector('.resume-tabs a[href *= ' + sectionId +']').classList.remove('current');
        };
    });

};

window.addEventListener('scroll', resumeActive);


//==================== testimonial slider=====================//

var swiper = new Swiper(".mySwiper", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //==================== Portfolio =====================//

let filterItems = document.querySelectorAll('.portfolio-filters li');

function activePortfolio () {
    filterItems.forEach (el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio);
})

//===== mixitup porfolio ===============

let mixerPortfolio = mixitup ('.portfolio-wrap-container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
})