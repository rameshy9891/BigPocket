const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
    let pwd1 = document.getElementById('pwd1').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        if (pwd != pwd1) {
            document.getElementById("pwd1").style.border = "2px solid red"
            alert("Enter your Password Again")
        } else {
            formData.push({ fname, lname, email, pwd, });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('fname').focus();
            document.getElementById("pwd1").style.border = "2px solid black"
            alert("Account Created.\n\nPlease Sign In using the link below.");

            location.href = "sign_in.html";
        }

    } else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let name = document.getElementById("hname")
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        if (pwd == "adminkuldeep" || pwd == "adminvishal") {
            document.getElementById("adminbtn").style.visibility = "visible";    
            alert("Admin Panel Unlocked")
        } else {
            alert("login success")
        }

    }
    e.preventDefault();
}
