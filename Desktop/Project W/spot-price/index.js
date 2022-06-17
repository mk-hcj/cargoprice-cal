/*  if over 100kg -> spot is okay
add the following
1. charge　1㎏ x jpy 1200 - 1300
2. Fuel charge +17% (charge*1.17)
3. state of emergency charge　[1kg * jpy 20]
4. もしあれば、規定外貨物手数料　
over 120cm -> +jpy 10,000/box or 
over 70kgn -> +jpy 10,500/box
*/
priceTotal = (a, currentRate) => {
    return a * 1200 * currentRate + (a * 20) ;
}


function getPrice() {
    let totalWeight = document.getElementsByClassName("boxWeight")[0].value;
    totalWeight = priceTotal(totalWeight, 1.345)
    let totalPrice = document.getElementById("answer");
    totalPrice.innerText = totalWeight;
}

let i = 0;
function addBox() {
let element = document.getElementById("new-container");
    //new element
let newDiv = document.createElement("div")
newDiv.setAttribute("class", "new-div")
element.append(newDiv);
    //labels 
i += 1;
let li = document.createElement("p");
let num = (i+9).toString(36);
li.innerText = "Weight of cargo " + num.toLocaleUpperCase() + " (kg)";
newDiv.append(li);
    //input
let newForm = document.createElement("input");
newForm.setAttribute("class", "boxWeight");
newForm.setAttribute("type", "number");
newDiv.append(newForm);
}
