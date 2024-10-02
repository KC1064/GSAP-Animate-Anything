var tl = gsap.timeline();

gsap.from("#p1",{
    scale:0,
    duration:0.7,
    opacity:0
})

gsap.from("#p2",{
    scale:0,
    duration:0.7,
    opacity:0
})

gsap.to("#div1",{
    delay:1,
    duration:0.8,
    y:"-50vh"
})
gsap.to("#div2",{
    delay:1,
    duration:0.8,
    y:"50vh"
})