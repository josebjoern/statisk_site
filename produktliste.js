//const url = `https://kea-alt-del.dk/t7/api/products?limit=10`;

async function getData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=50");
    const data = await response.json();
    data.forEach(showProduct);
    
}


getData();

function showProduct(product){
    console.log(product);
    
     const template = document.querySelector("#produkt_skabelon").content;
     
     const copy = template.cloneNode(true);

     copy.querySelector("h3").textContent = product.productdisplayname;
     copy.querySelector(".articletype").textContent = product.articletype;
     copy.querySelector(".brand").textContent = product.brandname;
     copy.querySelector(".price").textContent = product.price + "DKK";
    

     



if(product.soldout){
    copy.querySelector("article").classList.add("soldOut");
}
if(product.discount){
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = Math.round(product.price - (product.price * product.discount /100)) + "DKK";
    copy.querySelector(".discounted p+p").textContent = product.discount + "%";
    copy.querySelector(".discounted").classList.remove("gemt");
}
copy.querySelector(".img_produkt").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

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