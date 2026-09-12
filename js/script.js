// ═══════════════════════════════════════════════════════
//  script.js  –  Shared across ALL pages
//  Only runs each feature when the required elements exist
// ═══════════════════════════════════════════════════════

// ── 1. Animated header text (index.html only) ──────────
const names = ["NITYA SUNDARAM", "ନିତ୍ୟ ସୁନ୍ଦରମ୍ "];
const dates  = ["ଉତ୍ତରେଶ୍ୱର, ସୋରୋ, ବାଲେଶ୍ୱର", "UTTARESWAR , SORO , BALASORE"];
const motos  = ["ସମ୍ପୂର୍ଣ୍ଣ ଶିକ୍ଷା ଏବଂ ବ୍ୟକ୍ତିତ୍ୱ ବିକାଶ ସଂସ୍ଥା", "INSTITUTION OF HOLISTIC EDUCATION AND PERSONALITY DEVELOPMENT"];

let index   = 0;
const namebox = document.getElementById("nameBox");
const datebox = document.getElementById("placeBox");
const motoBox = document.getElementById("motoBox");

if (namebox) {
    function changeText() {
        gsap.to([namebox], {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.1,
            onComplete: () => {
                index = (index + 1) % names.length;
                namebox.textContent = names[index];
                gsap.fromTo([namebox],
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut", stagger: 0.1 }
                );
            }
        });
    }

    function loop() {
        changeText();
        gsap.delayedCall(5, loop);
    }

    gsap.delayedCall(5, loop);
}


// ── 2. Hero Carousel (index.html only) ─────────────────
const carousel = document.getElementById('carousel');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const dots     = document.querySelectorAll('.carousel-dot');
const totalSlides = 6;
let currentSlide = 0;
let autoSlideInterval;

if (carousel && prevBtn && nextBtn) {

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-white/80', i === currentSlide);
            dot.classList.toggle('bg-white/40', i !== currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(i) {
        currentSlide = i;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
    nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.index));
            resetAutoSlide();
        });
    });

    startAutoSlide();
}


// ── 3. Animated counters (index.html only) ─────────────
function _countersBootstrap() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 100;

        const update = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count) + "+";
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _countersBootstrap);
} else {
    _countersBootstrap();
}
