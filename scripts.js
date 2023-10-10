// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]"); 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const {dividend, divider} = Object.fromEntries(entries); 
    const divisionResult = Math.floor(dividend / divider)
    if (dividend && divider && isNaN(divisionResult)) {
            document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>"
            console.error(new Error("Something critical went wrong. Please reload the page").stack)
          } else if ((!dividend || !divider) || !entries) {
                    result.innerText = "Division not performed. Both values are required in inputs. Try again."
          } else if (dividend < 0 || divider < 0) {
            result.innerText = "Division not performed. Invalid number provided. Try again."
                console.error(new Error("Division not performed. Invalid number provided. Try again.").stack)
          } else {
            result.innerText = divisionResult;
          }

})
