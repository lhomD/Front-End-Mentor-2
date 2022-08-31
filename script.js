let wrapper;
let submitBtn;
let numberEl;
let choosenNrEl;
let varnEl;

function init() {
    wrapper = document.getElementById("wrapper");
    submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", voted);

    choosenNrEl = document.getElementById("chosenNr");

    numberEl = document.querySelectorAll(".content_numbers button");
    numberEl.forEach((elem) => {
        elem.addEventListener("click", choose);
    });

    varn = document.querySelector(".varn");
} //End init
window.addEventListener("load", init);

//Coosing a number
function choose() {
    for (let i = 0; i < numberEl.length; i++) {
        numberEl[i].classList.remove("choosen");
    }
    this.classList.add("choosen");
    submitBtn.disabled = false;
    choosenNrEl.innerHTML = this.innerHTML;
}

//Function shows thanks and result
function voted() {
    let choosenNrEl = document.querySelectorAll(".choosen");

    if (choosenNrEl.length === 1) {
        wrapper.classList.add("vote");
    } else if (choosenNrEl.length === 0) {
        varn.style.transform = "translateY(0)";
        setTimeout(() => {
            varn.style.transform = "translateY(-5rem)";
        }, 2000);
    }
}
