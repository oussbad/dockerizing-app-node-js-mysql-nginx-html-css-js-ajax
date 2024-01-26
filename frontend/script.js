let xhr = new XMLHttpRequest();
const mytable= document.querySelector('#mytable');
const tbody=document.querySelector('#tbody')

xhr.open("GET","http://localhost:8888" ,true)
const addUsers=(user)=>{
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    
    
    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    
    let {id,username ,age} = user
    td1.innerText=id
    td2.innerText=username
    td3.innerText=age
    
}

xhr.addEventListener('load', () => {
  const response = JSON.parse(xhr.responseText);

  if (response.success) {
    const users = response.rows;
    
    users.forEach(user => {
      addUsers(user);
    });
  } else {
    console.error('Error in server response:', response.error);
  }
});

xhr.send();
///json-server  --watch bd.json