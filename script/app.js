let food; 
let beverage;
let dessert;
let total;

window.onload = () => {
    let selecao = document.querySelectorAll(".orderwrapper> div");
    for (let i = 0; i < selecao.length; i++) {
        selecao[i].onclick = selectOrder;
    }
}

function selectOrder() {
    if (this.classList.contains("food") === true) {
        food = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".food-selected");
        if (elemento !== null) {
            elemento.classList.toggle("food-selected");
        }
        this.classList.toggle("food-selected");

    } else if (this.classList.contains("beverage") === true) {
        beverage = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".beverage-selected");
        if (elemento !== null) {
            elemento.classList.toggle("beverage-selected");
        }
        this.classList.toggle("beverage-selected");

    } else {
        dessert = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".dessert-selected");
        if (elemento !== null) {
            elemento.classList.toggle("dessert-selected");
        }
        this.classList.toggle("dessert-selected");
    }
    if (document.querySelector(".food-selected") !== null &&
        document.querySelector(".beverage-selected") !== null &&
        document.querySelector(".dessert-selected") !== null) {
        total = (food[1] + beverage[1] + dessert[1]).toFixed(2);
        console.log(total)
        let confirm = document.querySelector(".confirmbutton");
        confirm.classList.add("confirm-order");
        confirm.innerHTML = "Confirm Order";
        confirm.onclick = confirmOrder;
    }
}