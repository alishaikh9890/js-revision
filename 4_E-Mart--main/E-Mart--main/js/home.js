

  



let curUser = JSON.parse(localStorage.getItem("curUser"));
document.querySelector(".cta").innerHTML = `

       ${ curUser && `<button onclick="showCart()" class="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
         <span id="cartlength"></span> 🛒 
        </button>
        `}
  ${ curUser 
    ?
     `
        <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="::after { display:none !important; }" >
           <i class="fa-solid fa-user-tie"></i>
         </button>
         <ul class="dropdown-menu dropdown-menu-end">
           <li><a class="dropdown-item" href="#">${curUser.name}</a></li>
           <li><a class="dropdown-item" href="#">${curUser.email}</a></li>
            <li><hr class="dropdown-divider"></li>
           <li class="text-end">
               <button type="button" onclick="logOut()" class="navbar-toggler btn btn-danger active text-light fs-5 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
               <i class="fa-solid fa-right-from-bracket"></i>
             </button>  
           </li>
         </ul>
       </div>
     `
     :
       `  <button type="button" class="navbar-toggler bg-success text-light fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
          login <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
        `
        }
`

function logOut(){
 localStorage.removeItem("curUser");
 location.reload();
}
  



















  
function setCartData(d){
    localStorage.setItem("cartData", JSON.stringify(d))
  }
  
  
  
  let search = document.getElementById("search")
  
    search.addEventListener("keyup", function(e){
      let val = e.target.value.toUpperCase();
      
      let searchData = data.filter((ele) => !ele.title.toUpperCase().indexOf(val) || !ele.category.toUpperCase().indexOf(val))
   console.log(searchData)
  
      showData(searchData);
  
    })
  
  
  
  let boxes = document.querySelector("#boxes")
  
  let mens= document.querySelector("#mens");
  let viewall= document.querySelector("#viewall");
  let jewelery = document.querySelector("#jewelery")
  let price_sort = document.querySelector("#price_sort");
  
  
  
  price_sort.addEventListener("click", ()=>{
      // let getData = data.map((ele) => ele.price.sort());
  
      data.sort((a, b) => a.price - b.price);
      let getData = data;
      showData(getData)
  
      // let , amul, joke, amit
      // amit, amul, let, joke
  })
  
  jewelery.addEventListener("click", ()=>{
      let getData = data.filter((ele)=> ele.category=="jewelery");
      showData(getData)
  })
  
  mens.addEventListener("click", ()=>{
     let getData = data.filter((ele) => ele.category=="men's clothing");
      console.log(getData) ;
      showData(getData)
  })
  
  
  viewall.addEventListener("click", ()=>{
     let getData = data.map((ele) => ele);
      console.log(getData) ;
      showData(getData)
  })
  
  





// Cart js





  

let cartData = JSON.parse(localStorage.getItem("cartData")) || []
window.onload= showData(data);
window.onload = showCart(cartData)




function incCount(id){
    cartData =  cartData.map((ele) => {
      if(ele.id == id){
        ele.quentity += 1;
      }
      return ele;
    })

    localStorage.setItem("cartData", JSON.stringify(cartData));

    showCart();
    showData(data)
}


function descCount(id){
    cartData =  cartData.map((ele) => {
      if(ele.id == id){
        if(ele.quentity > 1){
              ele.quentity -= 1;
        }
        else{
          return ele = null;
        }
 
      }
      return ele;
    }).filter((ele) => ele != null)

    localStorage.setItem("cartData", JSON.stringify(cartData));

    showCart();
    document.getElementById("cartlength").innerHTML = cartData.length
    showData(data)
}


function removeItem(id){

     cartData = cartData.filter((ele) => ele.id != id);
   
    localStorage.setItem("cartData", JSON.stringify(cartData))

    // setCartData(remcartData);
    showCart()
    document.getElementById("cartlength").innerHTML = cartData.length;
    showData(data);

}


function checkCart(id){

  let cartData = JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele.id == id)

  return !cartData[0]
}



function checkQtn(id){

  let cartData = JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele.id == id)

  return cartData[0].quentity;
}





function addCart(id){

  let curUser = JSON.parse(localStorage.getItem("curUser"));

  if(curUser)
  {
    let newcartData = data.filter((ele) => ele.id == id).map((ele) => {
        if(ele.id == id){
          ele.quentity = 1; 
        }
      return ele;
      })

      cartData = [...cartData, ...newcartData]
      console.log(cartData)
    
      setCartData(cartData)

      document.getElementById("cartlength").innerHTML = cartData.length

      showData(data)
  }
  else
  {
                 
    let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
          myModal.show();
  }

}


