const checkBoxes = document.querySelectorAll(".inbox input[type='checkbox']");
// console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
    // check if they had the shift key down
    // and check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop over every singel checkbox
        checkBoxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                checkbox.checked = true
            }
        });
    }
    lastChecked = this;

}

checkBoxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck));