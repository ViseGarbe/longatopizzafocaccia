document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       MOBILE NAV
    ------------------------- */

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".desktop-nav");

    if (toggle && nav) {

        const closeMobileMenu = () => {

            nav.classList.remove("mobile-open");
            document.body.classList.remove("menu-open");

        };

        toggle.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");
            document.body.classList.toggle("menu-open", nav.classList.contains("mobile-open"));

        });

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

        let touchStartY = 0;

        nav.addEventListener("touchstart", event => {

            touchStartY = event.touches[0].clientY;

        }, { passive: true });

        nav.addEventListener("touchmove", event => {

            const touchDistance = Math.abs(event.touches[0].clientY - touchStartY);

            if (touchDistance > 8) {

                closeMobileMenu();

            }

        }, { passive: true });

        nav.addEventListener("wheel", closeMobileMenu, { passive: true });

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

});
