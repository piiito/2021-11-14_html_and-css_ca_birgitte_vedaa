 const detailPage = document.querySelector(".bodøraincoat");
 const mainUrl = "http://localhost/flower-power/wp-json/wc/store/products";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + "/" + id;
console.log(detailPageUrl);
detailPage.innerHTML= "";

async function productDetails(){
    try{
        const fetchDetails = await fetch(detailPageUrl);
        const details = await fetchDetails.json();
        console.log(details);

        createHtml(details);
    }
    catch(error){
        console.log(error);
    }
    
}

productDetails();

function createHtml(details){
    detailPage.innerHTML += `<h1>${details.name}</h1>
                            <div class="specific_raincoat_images">
                            <img src="${details.images[0].src}" class="home_men" alt${details.name}>
                            <img src="${details.images[0].src}" class="home_men" alt${details.name}>
                            <img src="${details.images[0].src}" class="home_men" alt${details.name}>
                            </div>
                            <div class="product_info"><p>${details.description}</p>
                            <i class="far fa-heart"></i></div>
                            <section class="pick_size">
                            <p>${details.name}</p>
                            <p>${details.prices.price} ${details.prices.currency_symbol}</p>
                            <fieldset>
                            <select name="sizes" id="sizes">
                            <option value="">Choose size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            </select>
                            </fieldset>
                            <p class="add_cart">Add to cart</p>
                            `;
    
}


