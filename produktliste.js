const urlParams = new URLSearchParams(window.location.search);

const cat = urlParams.get("cat");

const filNavn = `https://kea-alt-del.dk/t7/api/products?limit=50&category=${cat}`;

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
     copy.querySelector(".img_produkt").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
     copy.querySelector("a").href = "produkt.html?id="+ product.id;



if(product.soldout){
    copy.querySelector("article").classList.add("soldOut");
}
if(product.discount){
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = Math.round(product.price - (product.price * product.discount /100)) + "DKK";
    copy.querySelector(".discounted p+p").textContent = product.discount + "%";
    copy.querySelector(".discounted").classList.remove("gemt");
}


document.querySelector("main").appendChild(copy);   
    }


































