/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   FADE UP ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach(element => {
    observer.observe(element);
});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("text-gold");

        const href = link.getAttribute("href");

        if (href === `#${current}`) {
            link.classList.add("text-gold");
        }

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });

    });

});


/* ==========================================
   FLOATING CHAT BUTTON
========================================== */

const chatButton = document.getElementById("chatButton");

if (chatButton) {

    chatButton.addEventListener("click", () => {

        /*
         * Ganti nomor WhatsApp di bawah ini
         * Format: 628xxxxxxxxxx
         */

        const phone = "6285729693588";

        const message = encodeURIComponent(
            "Halo ADVOCATUS, saya ingin berkonsultasi mengenai kebutuhan hukum saya."
        );

        window.open(
            `https://wa.me/${phone}?text=${message}`,
            "_blank"
        );

    });

}


/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button, a").forEach(element => {

    element.addEventListener("mousedown", function (e) {

        if (this.tagName !== "BUTTON" && !this.classList.contains("bg-gold")) {
            return;
        }

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.getBoundingClientRect().left - radius}px`;

        circle.style.top =
            `${e.clientY - this.getBoundingClientRect().top - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
            .getElementById("preloader")
            .classList
            .add("hide");

    },1800);

});

const dot=document.getElementById("cursor-dot");
const outline=document.getElementById("cursor-outline");

document.addEventListener("mousemove",(e)=>{

    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";

    outline.style.left=e.clientX-20+"px";
    outline.style.top=e.clientY-20+"px";

});

document
.querySelectorAll("a,button,.service-card,.case-card")
.forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        outline.classList.add("cursor-hover");

    });

    el.addEventListener("mouseleave",()=>{

        outline.classList.remove("cursor-hover");

    });

});

const hero=document.getElementById("hero");

if(hero){

    hero.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*20;
        const y=(e.clientY/window.innerHeight-.5)*20;

        heroImage.style.transform=
            `translate(${x}px,${y}px)`;

        heroFrame.style.transform=
            `translate(${x*0.5}px,${y*0.5}px)`;

        heroTitle.style.transform=
            `translate(${x*0.3}px,${y*0.3}px)`;

    });

}

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let current=0;

            const increment=target/80;

            const update=()=>{

                current+=increment;

                if(current<target){

                    counter.innerText=Math.floor(current);

                    requestAnimationFrame(update);

                }else{

                    if(target===98){

                        counter.innerText="98%";

                    }else{

                        counter.innerText=target+"+";

                    }

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* ================= TESTIMONIAL ================= */

const slides=document.querySelectorAll(".testimonial-slide");

let currentSlide=0;

if(slides.length){

    setInterval(()=>{

        slides[currentSlide]
            .classList
            .remove("active");

        currentSlide++;

        if(currentSlide>=slides.length){
            currentSlide=0;
        }

        slides[currentSlide]
            .classList
            .add("active");

    },5000);

}

/* ================= STAGGER ================= */

const staggerElements=document.querySelectorAll(
    ".service-card,.case-card,.timeline-item"
);

staggerElements.forEach((el,index)=>{

    el.style.transitionDelay=`${index*100}ms`;

});

/* ================= WA TOOLTIP ================= */

const tooltip = document.getElementById("waTooltip");

if (tooltip) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            tooltip.classList.add("show");

        }

    });

    setTimeout(() => {

        tooltip.classList.remove("show");

    }, 12000);

}

/* ==========================================
   GOOGLE SPREADSHEET FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = this.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerText = "Mengirim...";

        const formData = new FormData();

        formData.append(
            "name",
            document.getElementById("name").value
        );

        formData.append(
            "email",
            document.getElementById("email").value
        );

        formData.append(
            "subject",
            document.getElementById("subject").value
        );

        formData.append(
            "message",
            document.getElementById("message").value
        );

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwJoA9rxPeFZ9vItdSZhxQ2VMH_D1Pb3jEASZRejlUu3aO5I0CxhiNVwNRqxKTVoqCG/exec",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.text();

            if (result === "success") {

                document.getElementById("formStatus").innerText = "✓ Pesan berhasil dikirim.";

                contactForm.reset();

            } else {

                document.getElementById("formStatus").innerText = "✕ Gagal mengirim pesan.";

            }

        } catch (error) {

            console.error(error);

            alert("Terjadi kesalahan.");

        }

        submitBtn.disabled = false;
        submitBtn.innerText = "Kirim Pertanyaan";

    });

}