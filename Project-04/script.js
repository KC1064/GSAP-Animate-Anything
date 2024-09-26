const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    gsap.to(btn,{
        scale:0,
        opacity:0,
        duration:1,
        borderRadius: "50%"
    })
})