const initializeToggleCtaOnScroll = () => {
    const ctaElement = document.querySelector(".js-cta");
    const scrollTargetStartElement = document.querySelector(".js-kv");
    const scrollTargetEndElement = document.querySelector(".js-contact-form");

    if (!ctaElement || !scrollTargetStartElement || !scrollTargetEndElement) return;

    const showCta = () => {
        gsap.to(ctaElement, { autoAlpha: 1, duration: 0.3 });
    };

    const hideCta = () => {
        gsap.to(ctaElement, { autoAlpha: 0, duration: 0.3 });
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(ctaElement, { autoAlpha: 0 });

    ScrollTrigger.create({
        trigger: scrollTargetStartElement,
        start: "bottom+=100 bottom",
        endTrigger: scrollTargetEndElement,
        end: "top bottom",

        onEnter: showCta,
        onLeave: hideCta,
        onEnterBack: showCta,
        onLeaveBack: hideCta,
    });
};

initializeToggleCtaOnScroll();
