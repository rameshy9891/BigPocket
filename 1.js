



let cont = document.getElementById("cont")

let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let totalitem = document.getElementById("totalitem")

let mata = []
let inpp = document.getElementById("inp-1")
let btnnn = document.getElementById("btnnn")



let url = "https://63c646dcd307b7696735cbd0.mockapi.io/bp1"



fetchdata(url, inpp.value)
function fetchdata(url, searchs) {
    fetch(url + `/?search=${searchs}`)
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
        let pl = `
         ${cartdata.map(item => maibhi(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand)).join("")}
     `
        cont.style.display = "grid"
        cont.style.gridTemplateColumns = "repeat(1,1050px)"
        cont.innerHTML = pl;
        // cont.style.backgroundColor = "#ed5132"
        ss();
    })

    image2.addEventListener("click", () => {
        let pl = `
        ${cartdata.map(item => done(item.image, item.name, item.processor, item.temp, item.ram, item.storage, item.price, item.brand)).join("")}
    `
        cont.innerHTML = pl;
        cont.style.display = "grid"
        cont.style.gridTemplateColumns = "repeat(3,1fr)"
        ss()
    })

    ss()
    function ss() {
        let ntb = document.getElementsByClassName("ntb-1")

        for (let i = 0; i < ntb.length; i++) {
            let sam = JSON.parse(localStorage.getItem("buy")) || []
            ntb[i].addEventListener("click", () => {
                if (sam.length === 0) {
                    sam.push(mata[i])
                    localStorage.setItem("buy", JSON.stringify(sam))
                    alert("Successfully Placed Order")
                    window.location.assign("/cart.html")
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
                        window.location.assign("/cart.html")
                    }
                }
            })
        }
    }
}


function done(image, name, processor, temp, ram, storage, price, brand) {

    let card = `
    <div class="hp-1">
    <div class="ttnn"><img src=${image} alt=""></div>
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

btnnn.addEventListener("click", () => {
    fetchdata(url, inpp.value)

})

inpp.addEventListener("keydown",()=>{
    fetchdata(url, "")
})






let All = document.getElementById("mone22")
let Acer = document.getElementById("mone221")
let Apple = document.getElementById("mone222")
let Asus = document.getElementById("mone223")
let Azulle = document.getElementById("mone224")
let HP = document.getElementById("mone225")
let Lenovo = document.getElementById("mone226")
let iBuypower = document.getElementById("mone227")
let LG = document.getElementById("mone228")
let Samsung = document.getElementById("mone229")

All.addEventListener("click",()=>{
    
    fetchdata(url, inpp.value)
})

Acer.addEventListener("click",()=>{
    let str = "Acer"
    fetchdata(url, str)
})
Apple.addEventListener("click",()=>{
    let str = "Apple"
    fetchdata(url, str)
})
Asus.addEventListener("click",()=>{
    let str = "Asus"
    fetchdata(url, str)
})
Azulle.addEventListener("click",()=>{
    let str = "Azulle"
    fetchdata(url, str)
})
HP.addEventListener("click",()=>{
    let str = "HP"
    fetchdata(url, str)
})
Lenovo.addEventListener("click",()=>{
    let str = "Lenovo"
    fetchdata(url, str)
})
iBuypower.addEventListener("click",()=>{
    let str = "iBuypower"
    fetchdata(url, str)
})
LG.addEventListener("click",()=>{
    let str = "LG"
    fetchdata(url, str)
})
Samsung.addEventListener("click",()=>{
    let str = "Samsung"
    fetchdata(url, str)
})

// let team = [];
// for(let i=0; i<mata.length; i++){
//     team.push(mata[i])
//     i++
// }
// console.log(team)
let sub1 = document.getElementById("sub1")
sub1.addEventListener("change",()=>{
let value = sub1.value
    if(value=="Low to High"){
       let x =  mata.sort((a,b)=>  a.price-b.price)
       rendercards(x)
    }else if(value =="High to Low"){
        let x =  mata.sort((a,b)=>  b.price-a.price)
        rendercards(x)
    }else if(value =="High Rated"){
        fetchdata(url, inpp.value)
    }else{
        fetchdata(url, inpp.value)
    }

})