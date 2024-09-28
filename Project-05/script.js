gsap.to("p", {
  y: 200,
  duration: 1,
//   delay: 1,
  opacity: 0,
  onComplete: () => {
    gsap.to("p", {
      y: 0,
      duration: 1,
    //   delay: 1,
      opacity: 1,
    });
  },
});
