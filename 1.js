



let cont = document.getElementById("cont")
let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let totalitem = document.getElementById("totalitem")

let mata = []


fetchdata()
function fetchdata() {
    fetch("https://63c646dcd307b7696735cbd0.mockapi.io/bp1")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            mata = data;

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
            rendercards(cartdata)
            totalitem.innerText = "Total Items : " + cartdata.length + " items"
        })
}


function rendercards(cartdata) {

    let pl = `
            ${cartdata.map(item => done(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand)).join("")}
        `
    cont.innerHTML = pl;



    image1.addEventListener("click", () => {
        alert("😉")
        let pl = `
         ${cartdata.map(item => maibhi(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand)).join("")}
     `
        cont.style.display = "grid"
        cont.style.gridTemplateColumns = "repeat(1,900px)"
        cont.innerHTML = pl;
        // cont.style.backgroundColor = "#ed5132"
        ss();
    })

    image2.addEventListener("click",()=>{
        
    })

    ss()
    function ss() {
        let ntb = document.getElementsByClassName("ntb-1")
        console.log(ntb)
        console.log(mata)
        for (let i = 0; i < ntb.length; i++) {
            ntb[i].addEventListener("click", () => {
                let sam = JSON.parse(localStorage.getItem("buy")) || []
                if (sam.length === 0) {
                    sam.push(mata[i])
                    localStorage.setItem("buy", JSON.stringify(sam))
                    alert("Successfully Placed Order")
                } else {

                    let flag = false;
                    for (let j = 0; j < sam.length; j++) {
                        if (sam[j].id == mata[i].id) {
                            flag = true;
                            break;
                        }
                    }

                    if (flag === true) {
                        alert("Already Placed Order")
                    } else {
                        sam.push(mata[i])
                        localStorage.setItem("buy", JSON.stringify(sam))
                        alert("Successfully Placed Order")
                    }
                }
            })
        }
    }
}


function done(image, name, processor, temp, ram, storage, price, brand) {

    let card = `
    <div class="hp-1">
    <img src=${image} alt="">
    <h3 class="name">${name}</h3>
    <p class="processor">${processor}</p>
    <p class="temp">${temp}</p>
    <p class="ram">${ram}</p>
    <p class="storage">${storage}</p>
    <h4 class="price"> ₹ ${price}<span class="sm-2"> with 30% off  </span><del> ${price * 0.3}</del></h4>
    <p class="brand">${brand}</p>
    <button class="ntb-1">Add to Cart</button>
    
</div>
    `
    return card;
}


function maibhi(image, name, processor, temp, ram, storage, price, brand) {

    let card = `
<div class="hp-2">

        <div class="titu1"><img src=${image} alt=""></div>
        
        <div class="titu2">
        <h3 class="name">${name}</h3>
        <p class="processor">${processor}</p>
        <p class="temp">${temp}</p>
        <p class="ram">${ram}</p>
        <p class="storage">${storage}</p>
        <h4 class="price"> ₹ ${price}<span class="sm-2"> with 30% off </span> <del>${price * 0.3}</del></h4>
        <p class="brand">${brand}</p>
        </div>

       
        <div class="titu3"><button class="ntb-1">Add to Cart</button>
            <p class="menn">Ways to Save <br> 5% OFF† Every Day with Adorama <br> Edge Credit Card</p>
            <p class="kenn"> Get Reward Points ✨</p>
           
        </div>
        
</div>
    `
    return card;
}

