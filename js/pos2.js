//create function for button

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addItem);

//display total price
let totalPrice = document.querySelector("#totalPrice");
let baseTotal = 0;

let initialCostTotal = 0;

//display total item qty
let totalItemSold = document.querySelector("#totalItemSold");
let baseQTY = 0;

function addItem() {

    let retrieveData = localStorage.getItem("allProducts");
    let productEntries2 = JSON.parse(retrieveData);
    if (productEntries2 == null ) productEntries2 = [];

    

    //getting inputs 
    let inputItem = document.querySelector("#sellProduct").value;
    let inputQTY = document.querySelector("#inputQTY").value;

    //parentNode
    let productListInput = document.querySelector("#productListInput");
    

    //creating element to display
    let productList = document.createElement("div");
    productList.classList = "row";
    productList.id = "productListID";
    

    let itemName = document.createElement("h6");  
    itemName.textContent = inputItem;  
    itemName.classList = "col-7";
    itemName.id = "itemNametoALign";

    let itemQTY = document.createElement("h6");
    itemQTY.textContent = inputQTY;
    itemQTY.classList = "col-2";

         //getting data from storage for price
         let inputProductName = document.querySelector("#sellProduct").value;
         let theProduct = inputProductName;
        // console.log(theProduct);

    

        //getting the price of the product
        let productSellPrice = (productEntries2.filter(productName => productName.productNameObj === theProduct).map(productPrice => productPrice.productNewObj));

        let productCost = (productEntries2.filter(product => product.productNameObj === theProduct).map(pc => pc.productOPObj));

        //comparing stock vs to sell quantity
        let balanceStock = productEntries2.filter(stockName => stockName.productNameObj === theProduct).map(stockqty => stockqty.productQTYObj);
        let stockQtyf = JSON.parse(balanceStock);
        
        if (inputQTY > stockQtyf) {
            return alert("NOTICE: STOCKS IS NOT SUFFICIENT TO ACCOMODATE AMOUNT TO SELL")
        }

        console.log("stockQtyf", stockQtyf)

        let sellPrice = JSON.parse(productSellPrice);
        console.log("sellPrice", sellPrice)
        console.log("productSellPrice", productSellPrice)

        // this is function for total price
        let totalPricexQTY = sellPrice * inputQTY;
        let newtotalprice = baseTotal + totalPricexQTY;
        baseTotal = newtotalprice;
        totalPrice.textContent = `${baseTotal.toFixed(2)}`

        let productCostTotal = productCost * inputQTY;
        let newtotalCost = initialCostTotal + productCostTotal;
        initialCostTotal = newtotalCost;
        console.log("initialCostTotal", initialCostTotal);



        

        //this is function for total qty of items   
        let itemSold = itemQTY.textContent;
        let newTotalItemSold = baseQTY + parseFloat(itemSold);
        baseQTY = newTotalItemSold;
        totalItemSold.textContent = baseQTY;
        // console.log(baseQTY);

        

    let itemPRC = document.querySelector("h6");
    itemPRC.textContent = `₱ ${totalPricexQTY.toFixed(2)}`;
    // itemPRC.textContent = totalPricexQTY;
    itemPRC.classList = "col-3";

    //appending created elements
    productListInput.appendChild(productList);
    productList.appendChild(itemName);
    productList.appendChild(itemQTY);
    productList.appendChild(itemPRC);

    //to reset form
    let resetForm = document.querySelector("#resetForm1");
    let resetForm2 = document.querySelector("#resetForm2");
    resetForm2.reset();
    resetForm.reset();



    // FOR SOLD ITEMS ========================================================//
    let soldEntries = JSON.parse(localStorage.getItem("soldProducts"));
        if (soldEntries == null) soldEntries = [];

        //putting values to obj
        let newSoldProducts = {
            soldProductNameObj: itemName.textContent,
            soldProductQTY: itemQTY.textContent,
            soldProductPrice: totalPricexQTY
            
        }

        //putting obj into local storage
        localStorage.setItem("soldItemList", JSON.stringify(newSoldProducts));
        soldEntries.push(newSoldProducts);
        localStorage.setItem("soldProducts",JSON.stringify(soldEntries));
        

        // console.log(newSoldProducts);
        

}

//SUBMIT BUTTON FUNCTION

let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", submitSoldProducts);

let basetransac = 1;

