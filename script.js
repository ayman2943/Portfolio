var menuBtn = document.querySelector("#menu-btn")
var firstBtn = document.querySelector("#first-btn")
var secondBtn = document.querySelector("#second-btn")
var menu = document.querySelector('#navbar ul')

menuBtn.addEventListener("click", function(){
   firstBtn.classList.toggle("hidden")
   secondBtn.classList.toggle("hidden")
   menu.classList.toggle("collapsed")
})






 var home = document.querySelector(".home")
var works = document.querySelector('.works')
var about = document.querySelector('.about')
var skills = document.querySelector('.skills')
var leftHome = document.querySelector('#home-left')
var rightHome = document.querySelector('#home-right')
var rightHomeBig = document.querySelector('#home-right #right-cross')
var rightHomeText = document.querySelector('#home-right p')
var homePage = document.querySelector("#homepage")
var basketball = document.querySelector("#basketball")
var eCom= document.querySelector("#eCom")

works.addEventListener('click',function(){
           removeHome()
           removeSkill()
          
         setTimeout(() => {
            bringWork()
         }, 250);   
         eCom.addEventListener('click',function(){
            window.location.href = "https://ayman2943.github.io/Portfolio/E-com/index.html"
         }) 
         basketball.addEventListener('click',function(){
            window.location.href = "https://ayman2943.github.io/Portfolio/basketball/index.html"
         }) 
         
})
home.addEventListener('click',function(){
   
   // homePage.style.display=``
   removeWork()
   removeSkill()
   
   setTimeout(() => {
      bringHome()
   }, 250); 

})
skills.addEventListener("click",function(){
   removeWork()
   removeHome()
   setTimeout(() => {
      bringSkill();
   }, 250); 
  
})






//  functions

function removeHome(){
   leftHome.style.transform =` translateX(-100%)`
   leftHome.style.transition = ` all .5s ease-in-out`
   rightHomeBig.style.transform = `translateX(100%)`
   rightHomeBig.style.transition = ` all .5s ease-in-out`
   setTimeout(() => {
      rightHomeText.style.display = `none`
   }, 250);
   setTimeout(() => {
      rightHome.style.transform = `translateX(100%)`
   rightHome.style.transition = ` all .5s ease-in-out`
      
   },500);
   setTimeout(() => {
      homePage.style.display=`none`
   }, 450);
}

function bringHome(){
   homePage.style.display = ``
   setTimeout(() => {
      leftHome.style.transform =` translateX(0)`
      leftHome.style.transition = ` all 1s ease-in-out`
   }, 100);
  
   rightHome.style.transform = ``
   rightHome.style.transition = `all .5s ease-in-out`
   setTimeout(() => {
      rightHomeText.style.display = ``
   }, 500);
   setTimeout(() => { 
      mediaOfHome()
      window.addEventListener("resize",mediaOfHome )
   },100);
}


// media query
function mediaOfHome(){
   if(window.innerWidth>991){
      rightHomeBig.style.transform = `translateX(0%) skewX(50deg)`
      rightHomeBig.style.transition = ` transform 1s ease-in-out`
   } else if(window.innerWidth>767&& window.innerWidth<=991){
      rightHomeBig.style.transform = `translateX(0%) skewX(40deg)`
      rightHomeBig.style.transition = ` transform 1s ease-in-out`
   }
   else if(window.innerWidth>575 && window.innerWidth<=767){
      rightHomeBig.style.transform = `translateX(0%) skewX(30deg)`
      rightHomeBig.style.transition = ` transform 1s ease-in-out`
   }
    else if(window.innerWidth>299 && window.innerWidth<= 575){
      rightHomeBig.style.transform = `translateX(0%) skewX(20deg)`
      rightHomeBig.style.transition = ` transform 1s ease-in-out`
   }else{
      rightHomeBig.style.transform = `translateX(0%) skewX(15deg)`
      rightHomeBig.style.transition = ` transform 1s ease-in-out`
   }
}
function mediaOfWork(){
   if(window.innerWidth>991){
      workCross.style.transform = ` skewX(-15deg)`
      workCross.style.transition = ` transform .5s ease-in-out`
   } else if(window.innerWidth>767&& window.innerWidth<=991){
      

      workCross.style.transform = ` skewX(-10deg)`
      workCross.style.transition = ` transform .5s ease-in-out`
   }
   else if(window.innerWidth>575 && window.innerWidth<=767){
      workCross.style.transform = ` skewX(-5deg)`
      workCross.style.transition = ` transform .5s ease-in-out`
   }
    else if(window.innerWidth>299 && window.innerWidth<= 575){
      workCross.style.transform = ` skewX(-4deg)`
      workCross.style.transition = ` transform .5s ease-in-out`
   }
   else if(window.innerWidth<=299){
     
      workCross.style.transform = ` skewX(-3deg)`
      workCross.style.transition = ` transform .5s ease-in-out`
   }
}
function mediaOfSkill(){
   if(window.innerWidth>991){
      skillCross.style.transform = ` skewX(15deg)`
      skillCross.style.transition = ` transform .5s ease-in-out`
   } else if(window.innerWidth>767&& window.innerWidth<=991){
      

      skillCross.style.transform = ` skewX(10deg)`
      skillCross.style.transition = ` transform .5s ease-in-out`
   }
   else if(window.innerWidth>575 && window.innerWidth<=767){
      skillCross.style.transform = ` skewX(5deg)`
      skillCross.style.transition = ` transform .5s ease-in-out`
   }
    else if(window.innerWidth>299 && window.innerWidth<= 575){
      skillCross.style.transform = ` skewX(5deg)`
      skillCross.style.transition = ` transform .5s ease-in-out`
   }
   else if(window.innerWidth<=299){
     
      skillCross.style.transform = ` skewX(4deg)`
      skillCross.style.transition = ` transform .5s ease-in-out`
   }
}



// work


var workPage =document.querySelector('#workpage')
var workCross = document.querySelector("#work-cross")
var workBox = document.querySelector(".workBox")
function bringWork(){
   workPage.style.display=``
   setTimeout(function(){
      workPage.classList.add("active")
   menuBtn.style.color = `black`
   },100)
   
   mediaOfWork()
   window.addEventListener("resize",mediaOfWork)

}
function removeWork(){
   workPage.classList.remove("active")
   menuBtn.style.color = ``
   setTimeout(() => {
      workPage.style.display=`none`
   }, 450);
}

// skills

var skillPage =document.querySelector('#skillPage')
var skillCross = document.querySelector("#skillCross")

function bringSkill(){
   skillPage.style.display=``
   setTimeout(function(){
      skillPage.classList.add("active")
  
   },100)
   
   mediaOfSkill()
   window.addEventListener("resize",mediaOfSkill)

}
function removeSkill(){
   skillPage.classList.remove("active")
 
   setTimeout(() => {
      skillPage.style.display=`none`
   }, 450);
}



