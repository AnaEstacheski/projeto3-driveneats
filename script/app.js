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

let order = document.querySelector(".display-confirm");

function confirmOrder() {
    order.classList.remove("hidden");
    document.querySelector(".food-final").innerHTML = food[0];
    document.querySelector(".beverage-final").innerHTML = beverage[0];
    document.querySelector(".dessert-final").innerHTML = dessert[0];
    document.querySelector(".price-food").innerHTML = "R$ " + food[1].toFixed(2).replace(".", ",");
    document.querySelector(".price-beverage").innerHTML = "R$ " + beverage[1].toFixed(2).replace(".", ",");
    document.querySelector(".price-dessert").innerHTML = "R$ " + food[1].toFixed(2).replace(".", ",");
    document.querySelector(".price-final").innerHTML = "R$ " + total.replace(".", ",");
    let confirm = document.querySelector(".confirm-Order");
    confirm.onclick = sendOrder;
    let cancel = document.querySelector(".cancel-order");
    cancel.onclick = cancelOrder;
}

function cancelOrder() {
    order.classList.add("hidden");
}


function sendOrder() {
    const name = prompt("Qual o seu nome?");
    const address = prompt("Qual o seu endereço?");
    let message = `Olá, gostaria de fazer o pedido:
- Prato: ${food[0]}
- Bebida: ${beverage[0]}
- Sobremesa: ${dessert[0]}
Total: R$ ${total}\n
Nome: ${name}
Endereço: ${address}`;
    window.location.href = "https://wa.me/5521971343779?text=" + encodeURIComponent(message);
}
