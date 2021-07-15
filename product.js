

var menuBtn = document.getElementById("menu") 
var leftMenu = document.querySelector('#side-bar-left')


menuBtn.addEventListener("click", function(){
    leftMenu.style.transition = "transform .5s ease-in-out"
      leftMenu.classList.toggle('active')
      if(leftMenu.classList.contains('active')){
          menuBtn.style.color ='black'
      }else{
        menuBtn.style.color ='white'
      }
  
})


  



 
    

 




//             account

    var accountBtn = document.querySelector('#account')
    var accountContainer = document.querySelector('#account-container')
    
accountBtn.addEventListener('click',function(){
      accountContainer.classList.toggle('active')
    })

document.addEventListener('click',function(e){
  var x= e.target
  if (!accountContainer.contains(x) && !accountBtn.contains(x)){
  accountContainer.classList.remove('active')

}
  
})


     var login = document.querySelector('#login')
     var register = document.querySelector('#register')
     var loginContainer = document.querySelector('#login-container')
     var registerContainer = document.querySelector('#register-container') 

     login.addEventListener('click',function(){
      registerContainer.classList.remove('active')
      loginContainer.classList.add('active')
      login.classList.add('active')
      register.classList.remove('active')
     })
     register.addEventListener('click',function(){
      loginContainer.classList.remove('active')
      registerContainer.classList.add('active')
      register.classList.add('active')
      login.classList.remove('active')
     })



    //  cart

    var cartBtn = document.querySelector('#cart') 
    var cartsContainer = document.querySelector('#carts-container')
    var cartImage = document.querySelector('.cartImage')
    var cartName = document.querySelector('.cartName')
    var cartPrice = document.querySelector('.cartPrice')
    var carts = document.querySelector('#carts')

    var cartDatas =JSON.parse(localStorage.getItem('cart'))
    update()

    function update(){

    if (cartDatas){
      cartDatas.forEach(function(cartData){
        var cart = document.createElement('div')
        cart.classList.add('cart')
        cart.innerHTML =`
        <div class="cart-container">
         <div class="cart-image" style="background-image:url('${cartData.image}')"></div>
         <div class="cart-info"> 
         <div class="cart-name">${cartData.name}</div>
         <div class="cart-price">${cartData.price}</>$</div>
         <div class="cart-remove">Remove</div>
      </div></div>
      <div class="cart-product-input">
      <button class="up-input"><i class="fas fa-chevron-up"></i></button>
      <input type="number"  value="1" min="1">
          <button class="down-input"><i class="fas fa-chevron-down"></i></button>
          </div>`
         carts.appendChild(cart)
          
      })
    }}

    function createCart(){
      var cart = document.createElement('div')
      cart.classList.add('cart')
      cart.innerHTML =`
      <div class="cart-container">
       <div class="cart-image" style="background-image:url('${product.image}')"></div>
       <div class="cart-info"> 
       <div class="cart-name">${product.name}</div>
       <div class="cart-price">${product.price}</>$</div>
       <div class="cart-remove">Remove</div>
    </div></div>
    <div class="cart-product-input">
      <button class="up-input"><i class="fas fa-chevron-up"></i></button>
      <input type="number"  value="1" min="1">
          <button class="down-input"><i class="fas fa-chevron-down"></i></button>
          </div>`
       carts.appendChild(cart)
      
     
    }


    cartBtn.addEventListener('click',viewCart)

    function viewCart(){
      cartsContainer.classList.toggle('active')
    }

  document.addEventListener('click',function(e){
  var x= e.target
  if (!cartsContainer.contains(x) && !cartBtn.contains(x) && spCart != x) {
  cartsContainer.classList.remove('active')

}
  
})
function increaseNumber(){
  var count =1;
  count =  this.parentElement.querySelector("input").value 
 count++;
 this.parentElement.querySelector("input").value = count;
}

function updateInput(){

var cart_upBtn = document.querySelectorAll(".cart .up-input")
var cart_downBtn = document.querySelectorAll(".cart .down-input")
//  var count = 1;
 cart_upBtn.forEach(function(btn){
 
    btn.addEventListener('click',function(){
      var count = this.parentElement.querySelector("input").value;
      
     count++;
     this.parentElement.querySelector("input").value = count;
     

      countTotal();
    }) })
    
 cart_downBtn.forEach(function(btn){
 
  btn.addEventListener('click',function(){
    var count = this.parentElement.querySelector("input").value 
    console.log(count)
    count--;
    if(count === 0){
      count =1;
    }
    this.parentElement.querySelector("input").value = count;
    console.log(count)
    countTotal();
    
  })
})
 

}
// updateInput();
// ----------------------single-product----



