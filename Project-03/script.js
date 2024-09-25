function breakText() {
  let text = document.querySelector("h1").textContent;
  let h1 = document.querySelector("h1");

  var cluster = "";

  let splittedText = text.split("");

  let halfLen = Math.floor(splittedText.length/2);
//   console.log(halfLen)

  splittedText.forEach(function (e,idx) {
    if(idx < halfLen){
        cluster += `<span class="a">${e}</span>`
    }else{
        cluster += `<span class="b">${e}</span>`
    }
  });

  h1.innerHTML = cluster;
}
breakText();



gsap.from("h1 .a",{
    y:100,
    duration: 0.7,
    stagger: 0.15,
    opacity:0,
    delay:0.4
})

gsap.from("h1 .b",{
    y:100,
    duration: 0.7,
    stagger: -0.15,
    opacity:0,
    delay:0.5
})
