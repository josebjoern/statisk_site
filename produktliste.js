async function getData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
    const data = await response.json();
    console.log(data);

    data.forEach(showProdukt);
}

getData();

function showProdukt(produkt){

    console.log(produkt);

const template = document.querySelector("#produktDiscountTemplate").content;
console.log(template);

const copy = template.cloneNode(true);
copy.querySelector("h3").textContent = produkt.productdisplayname;
if(produkt.soldout){
    copy.querySelector("article").classList.add("soldOut")
}
if(produkt.discount){
    copy.querySelector("article").classList.add("discounted")
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