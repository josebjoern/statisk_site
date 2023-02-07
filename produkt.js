const urlParams = new URLSearchParams(window.location.search);

const id =urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/1532.webp`;

function getProduct(){
    fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}








/*const id = 1532;
const url = `https://kea-alt-del.dk/t7/api/products/1532`;


function hentData(){
fetch(url)
.then(res=>res.json())
.then(visProdukt);
}
*/
function visProdukt(produkt){
    console.log(produkt);
    document.querySelector(".purchaseBox h4").textContent = produkt.productdisplayname;
    document.querySelector("img").src = imagePath;
    document.querySelector("img").alt = produkt.productdisplayname;
    document.querySelector(".farve").textContent = produkt.basecolour;
    document.querySelector("#model").textContent = produkt.productdisplayname;
    document.querySelector("#price").textContent = produkt.price;
    





   

}

hentData();