/*  if over 100kg -> spot is okay
add the following
1. charge　1㎏ x jpy 1200 - 1300
2. Fuel charge +17% (charge*1.17)
3. state of emergency charge　[1kg * jpy 20]
4. もしあれば、規定外貨物手数料　
over 120cm -> +jpy 10,000/box or 
over 70kgn -> +jpy 10,500/box
*/
function getPrice() {
    let totalWeight = document.getElementById("boxWeightA").value
    let totalPrice = document.getElementById("answer");
    totalPrice.innerHTML = totalWeight;
}