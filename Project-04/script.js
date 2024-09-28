// const btn = document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//     gsap.to(btn,{
//         scale:0,
//         opacity:0,
//         duration:1,
//         borderRadius: "50%"
//     })
// })

gsap.from("main", {
    scaleX: 0,
    // y: "100%",
    // x:"-100%",
    duration: 3,
    transformOrigin: "bottom center", // Animates from the left
    ease: "elastic.out(1, 0.5)", // Elastic ease for a bouncy effect
    rotation: 360, // Adds rotation during the animation
    opacity: 0, // Fade in effect
    onComplete: () => {
      console.log("Animation complete!"); // Optional callback
    }
  });
  