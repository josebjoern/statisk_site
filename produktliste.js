async function hentData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products");
    const data = await response.json();
    //console.log(data);

    data.forEach(showProduct);
}

hentData();

function showProduct(produkt){

const template = document.querySelector("#produktDiscountTemplate").textContent;
console.log(template);

const copy = template.cloneNode(true);
copy.querySelector("h3").textContent = produkt.productdisplayname;
if(product.soldout){
    copy.querySelector("article").classList.add("soldOut")
}
if(product.discount){
    copy.querySelector("article").classList.add("onSale")
}
document.querySelector("main").appendChild(copy);
}































/*const filNavn = "https://kea-alt-del.dk/t7/api/products";

function hentData(navn){
    fetch(navn)
    .then((response) => response.json())
    .then(visData);

}
function visData(json){
const skabelon = document.querySelector("#minSkabelon").content;
const beholder = document.querySelector("main");


    json.forEach((produkt) => {
    
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".price").textContent = produkt.price; 
    klon.querySelector("h2").textContent = produkt.productdisplayname; 
    klon.querySelector("img").src = 
    beholder.appendChild(klon);
});
}

hentData(filNavn);*/