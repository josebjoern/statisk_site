const filNavn = "https://kea-alt-del.dk/t7/api/products";

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
    klon.querySelector("h2").textContent = produkt.; 
    klon.querySelector("img").src = hund.billede; 
    beholder.appendChild(klon);
});
}

hentData(filNavn);