let sec = document.querySelector('section');
let btn = document.querySelector('button');

arr =["yash ","raj","singh"]

btn.addEventListener("click", function(){

    let h1 = document.createElement("h1")

    let a = Math.floor(Math.random()*arr.length)

        h1.innerHTML = arr[a]
    
    let x = Math.random()*100
    let y = Math.random()*100
    let rot = Math.random()*360
    
    
    h1.style.position ="absolute"
    
    h1.style.left = x +"%"
    h1.style.top = y +"%"
    
    h1.style.color = "white"
    h1.style.rotate = rot+"deg"
    
    sec.appendChild(h1)
})