let sam = JSON.parse(localStorage.getItem("buy")) || []
let dl = document.getElementById("myre")


fetchdata(sam)
function fetchdata(data) {

    let cartdata = data.map(item => {
        return {
            image: item.image,
            name: item.name,
            processor: item.processor,
            temp: item.temp,
            ram: item.ram,
            storage: item.storage,
            price: item.price,
            brand: item.brand,
            id: item.id
        }
    })
    pudhe(cartdata)

}



function pudhe(cartdata) {
    let pl = `
    ${cartdata.map(item => render(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand)).join("")}
`
    dl.innerHTML = pl;

    // let checkout = document.getElementById("checkcheck")

    // checkout.addEventListener("click", () => {
    //     sam.splice(0,1)
    //     localStorage.setItem("buy", JSON.stringify(sam))
    //     alert("hi")
    //     window.location.assign("/productpage.html")
    // })

    let remove = document.getElementsByClassName("savesave")
    console.log(remove)
    for(let i=0; i<remove.length; i++){
        remove[i].addEventListener("click",()=>{
            sam.splice(i,1)
            localStorage.setItem("buy", JSON.stringify(sam))
            window.location.reload();
        })
    }
}

function render(image, name, processor, temp, ram, storage, price, brand) {
    let card = `
    
    <div id="vp3">
    <div class="bjnj">
        <div><img src=${image} alt=""></div>
        <div class="calvin">
            <h3 class="name">${name}</h3>
            <span class="processor">${processor}</span>
            <span class="temp">${temp}</span><br><br>
            <span class="ram">${ram}</span>
            <span class="storage">${storage}</span><br><br>

            <span class="kdkd"> RTX 2060 super,W11H,Silver- Refurb</span><br><br>

            <span class="kdkd1">SKU: IHP575J2AARA</span><br>

            <button class="savesave">Remove</button>
        </div>

        <div class="toto">
            <button>+</button>
            <span id="calcal">1</span>
            <button>-</button>


        </div>
        <div id="price">
            <p class="priceprice">₹ ${price}</p>
            <img src="https://cdn-icons-png.flaticon.com/512/3002/3002310.png" alt="">
        </div>
    </div>
    <div class="omom">
    <div><img src="./pr_image/2.png" alt=""></div>
        <div><button id="addadd">Add</button></div>
    </div>
   
</div><br><br>

    `
    return card;
}