document.getElementById("cartlength").innerHTML = cartData.length;















// home dom









function showData(getData){

  boxes.innerHTML = "";

getData.map((ele)=> {

boxes.innerHTML += `
<div class="col ">
<div class="card border-0 shadow-card p-2 h-100" >
<img style="aspect-ratio:1/1" src=${ele.image} class="card-img-top img-thumbnail p-2" alt="...">
<div class="card-body p-0 pt-1">
  <h6 class="card-title">${ele.title}</h6>
 
  <div class="d-flex justify-content-between">
     <span class="badge text-bg-secondary"> $ ${ele.price} /-</span>
     <span class="badge text-bg-light d-flex"><span style="display:block; overflow:hidden; width:${ele.rating.rate*16}px">⭐⭐⭐⭐⭐</span> ${ele.rating.rate}</span>
  </div>
  <div class="d-flex gap-2 pt-3">
  ${
    ( !checkCart(ele.id) && curUser)
     ?
      ` <div class="btn-group">
              <button onclick="incCount(${ele.id})" class="btn btn-dark btn-sm">+</button>
              <button class="btn btn-outline-dark disabled text-dark btn-sm">${checkQtn(ele.id)}</button>
              <button onclick="descCount(${ele.id})" class="btn btn-danger btn-sm btn-md-lg">-</button>
         </div>`
       :
        `
        <div class="text-center">
          <button onclick="addCart(${ele.id})" class="btn btn-success btn-sm btn-md-lg">Add to Cart</button>
        </div>
        `}
        <div class="text-center">
          <button onclick="addCart(${ele.id})" class="btn btn-warning btn-sm">More</button>
        </div>
  </div>
  
</div>
</div>
</div>
`
})

}














// cart DOM








cartData = JSON.parse(localStorage.getItem("cartData"))


function showCart(){
 let cartData = JSON.parse(localStorage.getItem("cartData"))

  let cart = document.querySelector(".cart");
  cart.innerHTML = "";

  cartData.map((ele) => {
  cart.innerHTML += `


              <div class="col-12">
                <div class="card border-0 p-2 shadow-card">
                  <div class="row">
                    <div class="col-3">
                      <img src=${ele.image} alt="${ele.title}" style="aspect-ratio:1/1" class="img-fluid rounded">
                    </div>
                    <div class="col-9">
                      <div class="card-body p-0 ps-2">
                        <h6 class="card-title">${ele.title}</h6>
                        <div class="card-text d-flex justify-content-between align-items-center">
                          <h6 class="card-text m-0"> <span class="badge text-bg-secondary"> $ ${ele.price*ele.quentity} /-</span></h6>
                           <div class="btn-group">
                            <button onclick="incCount(${ele.id})" class="btn btn-dark btn-sm">+</button>
                            <button class="btn btn-outline-dark disabled text-dark btn-sm">${ele.quentity}</button>
                            <button onclick="descCount(${ele.id})" class="btn btn-danger btn-sm">-</button>
                          </div>
                          <button onclick="removeItem(${ele.id})" class="btn btn-sm btn-light "><i class="bi bi-trash"></i></button>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
  `
})

}













// auth js



let register = [];
document.getElementById("register").addEventListener("submit", function(e){
 e.preventDefault();

 let obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    password: document.querySelector("#password").value,
 }

 register = JSON.parse(localStorage.getItem("register")) || []

  let log = register.filter((ele) => {
    if(ele.email == obj.email && ele.password == obj.password){
       return ele;
    }
    })

 if(log[0]){
        alert("user already exist");
 }
else if(obj.name != "" && obj.email !="" && obj.phone !="" && obj.password != "")
{


  localStorage.setItem("curUser", JSON.stringify(obj));

register.push(obj);

localStorage.setItem("register", JSON.stringify(register));

let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
myModal.hide();

location.reload()


}else{
 alert("Please register first")
}

}
)


document.getElementById("login").addEventListener("submit", function(e){
 e.preventDefault();

 let objlog = {
    email: document.querySelector("#email1").value,
    password: document.querySelector("#password1").value
 }
if( objlog.email !="" && objlog.password != "")
{

 register = JSON.parse(localStorage.getItem("register"))

  let log = register.filter((ele) => {
    if(ele.email == objlog.email && ele.password == objlog.password){
       return ele;
    }
    })

    localStorage.setItem("curUser", JSON.stringify(log))

    if(log[0]){
        let curUser = log[0];
        localStorage.setItem("curUser", JSON.stringify(curUser));
        
        let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
        myModal.hide();

        location.reload()

    }
    else{
        alert("user not register")
    }

}else{
 alert("Please Login first")
}

}
)











