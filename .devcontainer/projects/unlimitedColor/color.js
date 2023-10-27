const hex = "0123456789ABCDEF";
let intervalId

const randomColor = function () {
    let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeColor() {
  document.body.style.backgroundColor = randomColor();
  
}

function startChangingColor(){
    if(!intervalId){
        
        intervalId =   setInterval(changeColor,1000)
    }
}

document.querySelector("#start").addEventListener("click", startChangingColor);

function stopChangingColor(){
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('stop').addEventListener('click',stopChangingColor)