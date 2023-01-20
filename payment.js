let giftext = document.getElementById("gifttext")

let promoCodeCancel = document.getElementById("promocancel")

let promocodeinput= document.getElementById("promocodeinpdiv")
let promogift= document.getElementById("promogift")

let billingAddress = document.getElementById("billingaddresscheck")

let billinfDetails= document.getElementById("billingDetails")

let salesAssistchechbox = document.getElementById("salesAssistchechbox")

let slaesassistqueryHead= document.getElementById("slaesassistquery")

let salespersonSelect= document.getElementById("salesperson")


let salecassistCancel= document.getElementById("salesassistCancel")



giftext.addEventListener("click",()=>{
    giftext.classList.add("displaynone")
    promocodeinput.classList.remove("displaynone")
    promoCodeCancel.classList.remove("displaynone")
    console.log("clicked")
})
promoCodeCancel.addEventListener("click",()=>{
    promoCodeCancel.checked===false
    giftext.classList.remove("displaynone")
    promocodeinput.classList.add("displaynone")
    promoCodeCancel.classList.add("displaynone")
})
billingAddress.addEventListener("change",()=>{
    if(billingAddress.checked ===true){
        billinfDetails.classList.add("displaynone")
        
    }
})

salesAssistchechbox.addEventListener("change",()=>{
    if(salesAssistchechbox.checked===true){
        salesAssistchechbox.classList.add("displaynone")
        slaesassistqueryHead.classList.add("displaynone");
        salespersonSelect.classList.remove("salesperson");
        salecassistCancel.classList.remove("displaynone")
    }
})

salecassistCancel.addEventListener("click",()=>{
    salecassistCancel.checked=false
    salesAssistchechbox.classList.remove("displaynone")
    slaesassistqueryHead.classList.remove("displaynone");
    salespersonSelect.classList.add("salesperson");
    salecassistCancel.classList.add("displaynone")
})
