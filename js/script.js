document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       MOBILE NAV
    ------------------------- */

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".desktop-nav");

    if (toggle && nav) {

        const menuIsOpen = () => nav.classList.contains("mobile-open");

        const updateMenuState = () => {
            const isOpen = menuIsOpen();
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
            document.body.classList.toggle("menu-open", isOpen);
        };

        const closeMobileMenu = () => {
            nav.classList.remove("mobile-open");
            updateMenuState();
        };

        toggle.addEventListener("click", () => {
            nav.classList.toggle("mobile-open", !menuIsOpen());
            updateMenuState();
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && menuIsOpen()) {
                closeMobileMenu();
                toggle.focus();
            }
        });

        updateMenuState();

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                closeMobileMenu();

            });

        });

        // Chiude il pannello quando l'utente prova a scorrere la pagina.
        window.addEventListener("scroll", () => {

            if (nav.classList.contains("mobile-open")) {

                closeMobileMenu();

            }

        }, { passive: true });

    }


    /* -------------------------
       HEADER ON SCROLL
    ------------------------- */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* -------------------------
       SIMPLE REVEAL
    ------------------------- */

    const elements = document.querySelectorAll(
        ".product-card, .food-item, .values-list article"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* -------------------------
       OFFER ROTATOR
    ------------------------- */

    const offerCard = document.querySelector(".offer-content");

    if (offerCard) {

        const offers = Array.from(offerCard.querySelectorAll(".offer-slide"));
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let activeOffer = 0;
        let offerTimer;
        let isPaused = reduceMotion.matches;

        const showOffer = (index) => {
            offers[activeOffer].classList.remove("is-active");
            offers[activeOffer].setAttribute("aria-hidden", "true");
            activeOffer = (index + offers.length) % offers.length;
            offers[activeOffer].classList.add("is-active");
            offers[activeOffer].setAttribute("aria-hidden", "false");
        };

        const previous = offerCard.querySelector(".offer-nav-prev");
        const next = offerCard.querySelector(".offer-nav-next");
        const toggle = offerCard.querySelector(".offer-nav-toggle");

        const stopOfferTimer = () => {
            if (offerTimer) {
                window.clearInterval(offerTimer);
                offerTimer = undefined;
            }
        };

        const updateToggle = () => {
            toggle?.setAttribute("aria-pressed", String(isPaused));
            if (toggle) {
                toggle.textContent = isPaused ? "▶" : "Ⅱ";
                toggle.setAttribute("aria-label", isPaused ? "Riprendi il carosello" : "Metti in pausa il carosello");
            }
        };

        const startOfferTimer = () => {
            stopOfferTimer();
            if (offers.length > 1 && !isPaused) {
                offerTimer = window.setInterval(() => {
                    showOffer(activeOffer + 1);
                }, 6000);
            }
        };

        [previous, next].forEach((button) => button?.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            showOffer(activeOffer + (button === next ? 1 : -1));
            startOfferTimer();
        }));

        toggle?.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isPaused = !isPaused;
            updateToggle();
            startOfferTimer();
        });

        updateToggle();
        startOfferTimer();

    }

});
