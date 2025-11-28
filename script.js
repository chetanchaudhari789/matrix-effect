let para = document.querySelector("p");
let Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text = para.innerText;


para.addEventListener("mouseenter",()=>{



    let random = setInterval(() => {
        const str = text.split('').map((char,index)=>{
        return Characters.split("")[Math.floor(Math.random()*53)]
    }).join("");

    para.innerText = str;
    }, 30);

       setTimeout(() => {
        clearInterval(random,200);
        para.innerText = text;
       }, 400);
})


