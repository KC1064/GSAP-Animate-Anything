var tl = gsap.timeline();

tl.to("#full",{
    right:0,
    duration:0.4,
})

tl.from("#full h4",{
    x:200,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5
})

tl.from("#full i",{
    opacity:0,
    duration: 0.2
})

tl.pause();

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})