let addProductBtn = document.querySelector("#addProductBtn");
addProductBtn.addEventListener("click", addNewProduct);

allProducts = JSON.parse(localStorage.getItem("allProducts"));
productList = JSON.parse(localStorage.getItem("productList"));
let maxIndex = Math.max(...allProducts.map(obj => obj.indexObj));

console.log("maxIndex", maxIndex);





function addNewProduct() {
        
let productEntries = JSON.parse(localStorage.getItem("allProducts"));
    if (productEntries == null) productEntries = [];


    //getting input values
    let theaddProductName = (document.querySelector("#addProductName").value)//.toUpperCase();
    let addProductQTY = document.querySelector("#addProductQTY").value;
    let addProductOrgPrice = document.querySelector("#addProductOrgPrice").value;
    let addProductNewPrice = document.querySelector("#addProductNewPrice").value;
    let todaysDate = new Date().toLocaleDateString();

    let addProductName = theaddProductName.toLowerCase();

    console.log("addProductName", addProductName);
    // console.log(addProductName);
    // console.log(addProductQTY);
    // console.log(addProductOrgPrice);
    // console.log(addProductNewPrice);

    if (allProducts === null) {
        baseindex = 0;
    }else {
        baseindex = maxIndex + 1;
    }


    // let newIndex = baseindex + 1;
    // baseindex = newIndex;



    //putting values in obj
    let newProduct = {
        productNameObj: addProductName,
        productQTYObj: addProductQTY,
        productOPObj: addProductOrgPrice,
        productNewObj: addProductNewPrice,
        dateAddedObj: todaysDate,
        indexObj:baseindex

    }

    //putting obj into local storage
    localStorage.setItem("productList",JSON.stringify(newProduct));
    productEntries.push(newProduct);
    localStorage.setItem("allProducts", JSON.stringify(productEntries));


    //create element to display product details
    let inventoryList = document.querySelector("#inventoryList");
    let inventoryRow = document.createElement("div");
    inventoryRow.classList = "row";

    let pNameList = document.createElement("div");
    pNameList.classList = "col-3";
    pNameList.id = "productNameList";

    let pQTYList = document.createElement("div");
    pQTYList.classList = "col-2";
    pQTYList.id = "productQTYList";

    let pOrgPriceList = document.createElement("div");
    pOrgPriceList.classList = "col-2";
    pOrgPriceList.id = "productOrgPriceList";

    let pNewPriceList = document.createElement("div");
    pNewPriceList.classList = "col-2";
    pNewPriceList.id = "productNewPriceList";

    let dateAdded = document.createElement("div");
    dateAdded.classList = "col-3";
    dateAdded.id = "todaysDate";

    console.log(pNewPriceList.innerHTML);
    // created div
    inventoryList.appendChild(inventoryRow);
    inventoryRow.appendChild(pNameList);
    inventoryRow.appendChild(pQTYList);
    inventoryRow.appendChild(pOrgPriceList);
    inventoryRow.appendChild(pNewPriceList);
    inventoryRow.appendChild(dateAdded);


    let productNameData = document.createElement("h6");
    productNameData.textContent = newProduct.productNameObj;

    let productQTYData = document.createElement("h6");
    productQTYData.textContent = newProduct.productQTYObj;

    let productOrgPriceData = document.createElement("h6");
    productOrgPriceData.textContent = newProduct.productOPObj;

    let productNewPriceData = document.createElement("h6");
    productNewPriceData.textContent = newProduct.productNewObj;

    let addedDate = document.createElement("h6");
    addedDate.textContent = newProduct.dateAddedObj;
    


    // append new datas
   
    pNameList.appendChild(productNameData);
    pQTYList.appendChild(productQTYData);
    pOrgPriceList.appendChild(productOrgPriceData);
    pNewPriceList.appendChild(productNewPriceData);
    dateAdded.appendChild(addedDate);

     setTimeout(function(){ location.reload(); }, 100);    //to reload page after input

}

    //retrieve datas form local storage
    let retrieveData = localStorage.getItem("allProducts");
    let productEntries2 = JSON.parse(retrieveData);




