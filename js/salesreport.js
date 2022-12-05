let allProducts = JSON.parse(localStorage.getItem("allProducts"));
if (allProducts == null) allProducts = [];
console.log("allProducts", allProducts);

let salesData = JSON.parse(localStorage.getItem("SalesData"));
if (salesData == null) salesData = [];
console.log("salesData", salesData);

let initialTotalQty = 0;



function displaySalesReport() {

    salesData.forEach(transac => {

        let salesContainer = document.querySelector("#salesContainer");

        //creating elements
        let salesRow = document.createElement("div");
        salesRow.classList = "row";

        let productNameCol = document.createElement("div");
        productNameCol.classList = "col-3";

        let qtySoldCol = document.createElement("div");
        qtySoldCol.classList = "col-2";

        let productCostCol = document.createElement("div");
        productCostCol.classList = "col-2"

        let productSellPriceCol = document.createElement("div");
        productSellPriceCol.classList ="col-2";

        let grossProfitCol = document.createElement("div");
        grossProfitCol.classList = "col-3";

        //appending div containers
        salesContainer.appendChild(salesRow);
        salesRow.appendChild(productNameCol);
        salesRow.appendChild(qtySoldCol);
        salesRow.appendChild(productCostCol);
        salesRow.appendChild(productSellPriceCol);
        salesRow.appendChild(grossProfitCol);
        
        let transacData = transac.transacObj;
        console.log("transacData", transacData);

        let transactQty = transac.totalQtyObj;
        console.log("transactQty", transactQty);

        let transacCost = transac.totalCostObj;
        console.log("transacCost", transacCost);

        let transacSell = transac.totalPriceObj;
        console.log("transacSell", transacSell);

        let transacProfit = transacSell - transacCost;
        console.log("transacProfit", transacProfit)

        

        let transactDisplay = document.createElement("h6");
        transactDisplay.textContent = ` 000${transacData}`;
        transactDisplay.classList = "toCenter";

        let transacQtyDisplay = document.createElement("h6");
        transacQtyDisplay.textContent = transactQty;
        transacQtyDisplay.classList = "toCenter";

        let transacCostDisplay = document.createElement("h6");
        transacCostDisplay.textContent = `₱${transacCost}.00`;
        transacCostDisplay.classList = "toCenter";

        let transacSellDisplay = document.createElement("h6");
        transacSellDisplay.textContent = `₱${transacSell}`;
        transacSellDisplay.classList = "toCenter";

        let transacProfitDisplay = document.createElement("h6");
        transacProfitDisplay.textContent = `₱${transacProfit}.00`;
        transacProfitDisplay.classList = "toCenter";

        
        //  //appending sales datas
        productNameCol.appendChild(transactDisplay);
        qtySoldCol.appendChild(transacQtyDisplay);
        productCostCol.appendChild(transacCostDisplay);
        productSellPriceCol.appendChild(transacSellDisplay);
        grossProfitCol.appendChild(transacProfitDisplay);


    });

    //total qty
    let getQty = salesData.map(product => product.totalQtyObj);
    console.log("getQty", getQty);

    let totalSoldQty = getQty.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    console.log("totalSoldQty", totalSoldQty);


    //total sell

    let getSellTotal = salesData.map(product => product.totalPriceObj);
    console.log("getSellTotal", getSellTotal);

    let totalSoldPrice = getSellTotal.reduce((a, b) => parseFloat(a) + parseFloat(b));
    console.log("totalSoldPrice", totalSoldPrice);

    //total cost

    let getCostTotal = salesData.map(product => product.totalCostObj);
    console.log("getCostTotal", getCostTotal);

    let totalCostPrice = getCostTotal.reduce((a,b) => parseFloat(a) + parseFloat(b), 0);
    console.log("totalCostPrice", totalCostPrice);

    let totalGrossProfit = totalSoldPrice - totalCostPrice;
    console.log("totalGrossProfit", totalGrossProfit);

    let totalQtyContainer = document.querySelector("#totalQtys");
    let totalSoldPricesContainer = document.querySelector("#totalSoldPrice");
    let totalCostContainer = document.querySelector("#totalCostPrice");
    let totalGrossContainer = document.querySelector("#totalGross");

    let qtyTotal = document.createElement("h6");
    qtyTotal.textContent = `${totalSoldQty}`;

    let soldPriceTotal = document.createElement("h6");
    soldPriceTotal.textContent = `₱${totalSoldPrice}.00`;

    let soldCostTotal = document.createElement("h6");
    soldCostTotal.textContent = `₱${totalCostPrice}.00`;

    let soldGrossProfit =document.createElement("h6");
    soldGrossProfit.textContent = `₱${totalGrossProfit}.00`;


    totalQtyContainer.appendChild(qtyTotal);
    totalSoldPricesContainer.appendChild(soldPriceTotal);
    totalCostContainer.appendChild(soldCostTotal);
    totalGrossContainer.appendChild(soldGrossProfit);



}   