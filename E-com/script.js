
var menuBtn = document.getElementById("menu") 
var leftMenu = document.querySelector('#side-bar-left')
var url = "./product.json"

menuBtn.addEventListener("click", function(){
    leftMenu.style.transition = "transform .5s ease-in-out"
      leftMenu.classList.toggle('active')
      if(leftMenu.classList.contains('active')){
          menuBtn.style.color ='black'
      }else{
        menuBtn.style.color ='white'
      }
  
})



  //  homeScreen slider
var leftBtn= document.querySelector('button.left')
var rightBtn = document.querySelector('button.right')
var images = document.querySelectorAll('.image')

var counter= 0;
updateSlide()

leftBtn.addEventListener("click", function(){
  counter--;
  if(counter<0){
    counter = images.length -1;
  }
  updateSlide()
})
rightBtn.addEventListener("click", function(){
  counter++;
  if (counter>images.length-1){
     counter= 0;
  }
  updateSlide()
})
 function updateSlide(){
     images.forEach(function(img){
      img.classList.remove('active')
     })
     images[counter].classList.add('active')
 }

 setInterval(function(){ 
     counter++;
     if (counter>images.length-1){
      counter= 0;
   }
   updateSlide()
 },2000)









  // categories

var main = document.querySelector('main .row')  



getProduct(url);

async function getProduct(url){
  const res = await fetch(url)
  const data = await res.json()

  
  var types =[]
  var sports = document.querySelector('.sports')
  var boots = document.querySelector('.boots')
  var sneakers = document.querySelector('.sneakers')
  var all = document.querySelector('.all')
    types.push(data.products.sports)
    types.push(data.products.boots)
    types.push(data.products.sneakers)
    showProduct(types[0])
    showProduct(types[1])
    showProduct(types[2]);
    
    
    all.addEventListener("click", function(){
      main.innerHTML =``
      showProduct(types[0])
      showProduct(types[1])
      showProduct(types[2]);
      glow()
    })
    

 sports.addEventListener("click", function(){
   main.innerHTML =``
  showProduct(types[0]); 
  glow()
 })
 boots.addEventListener("click", function(){
  main.innerHTML =``
  showProduct(types[1]);
  glow()
 })
   sneakers.addEventListener("click", function(){
    main.innerHTML =``
  showProduct(types[2]); 
  glow()
 })
    

}
function showProduct(products){   
products.forEach(function(product){
    const{id, name, price,image} = product
    var productsEl = document.createElement('div')
    productsEl.classList.add('products')
    
    productsEl.innerHTML =`
                
                 <div class="pro-image" style="background-image: url('${product.image}')"></div>
                 <div class= "name">Name:<span>${product.name}</span></div>
                 <div class="id">id:<span>${product.id}</span></div>
                 <div class="rating">Rating:<span></span></div>
                 <div class="price">Price:<span>${product.price}</span></div>`
    main.appendChild(productsEl)   
    productsEl.addEventListener("click", function(){
      localStorage.setItem('product',JSON.stringify(product));
      window.location.href="./product.html" })               
                })
      
                     
            
}

window.addEventListener('scroll',function(){
  glow()
  cartsContainer.classList.remove('active')
})



function glow(){
  
  var productsEl = document.querySelectorAll('.products')
	const trigger = window.innerHeight/5*4
	productsEl.forEach(function(productEl){

		const productTop = productEl.getBoundingClientRect().top
		
		if (trigger>productTop) {
	      productEl.classList.add('active')
	}else {
		productEl.classList.remove('active')
	}
	})
}


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
    var carts = document.querySelector('#carts')

    cartBtn.addEventListener('click',function(){
      cartsContainer.classList.toggle('active')
    })

  document.addEventListener('click',function(e){
  var x= e.target
  if (!cartsContainer.contains(x) && !cartBtn.contains(x)){
  cartsContainer.classList.remove('active')

}
  
})
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.addEventListener('load',function(){
  glow();
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
        carts.appendChild(cart);
        addRemove();
        removeLS()
        numberOfCart();
    })
    }
})


  var cartDatas =JSON.parse(localStorage.getItem('cart'))
  const product = JSON.parse(localStorage.getItem('product'))
  var cartProducts = [];




function updateLS(){
    
       cartProducts.push(product);    
       localStorage.setItem('cart',JSON.stringify(cartProducts))

}

// cart



function numberOfCart(){
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
    scroll
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

// clearCart
var clearCart = document.querySelector("#cart-clear")
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


  // countTotal

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



  

  
  function addRemove(){
    var removeBtn = document.querySelectorAll(".cart-remove")
    removeBtn.forEach(function(btn){
      btn.addEventListener("click", function(){
        this.parentElement.parentElement.parentElement.remove();
        setTimeout(() => {
          cartsContainer.classList.add('active');
        }, 1);
        countTotal();
        // update()
      })
    })
    
    } 
  
  
    
  
  
    function removeLS(x){
      var removeBtn = document.querySelectorAll(".cart-remove")
     
      removeBtn.forEach(function(btn){
  
    btn.addEventListener("click", function(){
      var cartDatas =JSON.parse(localStorage.getItem('cart'))
      
  
      var lessThan = cartDatas.some(function(cardata){
         return product.id === cardata.id
      })
      cartDatas.forEach(function(carData){
        if(lessThan = true){
          const index = cartDatas.indexOf(carData);
                if (index > -1) {
                  cartDatas.splice(index, 1);
                  console.log(cartDatas)
                  setTimeout(() => {
                    localStorage.setItem('cart',JSON.stringify(cartDatas))
                  }, 1);
              }
        }
      })
   
    })
      })}

var crossBtn = document.querySelector("#cross")


crossBtn.addEventListener("click", function(){
  cartsContainer.classList.remove('active')
})












