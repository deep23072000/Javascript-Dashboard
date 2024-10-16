function addinfo(){
    let selectform = document.querySelector('.productform');
    selectform.style.display = "block";
    let selecttr = document.querySelector('#showtabledata');
    selecttr.style.filter = "blur(2px)"
}

function submitdata(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    let userinfo = {
        "name":name,
        "email":email
    }

    fetch('http://localhost:4000/products',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userinfo)
    })

    // window.location.href = "./index.html"
}

// =======================================delete data==========================

function del(arg){
    
    let con = window.confirm("Do you want to delete product information");
    if(con){
        fetch(`http://localhost:4000/products/${arg}`,{
            method:"DELETE"
        })
    }else{
        alert("invalid click")
    }
   
}

// ====================================open form=========================
let uid = null;
async function openform(arg){
    uid= arg
    let data = await fetch('http://localhost:4000/products');
    let response = await data.json();

    let info = response.find(e=>e.id === arg);
    console.log(info)

    let selectform = document.querySelector('.productform');
    selectform.style.display = "block";
    let selectubtn = document.querySelector('.ubtn');
    selectubtn.style.display = "block";
    let selectpbtn = document.querySelector('.pbtn');
    selectpbtn.style.display = "none";


    document.querySelector('#name').value = info.name;
    document.querySelector('#email').value = info.email;
}
// ========================================================================
// ========================final update================

function finalupdate(){
    
    let name = document.querySelector('#name').value;
    
    let email = document.querySelector('#email').value;
    let obj = {
        "name":name,
        "email":email
    }
   
    fetch(`http://localhost:4000/products/${uid}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    alert("right code");
    return false;
}
(async function(){
    let data = await fetch('http://localhost:4000/products');
    let response = await data.json();

    let selecttr = document.querySelector('#showtabledata');
    selecttr.innerHTML = response.map((items)=>`
    <tr>
    <td> ${items.id}</td>
    <td> ${items.name}</td>
    <td> ${items.email}</td>
    <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
    <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
    </tr>
    `).join(" ")
})()