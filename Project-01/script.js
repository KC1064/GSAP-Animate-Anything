var main = document.querySelector('#main');
var cursor = document.querySelector("#cursor");
var image = document.querySelector('#image')

main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 0.8,
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 3.5,
        fontSize: 4,
        backgroundColor: "#f0ffff4a",
        borderColor: "#fff", 
        borderWidth: '0.5', 
        borderStyle: 'solid',
        color: "#fff"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#fff",
    })
})