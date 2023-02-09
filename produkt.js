const urlParams = new URLSearchParams(window.location.search);


const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;


function getProduct(){
    fetch(url)
    .then((res) => res.json())
    .then(visProduct);
}

function visProduct(product){
   
    document.querySelector(".purchaseBox h4").textContent = product.productdisplayname;
    document.querySelector("img").src = imagePath;
    document.querySelector("img").alt = product.productdisplayname;
    document.querySelector(".farve").textContent = product.basecolour;
    document.querySelector("#model").textContent = product.productdisplayname;
    document.querySelector(".brand").textContent = product.brandname;
    document.querySelector(".articletype").textContent = product.subcategory;

    
    
}

getProduct();