var spImage = document.querySelector(".single-product-image")
var spSize = document.querySelector(".single-product-size")
var spPrice = document.querySelector(".single-product-price")
var spCart = document.querySelector(".add-cart")
var spName = document.querySelector(".single-product-info h1")
var upBtn = document.querySelector(".single-product-input .up-input")
var downBtn = document.querySelector(".single-product-input .down-input")
var input = document.querySelector(".single-product-number")
var clearCart = document.querySelector("#cart-clear")
var numberOfProduct =1;


function updateNumber(){
  input.value = numberOfProduct
}
upBtn.addEventListener('click', function (){
  numberOfProduct++;
  updateNumber()
  
})
downBtn.addEventListener('click',function(){
  numberOfProduct--;
  if (numberOfProduct<=0){
    numberOfProduct =1;
  }
  updateNumber()
})
const product = JSON.parse(localStorage.getItem('product'))


spImage.style.backgroundImage = `url("${product.image}")`
spPrice.innerHTML = `${product.price}$`
spName.innerHTML = `${product.name}`




spCart.addEventListener('click',function(){
   
  if (localStorage.getItem("cart") === null){
    updateLS();
    createCart();
    updateInput();
    cartsContainer.classList.add('active');
  }else{
    var cartDatas =JSON.parse(localStorage.getItem('cart'))
    console.log(cartDatas)

  var lessThan = cartDatas.some(function(cardata){
     return product.id === cardata.id
  })

  if(lessThan === true){
    var cart_input = document.querySelectorAll(".cart input")
      cart_input.forEach(function(btn){
         var t= btn.parentElement.parentElement
        if(t.innerHTML.indexOf(product.name)!= -1){
          var counter = btn.value
          counter ++;
          btn.value = counter;
          // numberOfCart();
        }
      
      })
 
  }
  else{
    pushLS(cartDatas)
    inLS(cartDatas)
    createCart();
    updateInput();
   
    cartsContainer.classList.add('active');
  }
}
   countTotal()
})




function pushLS(cartProducts){
  cartProducts.push(product)
}
function inLS(cartProducts){
  localStorage.setItem('cart',JSON.stringify(cartProducts))
}

function updateLS(){
      var cartProducts = [];
       pushLS(cartProducts)
       inLS(cartProducts)
          
       

}







clearCart.addEventListener('click',function(){
     localStorage.setItem('cart',[])
     localStorage.removeItem('cart')
  var cart = document.querySelectorAll(".cart")
  if (cart){
    cart.forEach(function(c){
       c.remove();
    })
  }
  // update()
  countTotal()
})



// function numberOfCart(){
//   var cart_input = document.querySelectorAll(".cart input")
// cart_input.forEach(function(btn){
//   var lessThan = cartDatas.some(function(cardata){
//     return product.id === cardata.id
//   })
//   if(lessThan===false){
//     var btnValue = [btn.value];
//     btnValue.push(btn.value);
//     localStorage.setItem("number",JSON.stringify(btnValue))

//   }
//   else{ 
//     var btnValue = [];
//     btnValue.push(btn.value);
//     localStorage.setItem("number",JSON.stringify(btnValue))
//   }

 


// var ay = JSON.parse(localStorage.getItem("number"))


// if(ay){
//    cart_input.forEach(function(btn){

//    })
//   console.log(ay)
// }
// })




// }

// var cart_input = document.querySelectorAll(".cart input")


// var ay = JSON.parse(localStorage.getItem("number"))


// if(ay){
//   for (let i = 0; i < cart_input.length; i++) {
//      cart_input[i].value = ay[i]
    
//   }}
 countTotal()
function countTotal(){
  var cart_input = document.querySelectorAll(".cart input") 
  var cart_total =document.getElementById("cart-total")
   var y = []
    cart_input.forEach(function(as){ 
    var x = as.parentElement.parentElement.querySelector(".cart-price").innerText;
   
    y.push(parseInt(x) * parseInt(as.value))
    var total = y.reduce((a,b)=>a+b, 0)
    
     cart_total.innerHTML= `Your total :${total}$`
  }) 
  if(cart_input.length == 0){
    cart_total.innerHTML= `Your total : 00$`
  }
  // console.log(cart_input)
  
 
  
    
    
}




// remove

var removeBtn = document.querySelectorAll(".cart-remove")

removeBtn.forEach(function(btn){
  btn.addEventListener("click", function(){
    this.parentElement.parentElement.parentElement.remove();
    cartsContainer.classList.add('active');
    countTotal();
  })
})