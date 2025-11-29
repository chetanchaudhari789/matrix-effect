let para = document.querySelector("p");
let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let text = para.innerText;



para.addEventListener("mouseenter",()=>{


    let iteration = 0;


function randomText(){
    let str = text.split("").map((char,index)=>{

        if(index<iteration){
            return char;
        }
        return character.split("")[Math.floor(Math.random()*52)]
    }).join("");
    
    para.innerText = str;
        iteration += 0.45;
        console.log(iteration);
}



setInterval(randomText,20);

})
