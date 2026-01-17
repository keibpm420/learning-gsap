const initializeToggleHeaderOnScroll = () => {
    const headerElement = document.querySelector(".js-header");
    const triggerElement = document.querySelector(".js-header-trigger");
    const headerFixedClass = "is-fixed";

    if (!headerElement || !triggerElement) return;

    const showHeader = () => {
        headerElement.classList.add(headerFixedClass);
        gsap.to(headerElement, {
            y: 60,
            duration: 0.2,
            ease: "power4.out",
        });
    };

    const hideHeader = () => {
        gsap.to(headerElement, {
            y: 0,
            duration: 0.2,
            ease: "power4.out",
            onComplete: () => {
                headerElement.classList.remove(headerFixedClass);
            },
        });
    };

    ScrollTrigger.create({
        trigger: triggerElement,
        start: "bottom top",

        onEnter: showHeader,
        onEnterBack: hideHeader,
    });
};

initializeToggleHeaderOnScroll();
