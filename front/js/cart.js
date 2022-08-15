//----Initialisation du Local Storage---

let cartProducts = JSON.parse(localStorage.getItem("id"));
console.log(cartProducts, "produits ok");

//----Fetch l'API---

fetch("http://localhost:3000/api/products")
.then ((res) => res.json())
.then((data) => {
    if (cartProducts) {
        for (p of cartProducts) {
            const product = data.find((d) => d._id === p.idProduct);
            if (product) {
                p.price = product.price;
                console.log(typeof product.price, "valeurs nombre")
                console.log(typeof p.price, "valeurs nombre")
                console.log(product.price, "chiffre")
                console.log(p.price,"chiffre")
            }
        }
    }
})
.catch((error) => console.error(error));

function getItem() {
    //----Affichage si panier vide---
    if (cartProducts === null || cartProducts.length ===0) {
        let emptyCart = document.createElement("article");
        document.querySelector("#cart__items").appendChild(emptyCart);
        emptyCart.textContent = "Votre panier est actuellement vide. Vous n'avez aucune commande en cours";
    } else {

    }
}