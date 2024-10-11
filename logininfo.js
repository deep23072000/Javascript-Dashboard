
function info(){
    let information = window.localStorage.getItem('logininfo');
    let information1 = JSON.parse(information);

    let selectimg = document.querySelector('#img');
    selectimg.src =  information1.image;
   
    let selectusername = document.querySelector('#username');
    selectusername.innerHTML = information1.name;
    selectusername.style.color = "white"


    let selectuseremail = document.querySelector('#useremail');
    selectuseremail.innerHTML = information1.email;
    selectuseremail.style.color = "white"
    
}

(async function (){

    let data = await fetch('http://localhost:4000/user');
    let response = await data.json();
    let selectnoofuser = document.querySelector('#users');
    selectnoofuser.innerHTML = response.length;
})()

