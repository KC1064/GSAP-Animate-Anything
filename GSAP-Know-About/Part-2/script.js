// gsap.from("#page2 h1",{
//     opacity:0,
//     scale: 0,
//     duration:1,
//     // rotate:180,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 55%",
//         end: "top 45%",
//         scrub: 5
//     }
// })

// gsap.from("#page2 #text1",{
//     opacity:0,
//     x: 500,
//     duration:1,
//     scrollTrigger: {
//         trigger: "#page2 #text1",
//         scroller: "body",
//         markers: true,
//         start: "top 35%",
//         // repeat: -1
//     }
// })

// gsap.from("#page2 #text2",{
//     opacity:0,
//     x: -500,
//     duration:1,
//     scrollTrigger: {
//         trigger: "#page2 #text2",
//         scroller: "body",
//         markers: true,
//         start: "top 40%",
//         // repeat: -1
//     }
// })

// gsap.from("#page2 #text3",{
//     opacity:0,
//     x: 500,
//     duration:1,
//     scrollTrigger: {
//         trigger: "#page2 #text3",
//         scroller: "body",
//         markers: true,
//         start: "top 45%",
//         // repeat: -1
//     }
// })

//---------------ANIMATION OF TEXT---------------------
// gsap.from("#page2 h4",{
//     opacity:0,
//     duration:1,
//     x:500,
//     scrollTrigger: {
//         trigger: "#page2 h4",
//         scroller:"body",
//         markers: true,
//         start: "top 45%",
//         end: "top 30%",
//         scrub: 5
//     }
// })


//Animation of Experience:
gsap.to("#page2 h1",{
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -180%",
        scrub: 2,
        pin: true
    }
})