let baseURL = "http://localhost:3000/products";

let toAppended = document.getElementById("containerwa");
let form = document.getElementById("form"); 
fetch(baseURL)
.then((obj)=>{
    return obj.json();
})
.then((data)=>{
    display(data);
})
.catch((error)=>{
    console.log(error)
})
function display(data){
    toAppended.innerHTML = null;
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
        toAppended.append(card);
    })
}
//Post Method
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
            created:created,
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
    //Update Method
    let form2 = document.getElementById("form2");
form2.addEventListener("submit",function(e){
    e.preventDefault()
    let nameu = document.getElementById("nameu").value;
    let storageu = document.getElementById("storageu").value;
    let imageu = document.getElementById("imageu").value;
    let createdu = document.getElementById("createdu").value;
    let processoru = document.getElementById("processoru").value;
    let ramu = document.getElementById("ramu").value;
    let tempu = document.getElementById("tempu").value;
    let idu = document.getElementById("idu").value;
    let priceu = document.getElementById("priceu").value;
    fetch(`${baseURL}/${idu}`,{
        method:'PATCH',
        body:JSON.stringify({
            created:createdu,
            name:nameu,
            storage:storageu,
            processor:processoru,
            ram:ramu,
            temp:tempu,
            image:imageu,
            id:idu,
            price:priceu
        }),
        headers:{
            "Content-type":"application/json; carset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        display(data)
    })
    })
    let form1 = document.getElementById("form1");


    //Delete method
    form1.addEventListener("submit",()=>{
        let ids = document.getElementById("ids").value;
        let options = {
            method:"DELETE"
        }
        fetch(`${baseURL}/${ids}`,options)
        .then(response=>console.log(response.status))
       
    })
//****************************************************************************** */

    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

    allSideMenu.forEach(item=> {
        const li = item.parentElement;
    
        item.addEventListener('click', function () {
            allSideMenu.forEach(i=> {
                i.parentElement.classList.remove('active');
            })
            li.classList.add('active');
        })
    });  
    // TOGGLE SIDEBAR
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    
    menuBar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');
    })   
    const searchButton = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    const searchForm = document.querySelector('#content nav form');
    
    searchButton.addEventListener('click', function (e) {
        if(window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if(searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('bx-search', 'bx-x');
            } else {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
            }
        }
    })
    
    
    
    
    
    if(window.innerWidth < 768) {
        sidebar.classList.add('hide');
    } else if(window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
    
    
    window.addEventListener('resize', function () {
        if(this.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }
    })
    
    
    
    const switchMode = document.getElementById('switch-mode');
    
    switchMode.addEventListener('change', function () {
        if(this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
    let add = document.getElementById("add");
    let update = document.getElementById("update");
    let del = document.getElementById("del");
    let crud = document.getElementById("crud");
    let cr = document.getElementById("cr");
    let section = document.getElementById("todel")
    let containers = document.getElementById("container")
    let container1 = document.getElementById("container1")
    let container2 = document.getElementById("container2")
    add.addEventListener("click",()=>{
        section.style.display = "none";
        crud.innerText = "CRUD Operations";
        cr.innerText = "Add";
            containers.style.display = "block";
    })
    del.addEventListener("click",()=>{
        crud.innerText = "CRUD Operations";
        cr.innerText = "Delete";
        section.style.display = "none";
        container1.style.display = "block";
    })
    update.addEventListener("click",()=>{
        crud.innerText = "CRUD Operations";
        cr.innerText = "Update";
        section.style.display = "none";
        container2.style.display = "block";
    })