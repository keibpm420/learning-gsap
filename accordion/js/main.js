const accordion = () => {
    const details = document.querySelectorAll(".js-details");
    const isOpen = "is-open";

    if (!details.length) return;

    details.forEach((detail) => {
        const summary = detail.querySelector(".js-summary");
        const contents = detail.querySelector(".js-contents");

        if (!summary || !contents) return;

        summary.addEventListener("click", (e) => {
            e.preventDefault();

            if (!summary || !contents) return;

            if (detail.open) {
                detail.classList.remove(isOpen);

                gsap.to(contents, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,

                    onComplete: () => {
                        detail.removeAttribute("open");
                    },
                });
            } else {
                detail.setAttribute("open", "true");
                detail.classList.add(isOpen);

                gsap.fromTo(
                    contents,
                    {
                        height: 0,
                        opacity: 0,
                    },
                    {
                        height: "auto",
                        opacity: 1,
                        duration: 0.3,
                    }
                );
            }
        });
    });
};

accordion();
