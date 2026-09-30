document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       MOBILE NAV
    ------------------------- */

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".desktop-nav");

    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

        });

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