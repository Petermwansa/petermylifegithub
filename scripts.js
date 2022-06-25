cursor = () => {
    var cursor = document.getElementById("cursor");

    document.onmousemove = function(e) {
        cursor.style.left = (e.pageX - 25) + "px";
        cursor.style.top = (e.pageY - 25) + "px";
        cursor.style.display = "block";
    }
}

modal = () => {
    document.addEventListener("click", function (e){
        if(e.target.classList.contains("gallery-item")) {
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
            myModal.show();
        }
    });
};



//CARDS SECTION

const cards = document.querySelectorAll('.card');

//Cards callback function
const cardObserverCallback = (cardsToWatch, cardObserver) => {
    cardsToWatch.forEach(cardToWatch => {
        if(cardToWatch.isIntersecting) {
            cardToWatch.target.classList.remove('card');
            cardObserver.unobserve(cardToWatch.target);
        }
    });
}

//card option
const cardObserverOptions = {
    threshod: .5
}

//card oberver
const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);

//card observer on card
cards.forEach(card => {
    cardObserver.observe(card)
})

load = () => {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function() {
        loader.style.display = "none";
    });
};



//SCROLLER SECTION

upwards = () => {
    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 500 )
    })

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}


navbar = () => {

};


nav = () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
    
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            console.log("Clicked on the burger");
        });
    }
}





cursor();

modal();

upwards();

load();









