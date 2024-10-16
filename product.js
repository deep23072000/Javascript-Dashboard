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

(async function(){
    let data = await fetch('http://localhost:4000/products');
    let response = await data.json();

    let selecttr = document.querySelector('#showtabledata');
    selecttr.innerHTML = response.map((items)=>`
    <tr>
    <td> ${items.id}</td>
    <td> ${items.name}</td>
    <td> ${items.email}</td>
    </tr>
    `).join(" ")
})()