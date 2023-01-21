

let sam = JSON.parse(localStorage.getItem("buy")) || []
let dl = document.getElementById("myre")
let totalcart = document.getElementById("lenlenalg")
let ordercart = document.getElementById("len2424")


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
    ${cartdata.map(item => render(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand,item.c)).join("")}
`
    dl.innerHTML = pl;

    let checkout = document.getElementById("checkcheck")

    

    let remove = document.getElementsByClassName("savesave")
    for(let i=0; i<remove.length; i++){
        remove[i].addEventListener("click",()=>{
            sam.splice(i,1)
            localStorage.setItem("buy", JSON.stringify(sam))
            window.location.reload();
        })
    }

    let sum = 0;
    for(let i=0; i<sam.length; i++){
        sum += sam[i].price
    }

    if(sam.length===0){
        totalcart.innerText = 0;
        ordercart.innerText = 0;
        dl.innerHTML = `
        <h1 class="afterdelete1">Please Go on Product Page && buy some item</h1>
        <a href="./productpage.html" style="text-decoration: none;"><button class="afterbutton">Click Here</button></a>
        `
         alert("Redirect to the product page")
        // checkout.addEventListener("click", () => { 
        //     alert("Product Page")
        //     window.location.assign("/productpage.html")
        //     sam = [];
        //     localStorage.setItem("buy", JSON.stringify(sam))
        // })


    }else{
        totalcart.innerText = sum;
        ordercart.innerText = sum + 1000 + 120;

        checkout.addEventListener("click", () => { 
            alert("Payment Page")
            // window.location.assign("/productpage.html")
            sam = [];
            localStorage.setItem("buy", JSON.stringify(sam))
        })
    }
    


    let plus = document.getElementsByClassName("plusplus")
    let minus = document.getElementsByClassName("minusminus")
    let cal = document.getElementsByClassName("calcal")
    


    for(let i=0; i<plus.length; i++){
        plus[i].addEventListener("click",()=>{
    
            sum = sum - sam[i].price * cal[i].innerText
            cal[i].innerText++;
            sum += sam[i].price*cal[i].innerText 
            totalcart.innerText = sum;
            ordercart.innerText = sum + 1000 + 120;
            
            totalcart.innerText = sum;
            ordercart.innerText = sum + 1000 + 120;
        })
    }

    for(let i=0; i<minus.length; i++){
        minus[i].addEventListener("click",()=>{
            sum = sum - sam[i].price * cal[i].innerText
            cal[i].innerText--;
            sum += sam[i].price*cal[i].innerText 
            totalcart.innerText = sum;
            ordercart.innerText = sum + 1000 + 120;
        })
    }
    

    
}

function render(image, name, processor, temp, ram, storage, price, brand,c) {
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
            <button class="plusplus">+</button>
            <span class="calcal">${1}</span>
            <button class="minusminus">-</button>


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