function submitSoldProducts() {

    let retreiveSoldProducts = localStorage.getItem("SalesData");
    let soldProductsToSales = JSON.parse(retreiveSoldProducts);
    if (soldProductsToSales == null) soldProductsToSales = [];

    soldProductsToSales.forEach(itemSold =>{
       
        let updateTransac = itemSold.transacObj + 1;
        basetransac = updateTransac;
     })


    // console.log(basetransac);

    let getSoldProductsData = localStorage.getItem("soldProducts");
    let soldEntries2 = JSON.parse(getSoldProductsData);
    if (soldEntries2 == null) soldEntries2 = [];



    //TO SALES
    let salesEntries = JSON.parse(localStorage.getItem("SalesData")) ;
        if (salesEntries == null) salesEntries = [];


    // console.log(soldEntries2);
     

    let sellDate = new Date().toLocaleDateString();

    
    


    //values to use on SALES
    let newSalesData = {
        soldProdObj: soldEntries2,
        soldDateObj: sellDate,
        totalPriceObj: totalPrice.textContent,
        transacObj: basetransac,
        totalQtyObj: totalItemSold.textContent,
        totalCostObj: initialCostTotal
    }

    localStorage.setItem(("salesList"),JSON.stringify(newSalesData));
    salesEntries.push(newSalesData);
    localStorage.setItem("SalesData",JSON.stringify(salesEntries));

    alert("TRANSACTION SUCCESFULL");
    




    
// / UPDATING INVENTORY ================================================================///


    let allProducts = JSON.parse(localStorage.getItem("allProducts"));
    console.log("allProducts", allProducts);
    let soldProduct = JSON.parse(localStorage.getItem("soldProducts"));
    console.log("soldProduct", soldProduct);

    


    soldProduct.forEach((prdName, index) => {
        let boughtProductQty = prdName.soldProductQTY;
        console.log("boughtProductQty", boughtProductQty)

        let boughtProductName = prdName.soldProductNameObj;
        console.log("boughtProductName", boughtProductName)

        let stockQty = JSON.parse((allProducts.filter(pn => pn.productNameObj == boughtProductName).map(pq => pq.productQTYObj)));
        console.log("stockQty", stockQty)

        let productName = allProducts.map(item => item.productNameObj);
            // productName = productName[productName.indexOf(boughtProductName)] || null

        let productName2 = allProducts.filter(p => p.productNameObj === boughtProductName).map(pn => pn.productNameObj);   

        let fProductName = JSON.stringify(productName2);
        
        console.log("fProductName", fProductName);
        console.log("productName2", productName2);

        console.log("productName", productName)

        let newStockQty = stockQty - boughtProductQty;
        console.log("newStockQty", newStockQty)

        console.log("boughtProductName", boughtProductName)
        console.log("productName", productName)
        console.log("Compare", boughtProductName == productName2)

        let theProductName = allProducts.filter(p =>p.productNameObj === boughtProductName);

        let theProductQty = allProducts.filter(p =>p.productNameObj === boughtProductName).map(pq => pq.productQTYObj);

        let productIndex = JSON.parse(allProducts.filter(p =>p.productNameObj === boughtProductName).map(index => index.indexObj));

        console.log("productIndex" , productIndex);

        console.log("productIndex", productIndex);

        console.log("theProductName", theProductName)


        if(boughtProductName == productName2) {
            console.log("Index", theProductName)
            allProducts[productIndex].productQTYObj = newStockQty.toString();
            
            
            // theProductName.productQTYObj = newStockQty.toString();
        }

        console.log("index2", theProductName.productQTYObj)

        console.log("theProductQty", theProductQty)
        
        console.log("stockQty", stockQty)

        console.log("newStockQty", newStockQty);
    })
    
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    console.log("Updating all product", allProducts);
    


    localStorage.removeItem("soldProducts");
    setTimeout(function(){ location.reload(); }, 1000);


}



    

// this is where input buyers payment

function inputBills() {
    let inputPayments = document.querySelector("#inputPayments").value;
    let payment = document.querySelector("#payment");
    let buyersChange = document.querySelector("#buyersChange");
    payBills = inputPayments;
    payment.textContent = `₱ ${JSON.parse(inputPayments).toFixed(2)}`;
    
    // console.log(inputPayments);

    let changeBills = payBills - baseTotal;
    buyersChange.textContent = `₱ ${JSON.parse(changeBills).toFixed(2)}`
    // console.log(changeBills);
}


// SUB PANEL DATA FROM INVENTORY ==============================================//
let retrieveData = localStorage.getItem("allProducts");
let productEntries2 = JSON.parse(retrieveData);
let productEntries3 = JSON.parse(retrieveData);

// console.log(productEntries2[1]);
// console.log(productEntries2);

productEntries2.forEach(product => {

    let stockProduct = document.querySelector("#stockProduct");
    let newinventoryRow = document.createElement("div");
    newinventoryRow.classList = "row";
    newinventoryRow.id = "inventoryRows";

    let pNameList = document.createElement("div");
    pNameList.classList = "col-6";
    pNameList.id = "productNameList";

    let pQTYList = document.createElement("div");
    pQTYList.classList = "col-4";
    pQTYList.id = "productQTYList";

    let pOrgPriceList = document.createElement("div");
    pOrgPriceList.classList = "col-2";
    pOrgPriceList.id = "productOrgPriceList";

    let pNewPriceList = document.createElement("div");
    pNewPriceList.classList = "col-2";
    pNewPriceList.id = "productNewPriceList";

    stockProduct.appendChild(newinventoryRow);
    newinventoryRow.appendChild(pNameList);
    newinventoryRow.appendChild(pQTYList);

    let productNameData = document.createElement("h6");
    productNameData.textContent = product.productNameObj;

    let productQTYData = document.createElement("h6");
    productQTYData.textContent = product.productQTYObj;

    let productOrgPriceData = document.createElement("h6");
    productOrgPriceData.textContent = product.productOPObj;

    let productNewPriceData = document.createElement("h6");
    productNewPriceData.textContent = product.productNewObj;

    // append new datas
   
    pNameList.appendChild(productNameData);
    pQTYList.appendChild(productQTYData);
}) ;



// DATA LIST VALUES ON INPUT  =============================================//

let sellProducts = document.querySelector("#sellProducts");

productEntries3.forEach(productName => {
   
    let productNameData1 = document.createElement("h6");
    productNameData1.textContent = productName.productNameObj;

    let productOptions = document.createElement("option"); //test
        productOptions.innerHTML = "<option value = ''>";
        productOptions.id = "optionsSelect";
        productOptions.value = productNameData1.textContent;

        sellProducts.appendChild(productOptions);

});
