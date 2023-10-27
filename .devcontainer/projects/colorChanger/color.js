const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].style.backgroundColor = "red";
  buttons[i].addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
        case "grey":
            body.style.backgroundColor = e.target.id
            break;
        case "red":
            body.style.backgroundColor = e.target.id
            break;
        case "yellow":
            body.style.backgroundColor = e.target.id
            break;
        case "blue":
            body.style.backgroundColor = e.target.id
            break;
    
        default:
            break;
    }
  });
}
