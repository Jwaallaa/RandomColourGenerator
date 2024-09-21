let con = document.querySelector("#box div");
let head = document.querySelector("h1");
let but = document.querySelector('#box button');
let random = ()=>{
    return Math.floor(Math.random()*255);
}



let generate = function(){
    let colour = `rgb(${random()} ,  ${random()} , ${random()})`;
    console.log("clicked")
    head.innerText =  colour;
con.style.backgroundColor = colour;
}

but.addEventListener("click",generate);
