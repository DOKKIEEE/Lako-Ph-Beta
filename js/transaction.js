// declaring variable




function displaySalesData(){
    let saleSummaryList = document.querySelector("#saleSummaryList");

    let retreiveSoldProducts = localStorage.getItem("SalesData");
    let soldProductsToSales = JSON.parse(retreiveSoldProducts);
    if (soldProductsToSales == null) soldProductsToSales = [];

    soldProductsToSales.forEach(itemSold =>{
         let soldDates = itemSold.soldDateObj;
        console.log(soldDates);

        let soldTotal = itemSold.totalPriceObj;


        let salesDiv = document.createElement("div");
        salesDiv.classList = "col-8";
        salesDiv.id = "salesDiv";
        salesDiv.innerHTML = `TR.DATE: ${soldDates} TR# 000${itemSold.transacObj}`
        console.log(itemSold.transacObj)

        let tpDiv = document.createElement("div");
        tpDiv.classList = "col-3";
        tpDiv.id = "tpDiv";
        tpDiv.innerHTML = `₱${soldTotal}`;

        let btnDiv = document.createElement("div");
        btnDiv.classList = "col-1";
        btnDiv.id = "btnDiv";
        

        let toggleBtnOff = document.createElement("button");
        toggleBtnOff.classList = "col-1";
        toggleBtnOff.type = "button"
        toggleBtnOff.id = "toggleBtnOff";
        toggleBtnOff.innerHTML = "<i class='fa-solid fa-caret-up'></i>";

       

        toggleBtnOff.addEventListener("click", showLess);

        function showLess() {
            nameDiv.style = "display:none;";
            qtyDiv.style = "display:none;";
            prcDiv.style = "display:none;";
            toggleBtnOff.style = "display:none;"; //up
            toggleBtnOn.style = "display:block;";   //down
        }

        let toggleBtnOn = document.createElement("button");
        toggleBtnOn.classList = "col-1";
        toggleBtnOn.type = "button"
        toggleBtnOn.id = "toggleBtnOn";
        toggleBtnOn.innerHTML = "<i class='fa-solid fa-caret-down'></i>";

        toggleBtnOn.addEventListener("click", showMore);

        function showMore() {
            nameDiv.style = "display:block;";
            qtyDiv.style = "display:block;";
            prcDiv.style = "display:block;";
            toggleBtnOff.style = "display:block;"; //up
            toggleBtnOn.style = "display:none;";    //down
        }


    

        console.log(salesDiv.textContent);
        saleSummaryList.appendChild(salesDiv);
        saleSummaryList.appendChild(tpDiv);
        saleSummaryList.appendChild(btnDiv);
        btnDiv.appendChild(toggleBtnOff);
        btnDiv.appendChild(toggleBtnOn);

        toggleBtnOn.style = "display:none;";    //down

        let soldProductObjs = itemSold.soldProdObj;
        console.log(soldProductObjs);

        let nameDiv = document.createElement("div");
        nameDiv.classList = "col-6";
        nameDiv.textContent = "ITEMS";
        nameDiv.id = "nameDiv";

        let qtyDiv = document.createElement("div");
        qtyDiv.classList ="col-2";
        qtyDiv.textContent = "QTY";
        qtyDiv.id = "qtyDiv";

        let prcDiv = document.createElement("div");
        prcDiv.classList = "col-3";
        prcDiv.textContent = "PRICE";
        prcDiv.id = "prcDiv";

        saleSummaryList.appendChild(nameDiv);
        saleSummaryList.appendChild(qtyDiv);
        saleSummaryList.appendChild(prcDiv);

        soldProductObjs.forEach(productDets => {
            let prodsN = productDets.soldProductNameObj;
            let prodsQ = productDets.soldProductQTY;
            let prodsP = productDets.soldProductPrice;

            console.log(`${prodsN} ${prodsQ} ${prodsP}`);

            let itemN = document.createElement("h6");
            itemN.classList = "col-7";
            itemN.textContent = prodsN;

            let itemQ = document.createElement("h6");
            itemQ.classList = "col-2";
            itemQ.id = "itemQ"
            itemQ.textContent = prodsQ;

            let itemP = document.createElement("h6");
            itemP.classList = "col-2";
            itemP.id = "itemP";
            itemP.textContent = `₱${prodsP}.00`;

            nameDiv.appendChild(itemN);
            qtyDiv.appendChild(itemQ);
            prcDiv.appendChild(itemP);
        
            // let saleSumm = document.createElement("h6");
            // saleSumm.textContent = `${prodsN} ${prodsQ} ${prodsP}`;

            // salesDiv.appendChild(saleSumm);
        
        
        
        });


        //displaying values

            
})


}