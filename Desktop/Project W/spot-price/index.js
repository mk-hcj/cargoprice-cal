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
/*const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6*/

function addBox() {
let element = document.getElementById("new-container");

let newDiv = document.createElement("div")
newDiv.setAttribute("class", "new-div")
element.append(newDiv);
   //weight of cargo
let tag = document.createElement("p");
let text = document.createTextNode("Weight of cargo ");
tag.append(text);
newDiv.append(tag);
    //kg
let tagT = document.createElement("p");
let textT = document.createTextNode(" (kg)");
tagT.append(textT);
newDiv.append(tagT);
    //input
let newForm = document.createElement("input");
newForm.setAttribute("class", "boxWeight");
newDiv.append(newForm);
}
function letterButton() {
//for (let b = 0; b < 26; b++) {
    let i = 0;
    i = i + 1;
    let li = document.createElement("p");
    let num = (i+10).toString(36);
    li.innerHTML = "letter " + num + " ";
    document.getElementById("letter-main").append(li);
  //}
}