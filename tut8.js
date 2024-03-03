console.log("colors");

// let boxes=document.getElementsByClassName("box");

// console.log(boxes);

function random() {
let color1 = Math.random()*135;
let color2 = Math.random()*135;
let color3 = Math.random()*135;
return `rgb(${color1} ${color2} ${color3})`;

}
document.querySelectorAll(".box").forEach(element => {
    console.log(element)
    element.style.backgroundColor = random();
    element.style.Color = random();
});
