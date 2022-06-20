const buton = document.getElementById("buton")
const div = document.getElementById("boxes")
buton.addEventListener("click",function(){

    let color = ["red","blue","brown"]
    let random = color[Math.floor(Math.random()*color.length)]
    div.style.backgroundColor = random
})