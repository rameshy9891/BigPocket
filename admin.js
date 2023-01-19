let baseURL = "http://localhost:3000/products";

let container = document.getElementById("container1");
let form = document.getElementById("form"); 
fetch(baseURL)
.then((obj)=>{
    return obj.json();
})
.then((data)=>{
    display(data);
})
function display(data){
    container.innerHTML = null;
    data.forEach((element)=>{
        let card = document.createElement("div");
        let name = document.createElement("h1");
        let image = document.createElement("img");
        let ram = document.createElement("p");
        ram.innerHTML = element.ram
        image.setAttribute("src",element.image)
        name.innerText = element.name
        let storage = document.createElement("h2");
        storage.innerText = element.storage
        card.append(name,image,storage,ram)
        container.append(card);
    })
}
form.addEventListener("submit",function(e){
    e.preventDefault()
    let name = document.getElementById("name").value;
    let storage = document.getElementById("storage").value;
    let image = document.getElementById("image").value;
    let created = document.getElementById("created").value;
    let processor = document.getElementById("processor").value;
    let ram = document.getElementById("ram").value;
    let temp = document.getElementById("temp").value;
    let id = document.getElementById("id").value;
    let price = document.getElementById("price").value;
    fetch(baseURL,{
        method:'POST',
        body:JSON.stringify({
            // created:created,
            name:name,
            storage:storage,
            processor:processor,
            ram:ram,
            temp:temp,
            image:image,
            id:id,
            price:price
        }),
        headers:{
            "Content-type":"application/json; carset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data)
        display(data)
    })
    })
    let form1 = document.getElementById("form1");
    //Delete method
let main = document.getElementById("mains");
let main1 = document.getElementById("mains1");
let add = document.getElementById("add")
let del = document.getElementById("del")
let update = document.getElementById("update")
add.addEventListener("click",()=>{
    // alert("hii")
    // main.innerHTML = null
    main1.style.display = "none"
    main.style.display = "flex";
})
del.addEventListener("click",()=>{
    // alert("hii")
    // main1.innerHTML = null;
    main.style.display = "none";
    main1.style.display = "flex";
})