const slider = document.querySelector('.galleries');
const prevBtn = document.querySelector('.nav-button.prev');
const nextBtn = document.querySelector('.nav-button.next');
const slides = document.querySelectorAll('.gallery-container');
const header = document.querySelector('.gallery-container');
const gallery = document.querySelector('.gallery-selector h3');

let currentPosition = 0;
// let step = slides[0].offsetWidth;

function moveSlider(direction) {
    const step = slides[0].offsetWidth;
    const stepsOnScreen = slides.length - parseInt(gallery.clientWidth / step, 10);
    const maxPosition = stepsOnScreen * step * -1;

    if (direction === 'prev') {
        currentPosition += step;
    } else {
        currentPosition -= step;
    }

    if (currentPosition > 0){
        currentPosition = 0;
    } else if(currentPosition < maxPosition) {
        currentPosition = maxPosition;
    }
    
    slider.style.marginLeft = currentPosition + 'px';

    // console.log(maxPosition, currentPosition);
}

prevBtn.addEventListener('click', function() {
    moveSlider('prev');
});
        
nextBtn.addEventListener('click', function() {
    moveSlider('next');
});

// FAQ drawer

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
    const answeButtpn = faqItem.querySelector('.answer-button');
    const answer = faqItem.querySelector('.answer');
    faqItem.addEventListener('click', () => {
        
        if (faqItem.classList.contains('open')) {
            answeButtpn.innerHTML = '+';
            faqItem.classList.remove('open');
            answer.style.display = 'none';
        } else {
            faqItem.classList.add('open');
            answeButtpn.innerHTML = '-';
            answer.style.display = 'block';
        }
    });
});



//Hide "header" element on scroll
const hero = document.querySelector('.hero');
const nav = document.querySelector('header');

let navHeight = nav.offsetHeight;
    let menuSwitchY =200;
    // if (window.innerWidth <= 992) {
    //     hero.style.marginTop = '0px';
    //     menuSwitchY = 0;
    //     navHeight = 0;
    // } 

const menuButton = document.querySelector('.menuButton');

window.onscroll = () => {
    
    if (window.scrollY >= menuSwitchY || window.innerWidth <= 992) {
        
        console.log('It works');
        menuButton.classList.add('show');
        nav.classList.add('sticky');
        hero.style.marginTop = `${navHeight}px`;
       
    } else {
        nav.classList.remove('sticky');
        nav.classList.remove('open');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.querySelector('.drop').style.display = 'none';
            document.querySelector('.freeze').style.display = 'none';
        });
        nav.classList.add('close');
        hero.style.marginTop = 0;
        // menuButton.style.display = 'none';
        menuButton.classList.remove('show');
    }
}

menuButton.addEventListener('click', () => {
    let navHeight = nav.offsetHeight;
    let menuSwitchY =200;
    if (window.innerWidth <= 992) {
        hero.style.marginTop = '0px';
        menuSwitchY = 0;
        navHeight = 0;
    } 

    if (window.innerWidth <= 992) {
    
        if (!nav.classList.contains('open')) {
            console.log('open');
            nav.classList.add('open');
            nav.classList.remove('close');
            document.querySelector('.freeze').style.display = 'block';
            // menuButton.style.display = 'none';
            menuButton.classList.remove('show');
        }
    }else{

        if (nav.classList.contains('sticky')) {
            if (!nav.classList.contains('open')) {
                console.log('open');
                nav.classList.add('open');
                nav.classList.remove('close');
                document.querySelector('.freeze').style.display = 'block';
                // menuButton.style.display = 'none';
                menuButton.classList.remove('show');
            }
        }
    }
    
});


const dropdowns = document.querySelectorAll('.dropdown');
const dropMark = document.querySelector('.dropMark');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            dropdown.querySelector('.drop').style.display = 'none';
            dropdown.querySelector('.dropdown-freeze').style.display = 'none';
            dropMark.classList.remove('fa-chevron-up');
            dropMark.classList.add('fa-chevron-down');
        } else {
            dropdown.classList.add('open');
            dropdown.querySelector('.drop').style.display = 'block';
            if (!nav.classList.contains('sticky')) {
                dropdown.querySelector('.dropdown-freeze').style.display = 'block';
            }
            dropMark.classList.remove('fa-chevron-down');
            dropMark.classList.add('fa-chevron-up');
            

        }
    });
});

document.querySelector('.freeze').addEventListener('click', () => {
    if (nav.classList.contains('sticky') || window.innerWidth <= 992) {
        closeNav();
    }
});


nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
        if (nav.classList.contains('sticky') || window.innerWidth <= 992) {
            closeNav();
        }
    });
});

document.querySelector('.close-nav').addEventListener('click', () => {
    closeNav();
});


function closeNav() {
    const nav = document.querySelector('header');
    nav.classList.remove('open');
    nav.classList.add('close');
    document.querySelector('.freeze').style.display = 'none';
    // menuButton.style.display = 'block';
    menuButton.classList.add('show');
}
