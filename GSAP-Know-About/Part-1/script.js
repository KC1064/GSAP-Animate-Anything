//----------------Box Animation----------------
// gsap.to("#box1",{
//     x:300,
//     duration:3, // Animation goes on for 3 seconds
//     delay:1 // it starts after 1 sec
// })

// // gsap.to("#box2",{
// //     x:100,
// //     y:50,
// //     duration:4,
// //     delay:2
// // })

// gsap.from("#box2",{
//     x:300,
//     duration:3, // Animation goes on for 3 seconds
//     delay:1 // it starts after 1 sec
// })

// gsap.to("#box1",{
//     x:400,
//     duration:3,
//     delay:4,
//     rotate:360,
//     borderRadius:"100",
//     backgroundColor:"pink",
//     scale:"0.4"
// })

// gsap.from("#box1",{
//     x:400,
//     duration:3,
//     delay:0,
//     rotate:360,
//     borderRadius:"100",
//     backgroundColor:"pink",
//     scale:"0.4"
// })

//--------------------Text Animation----------------

// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     delay:1,
//     y:30,
//     stagger:-1
// })

// gsap.to("span",{
//     opacity:0,
//     color:"red",
//     duration:2,
//     delay:1,
//     y:30,
//     stagger:1
// })

//--------------Repeat Animation or Yoyo---------------

// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotate:90,
//     borderRadius:"50%",
//     repeat:-1, //for infinte
//     yoyo:true, //for back and forth
// })

//----------------------Navbar using timeline-------------

var tl = gsap.timeline();

tl.from("h2", {
  opacity: 0,
  duration: 0.5,
  y: -20,
  delay: 0.2,
});

tl.from("h4", {
  opacity: 0,
  duration: 0.6,
  y: -20,
  stagger:0.3
});

tl.from("h1",{
    opacity:0,
    duration:1,
    scale:0.2
})


