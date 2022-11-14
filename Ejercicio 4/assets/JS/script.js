let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");

let color = document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "#709fb0";
    } else if (event.key === 's') {

        color = "#a7c5eb";
    } else if (event.key === 'd') {

        color = "#413c69";
    } 
    
    console.log(color);
})


div1.addEventListener("click", function(){
    div1.style.backgroundColor = color;
});

div2.addEventListener("click", function(){
    div2.style.backgroundColor = color;
});

div3.addEventListener("click", function(){
    div3.style.backgroundColor = color;
});

div4.addEventListener("click", function(){
    div4.style.backgroundColor = color;
});
