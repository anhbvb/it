

const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
       menu.classList.toggle("block")
    })
})

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
   imgItem.addEventListener("click",function(){
        bigImg.src= imgItem.src
    })
})

//------slider product-------//
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const imgNubertwo = document.querySelectorAll('.slider-product-one-content-items')
//console.log(rightbtntwo)
//console.log(leftbtntwo)

rightbtntwo.addEventListener("click",function(){
    index = index+1
    if(index > imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtntwo.addEventListener("click", function(){
    index=index+1
    if(index<=0){
        index = imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.left = index *100+"%"
})
