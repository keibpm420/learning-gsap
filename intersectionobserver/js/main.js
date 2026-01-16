const intersectionObserver = () => {
    const headerElement = document.querySelector(".js-header");
    const triggerElement = document.querySelector(".js-scrollTarget");
    const headerFixedClass = "is-fixed";

    if (!headerElement || !triggerElement) return;

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    const showHeader = () => {
        headerElement.classList.add(headerFixedClass);
        gsap.to(headerElement, {
            y: 60,
            duration: 0.15,
            ease: "power4.out",
        });
    };

    const hideHeader = () => {
        gsap.to(headerElement, {
            y: 0,
            duration: 0.15,
            ease: "power4.out",
            onComplete: () => {
                headerElement.classList.remove(headerFixedClass);
            },
        });
    };

    const headerVisibilityHandler = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                hideHeader();
            } else {
                showHeader();
            }
        });
    };

    const scrollObserver = new IntersectionObserver(headerVisibilityHandler, observerOptions);
    scrollObserver.observe(triggerElement);
};

intersectionObserver();
