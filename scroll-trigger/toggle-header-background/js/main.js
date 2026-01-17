const initializeToggleHeaderOnScroll = () => {
    const headerElement = document.querySelector(".js-header");
    const triggerElement = document.querySelector(".js-header-trigger");

    if (!headerElement || !triggerElement) return;

    const setGreyBackground = () => {
        gsap.to(headerElement, {
            backgroundColor: "rgb(221 221 221 / 1)",
            duration: 0.5,
            ease: "power4.out",
        });
    };

    const setTransparentBackground = () => {
        gsap.to(headerElement, {
            backgroundColor: "rgb(221 221 221 / 0)",
            duration: 0.5,
            ease: "power4.out",
        });
    };

    ScrollTrigger.create({
        markers: true,
        trigger: triggerElement,

        start: "bottom top",

        onEnter: () => setGreyBackground(),
        onEnterBack: () => setTransparentBackground(),
    });
};

initializeToggleHeaderOnScroll();
