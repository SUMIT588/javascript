const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if ((height === "" || isNaN(height) || height < 0)) {
    results.innerHTML = `Height is invalid: ${height}`;
  }else if ((weight === "" || isNaN(weight) || weight < 0)) {
    results.innerHTML = `Weight is invalid ${weight}`;
  } else{
    const bmi = (weight / ((height*height)/1000)).toFixed(2)
    results.style.color = 'blue'
    results.innerHTML = bmi
  } 
});
