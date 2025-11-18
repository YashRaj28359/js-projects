let btn = document.querySelector('button')

let h2 = document.querySelector('.elem h2')
let inner = document.querySelector('#inner')


btn.addEventListener("click",function(){

    let grow = 0
    btn.style.pointerEvents= "none"
    btn.style.backgroundColor= "grey"

    let rand = 50+Math.floor(Math.random()*10)
   
    


    let int = setInterval(() => {
        
        grow++
        
        inner.style.width= grow+"%"
        h2.innerHTML=grow+"%"

        
        
        
    }, rand);


    

    setTimeout(() => {

        clearInterval(int);
            btn.innerHTML="Downloaded"


        
    }, rand*100);

})