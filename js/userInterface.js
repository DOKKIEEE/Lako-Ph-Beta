

let allProducts = JSON.parse(localStorage.getItem("allProducts"));
if (allProducts == null) allProducts = [];

let showBadge = document.querySelector("#showBadge");
// badgeForStock.classList = "d-block"




allProducts.forEach(productName => {

    let theProductQty = Math.min(...allProducts.map(pq => pq.productQTYObj));
    console.log("theProductQty", theProductQty);

    if (theProductQty > 10) {
        showBadge.classList = "d-none";
    }
    if (theProductQty = "") {
        showBadge.classList = "d-none";
    }

    
});