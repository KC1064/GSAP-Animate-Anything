gsap.to(".part1", {
    y: -500,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    onComplete: () => {
        gsap.to(".part2", {
            y: 500,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
                gsap.from("section h1", {
                    scale: 0,
                    opacity: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)"
                });
            }
        });
    }
});