// //loop data from local storage to display saved data
// //note replace newProduct into productEntries[2] to loop
    for (let i in productEntries2) {
//create element to display product details
    let newinventoryList = document.querySelector("#inventoryList");
    let newinventoryRow = document.createElement("div");
    newinventoryRow.classList = "row";
    newinventoryRow.id = "inventoryRows";

    let pNameList = document.createElement("div");
    pNameList.classList = "col-3";
    pNameList.id = "productNameList";

    let pQTYList = document.createElement("div");
    pQTYList.classList = "col-2";
    pQTYList.id = "productQTYList";

    let pOrgPriceList = document.createElement("div");
    pOrgPriceList.classList = "col-2";
    pOrgPriceList.id = "productOrgPriceList";

    let pNewPriceList = document.createElement("div");
    pNewPriceList.classList = "col-2";
    pNewPriceList.id = "productNewPriceList";

    let newAddedDate = document.createElement("div");
    newAddedDate.classList = "col-3";
    newAddedDate.id = "newAddedDates"

    console.log(pNewPriceList.innerHTML);
    // created div
    newinventoryList.appendChild(newinventoryRow);
    newinventoryRow.appendChild(pNameList);
    newinventoryRow.appendChild(pQTYList);
    newinventoryRow.appendChild(pOrgPriceList);
    newinventoryRow.appendChild(pNewPriceList);
    newinventoryRow.appendChild(newAddedDate);


    let productNameData = document.createElement("h6");
    productNameData.textContent = productEntries2[i].productNameObj;

    let productQTYData = document.createElement("h6");
    productQTYData.textContent = `${productEntries2[i].productQTYObj}`;

    let productOrgPriceData = document.createElement("h6");
    productOrgPriceData.textContent = `₱ ${productEntries2[i].productOPObj}`;

    let productNewPriceData = document.createElement("h6");
    productNewPriceData.textContent = `₱ ${productEntries2[i].productNewObj}`;

    let dateData = document.createElement("h6");
    dateData.textContent = productEntries2[i].dateAddedObj;




    // append new datas
   
    pNameList.appendChild(productNameData);
    pQTYList.appendChild(productQTYData);
    pOrgPriceList.appendChild(productOrgPriceData);
    pNewPriceList.appendChild(productNewPriceData);
    newAddedDate.appendChild(dateData);
    if (productQTYData.innerHTML <= 10) {
        productQTYData.style.color = "red";
    }
    else {
        productQTYData.style = "color:black;";
    }

    if(productQTYData.innerHTML <= 0) {
        productQTYData.innerHTML = "OUT OF STOCK";
    }




    }

            //   UPDATE INVENTORY function

    let updateStockBtn = document.querySelector("#updateStockBtn");
    updateStockBtn.addEventListener("click", updateStock );



    function updateStock() {


        let allProducts = JSON.parse(localStorage.getItem("allProducts"));
        if (allProducts == null) allProducts =[];


        let addProductOrgPrice = document.querySelector("#addProductOrgPrice").value;
        let addProductNewPrice = document.querySelector("#addProductNewPrice").value;
        let todaysDate = new Date().toLocaleDateString();


        // console.log("allProducts", allProducts);

        //UPDATING INVENTORY
            let toAddProductName = (document.querySelector("#addProductName").value)//.toUpperCase();
            let addProductQTY = document.querySelector("#addProductQTY").value;

            let addProductName = toAddProductName.toLowerCase()


            // let stockProductName = itemName.productNameObj;
            // console.log("stockProductName", stockProductName);

            let productIndexInit = (allProducts.filter(p =>p.productNameObj === addProductName).map(index => index.indexObj));

            let productIndex = JSON.parse(productIndexInit);
            console.log("productIndex", productIndex)

            let productOnStock = allProducts.filter(pn => pn.productNameObj === addProductName);
            console.log( "productOnStock", productOnStock)

            let prodStock = allProducts.filter(pn => pn.productNameObj === addProductName).map(pnn => pnn.productNameObj);
            console.log("prodStock", prodStock);

            let theProductQty = allProducts.filter(p =>p.productNameObj === addProductName).map(pq => pq.productQTYObj);
            console.log("theProductQty", theProductQty);

            let theProductOriginalPrice = allProducts.filter(p =>p.productNameObj === addProductName).map(pop => pop.productOPObj);
            console.log("theProductOriginalPrice", theProductOriginalPrice)

            
            let theProductSellingPrice = allProducts.filter(p =>p.productNameObj === addProductName).map(pop => pop.productNewObj);


            
            console.log("theProductOgiPrice", theProductOriginalPrice);
            let productQty = JSON.parse(theProductQty);
            console.log("productQty", productQty)
            
            //updating product quantity
            if(prodStock == addProductName) {
                console.log("index", )

                if (addProductQTY == "") {
                
                    allProducts[productIndex].productQTYObj = (theProductQty).toString();
                   
                }
                else {
                    allProducts[productIndex].productQTYObj = (parseFloat(addProductQTY) + parseFloat(theProductQty)).toString();
                }
                


            }

            // update bought price
            if(prodStock == addProductName) {


                if (addProductOrgPrice == "") {
                    let updatedPrice = theProductOriginalPrice;
                    allProducts[productIndex].productOPObj = (updatedPrice).toString();
                    console.log(updatedPrice, "updatedPrice")
                }
                else {
                    let updatedPrice = addProductOrgPrice;
                    allProducts[productIndex].productOPObj = (updatedPrice).toString();
                    console.log(updatedPrice, "updatedPrice")
                }
                
            }

            //update sell price
            if(prodStock == addProductName) {


                if (addProductNewPrice == "") {

                    let updatedSellingPrice = theProductSellingPrice;
                    allProducts[productIndex].productNewObj = (updatedSellingPrice).toString();
                    console.log(updatedSellingPrice, "updatedSellingPrice");
                }
                else {
                    let updatedSellingPrice = addProductNewPrice;
                    allProducts[productIndex].productNewObj = (updatedSellingPrice).toString();
                    console.log(updatedSellingPrice, "updatedSellingPrice");
                }
                
            }
            


            console.log("compare", addProductName == prodStock);
            

            // console.log("productOnStock1", productOnStock)
            // console.log("addProductName", addProductName);
            
        ;
        localStorage.setItem("allProducts", JSON.stringify(allProducts));
        console.log("Updating all product", allProducts);

        setTimeout(function(){ location.reload(); }, 100); 


    }




    function disableAddBtn() {

        let allProducts = JSON.parse(localStorage.getItem("allProducts"));
        if (allProducts == null) allProducts = [];




        allProducts.forEach(element => {
            // let pn = element.productNameObj;
            // console.log("pn", pn);

            
            let addBtn = document.querySelector("#addProductBtn");

            let theproductNameInput = document.querySelector("#addProductName").value;
            let productNameInput = theproductNameInput.toLowerCase();
            console.log("productNameInput", productNameInput);

            let pn = allProducts.filter(pn => pn.productNameObj == productNameInput).map(pn => pn.productNameObj);

            let updBtn = document.querySelector("#updateStockBtn");


            console.log("pn", pn);
            
            if ( pn == productNameInput) {
                // return alert("already has this product")
                addBtn.setAttribute("disabled", "");
                addBtn.style.backgroundColor = "gray";
                addBtn.style.color = "red";

                updBtn.removeAttribute("disabled", "");
                updBtn.style.color = "white";
                updBtn.style.backgroundColor = "#52ab98";
                
            }

            else {
                addBtn.removeAttribute("disabled", "");
                addBtn.style.backgroundColor = "#2b6777";
                addBtn.style.color = "white";

                updBtn.setAttribute("disabled", "");
                updBtn.style.backgroundColor = "gray";
                updBtn.style.color = "red";
            }
            console.log("compare", ((productNameInput == pn)))
            
        });

    }
    
            


