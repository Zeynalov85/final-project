let num=document.querySelectorAll('.num')
let btn_card=document.querySelectorAll('.btn_card')
let comment=document.querySelector('.comment')
let i=0
let a=Number(num[0].innerHTML)
let b=Number(num[1].innerHTML)
let d=Number(num[2].innerHTML)
let c=Number(num[3].innerHTML)
function numberPlus(){   
    i++
    if(i<=a){
        num[0].innerHTML=i
    }
    if(i<=b){
        num[1].innerHTML=i
    }
    if(i<=d){
        num[2].innerHTML=i
    }
    if(i<=c){
        num[3].innerHTML=i
    }
}
setInterval(numberPlus,1000)
let say=0;          
window.addEventListener('scroll',()=>{
    let g=document.documentElement.scrollTop;
    if(g>1200){
        say++;
        if(say==1){
            setInterval(numberPlus,30)
        }
       
    }
})
let special_content=document.querySelectorAll('.special_content')
let icon1=document.querySelectorAll('.icon1')
let icon2=document.querySelectorAll('.icon2')

for(let i=0;i<icon1.length;i++){
    icon1[i].addEventListener('click',()=>{
        special_content[i].style.display='block'
        icon1[i].style.display='none'
        icon2[i].style.display='block'
    })
    
}
for(let i=0;i<icon2.length;i++){
    icon2[i].addEventListener('click',()=>{
        special_content [i].style.display='none'
        icon1[i].style.display='block'
        icon2[i].style.display='none'
    })
}


let leftBtn = document.getElementById('left-btn')
let rightBtn = document.getElementById('right-btn')
let sliderContainer = document.getElementById('section-slider-container')

function slide() {
    for (let i = 0; i < sliderContainer.children.length; i++) {
        sliderContainer.children[i].style.transform = `translateX(${-320 * count}px)`
    }

}
let count = 0;

setInterval(() => {
    if (count < sliderContainer.children.length) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }
}, 4000);
leftBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        slide();
    } else {
        count = 0;
        slide();
    }
})

rightBtn.addEventListener('click', () => {
    if (count > sliderContainer.children.length - 10) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }
})
let body=document.querySelector('body')
let radio=document.querySelector('.radio')
radio.addEventListener('click',()=>{
    if(body.className=='dark'){
        body.classList.remove('dark')
        radio.style.transform='translateX(0px)'
    }else{
        body.classList.add('dark')
        radio.style.transform='translateX(30px)'

    }
})


let taggleArray=[
    {
        id:1,
        image:'images/profile.jpg',
        text:" Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.",
        saat:'09:00 am - 09:30 am'
    },
    {
        id:2,
        image:'images/Aplicaciones-para-Convertir-foto-en-dibujo.jpg',
        text:" Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.",
        saat:'10:00 am - 10:30 am'
    },
    {
        id:3,
        image:'images/unnamed.webp',
        text:" Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.",
        saat:'11:00 am - 11:30 am'
    },
    {
        id:4,
        image:'images/c763ee1574d674764feb431e6c9d8a46406471eb_m.jpg',
        text:" Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.",
        saat:'12:00 am - 12:30 am'
    }
]
comment.innerHTML=`
<div class="comment_img">
<img src="${taggleArray.image}" alt="" />
</div>
<div class="comment_text_button">
<div class="comment_text">
  <p>09:00 am - 09:30 am</p>
  <h2>LOREM IPSUM DOLOR SIT AMET, CONSE CTETUR ADIPI</h2>
  <p class="p_3">
    Mauris accumsan eros eget libero posuere vulputate. Etiam elit
    elit, elementum sed varius at, adipiscing vitae est. Sed nec
    felis pellentesque, lacinia dui sed, ultricies sapien.
  </p>
  <p class="p_4">JOHN SMITH</p>
</div>
<div class="comment_btn">
  <button class="btn_1">LOCATION</button>
  <button class="btn_2">PROFILE</button>
</div>
</div>
`



// console.log(btn_card);
for(let i=0;i<btn_card.length;i++){
    btn_card[i].addEventListener('click',(e)=>{
        for(let j=0;j<btn_card.length;j++){ 
            if(btn_card[j].className=='btn_card btn_active' || btn_card[j].className=='btn_active btn_card'){
                btn_card[j].classList.remove('btn_active')
            }
        }
       btn_card[i].classList.add('btn_active')
       let checkItem=taggleArray.find(e=>e.id==(i+1))
    //    console.log(checkItem);
    comment.innerHTML=`
<div class="comment_img">
<img src=${checkItem.image} alt="" />
</div>
<div class="comment_text_button">
<div class="comment_text">
  <p>${checkItem.saat}</p>
  <h2>LOREM IPSUM DOLOR SIT AMET, CONSE CTETUR ADIPI</h2>
  <p class="p_3">
   ${checkItem.text}
  </p>
  <p class="p_4">JOHN SMITH</p>
</div>
<div class="comment_btn">
  <button class="btn_1">LOCATION</button>
  <button class="btn_2">PROFILE</button>
</div>
</div>
`
    })
}
