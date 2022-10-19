
"use strict"
const rosalIcon=document.getElementById('logo');
const navigationMenu=document.querySelector('.navigation_menu');
const navItem=document.querySelectorAll('.navigation_item');
const rosalImg=document.querySelector('.main__image');
const section=document.querySelector('.section');
const btnScroolTo=document.querySelector('.btn_scroll_to');
const sectionOne=document.querySelector('#section--1')
const operations=document.querySelector('.operations')
const tabsContainer=document.querySelector('.tab_container')
const tabs=document.querySelectorAll('.tab_operation')
const contentOperation=document.querySelectorAll('.content_operation') 
const slide=document.querySelector('.slide')
const btnSliderPrev=document.querySelector('.slider__btn--left')
const btnSliderNext=document.querySelector('.slider__btn--right')
const navRect=navigationMenu.getBoundingClientRect().height
const sectionAll=document.querySelectorAll('.section')
const header=document.querySelector('header')
 rosalIcon.style.transform='none'
 rosalIcon.style.margin='0 auto'
 document.documentElement.classList.add('img_lazy')  

let click=true;
let counter=0;
let newClick=true;
let sliderIncrease=0;

//Manipularea Meniului in functie de rezolutia pagini
function resposiveMenu(e){
  const windows=document.documentElement.getBoundingClientRect();
     if(windows.width>685){
         location.reload()
     } 
 
 if(click===true){
     e.preventDefault()
      counter=0;
     click=false
   
     const windowScroll=document.documentElement.getBoundingClientRect()
     if(windowScroll.width<685){
       navigationMenu.classList.remove('navigation_menu_phone')
       
     
    
     // e.target.style.transform='rotate(179.5deg) scale(1.2)'
  
      
             navigationMenu.classList.add('navigation_menu_phone');
             
              navItem.forEach(item=>{
                 if(item.style.display==='none'||item.style.display==='')
                 item.style.display="flex"
             })
         }   
           
 } 
 
 else{
 click=true
  
 e.target.style.transform='none'
 
 
   e.preventDefault()
   
   const windowScroll=document.documentElement.getBoundingClientRect()
     if(windowScroll.width<685){
   navigationMenu.classList.remove('navigation_menu_phone');
             
   navItem.forEach(item=>{
      if(item.style.display==='flex'||item.style.display==='')
      item.style.display="none"
  })
  
     }
     
   
 }
 
 }

 function logoAnimation(e){
    
  if(newClick){
      newClick=false
  e.target.style.animation='rotate 2.2s infinite'
  // rosalImg.style.transform='rotate(179.5deg)' 

}
  else{
      newClick=true;
      e.target.style.animation='none'
      // e.target.style.transform='rotate(179.5deg) scale(1.2)'
      // rosalImg.style.transform='none' 
  }

}


const responsiveSectionOne=function(){
  //Aranjare Fotografilor si a descrieri in functie de rezolutia pagini
    const windows=document.documentElement.getBoundingClientRect();

 if(windows.width<=837){
     document.querySelector('.about_about_phone').innerHTML=`
     <div class="about_us picture__two">
     <img
       src="img/Puncte Ingropate.jpg"
      
       alt="Colecteaza"
       class="about__img img_two low_img"
     />
 </div>
  `


     document.querySelector('.about_us_phone').innerHTML=`
     <div class="about__about about_about_phone">
     <h5 class="about__header">Pubelele Moderne</h5>
     <p class="about__paragraf ">
       Accusantium a fugiat porro reiciendis saepe quibusdam
       debitis ducimus.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
       sint quos?
     </p>
   </div><br>`
 
   
   document.querySelector('.about_us_last').innerHTML=`
   <div class="about__about about_about_last">
   <h5 class="about__header">Servici</h5>
   <p class="about__paragraf">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
     sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
     debitis ducimus.
   </p>
   </div><br> `
   document.querySelector('.about_last').innerHTML=`
   
   <img
     src="img/rosalservici.jpg"
     alt="Colecteaza"
     class="about__img img3 low_img"
   />
`
 
}



 
 
 else{
   
     document.querySelector('.about_us_phone').innerHTML=`
     <div class="about_us picture__two">
     <img
       src="img/Puncte Ingropate.jpg"
      
       alt="Colecteaza"
       class="about__img img_two low_img"
     />
 </div>
     `
     
    
     document.querySelector('.about_about_phone').innerHTML=`
     <div class="about__about about_about_phone">
     <h5 class="about__header">Pubelele Moderne</h5>
     <p class="about__paragraf ">
       Accusantium a fugiat porro reiciendis saepe quibusdam
       debitis ducimus.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
       sint quos?
     </p>
   </div><br>`
   document.querySelector('.about_us_last').innerHTML=`
   <img
   src="img/rosalservici.jpg"
   alt="Colecteaza"
   class="about__img img3 low_img"
 />
   `
   document.querySelector('.about_last').innerHTML=`
   <div class="about__about about_last">
   <h5 class="about__header">Servici</h5>
   <p class="about__paragraf">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
     sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
     debitis ducimus.
   </p>
 </div>`

 } 

}

const btnScroolToFun=function(){
  const sectionBound=sectionOne.getBoundingClientRect();

      window.scrollTo({left:sectionBound.x+window.pageXOffset,top:sectionBound.y+window.pageYOffset,behavior:"smooth"})

}


const operetionManipulation=function(e){
  // Operatiuni Functionalitate
  const click=e.target.closest('.tab_operation')
  console.log(click)
  if(!click)return
  tabs.forEach(t=>t.classList.remove('tab_operation_active'))
  //am eliminat clasa activa a taburilor atunci cand are log eventul de CLik
  click.classList.add('tab_operation_active')
  //dupa care am adaugat clasa activa tabului caruia ii dam click
  contentOperation.forEach(element=>element.classList.remove('content_operation--active'))
  //ficarui element din NodeListul care contine continutul am eliminat clasa activa doar clasa activa are 
  //display flex celelate au display none 

 const dataSet= document.querySelector(`.content--${click.dataset.tab}_operation `);
 //click.dataset.tab ia valorile 1 2 3  adica tabul pe care facem click 1,2,3
 //in html ficare content este numerotat cu 1,2,3 
 //am facut legatura intre tabul pe care dam click si continutul acestuia 
 dataSet.classList.add('content_operation--active')

}



//slider

const firstTestimonialHtml=`
<div class="testimonial">
  <blockquote class="testimonial__text">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Accusantium quas quisquam non? Quas voluptate nulla minima
    deleniti optio ullam nesciunt, numquam corporis et asperiores
    laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
    id alias reiciendis, perferendis facere pariatur dolore veniam
    autem esse non voluptatem saepe provident nihil molestiae.
  </blockquote>
  <address class="testimonial__author">
    <img src="img/user-1.jpg" alt="" class="testimonial__photo" />
    <h6 class="testimonial__name">Silviu Andrei</h6>
    <p class="testimonial__location">Romania, Cluj-Napoca</p>
  </address>
</div>
</div>`
const secondTestimonialHtml=` <div class="testimonial">
<blockquote class="testimonial__text">
  Quisquam itaque deserunt ullam, quia ea repellendus provident,
  ducimus neque ipsam modi voluptatibus doloremque, corrupti
  laborum. Incidunt numquam perferendis veritatis neque repellendus.
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  deserunt exercitationem deleniti.
</blockquote>
<address class="testimonial__author">
  <img src="img/user-2.jpg" alt="" class="testimonial__photo" />
  <h6 class="testimonial__name">Andreea Mihut</h6>
  <p class="testimonial__location">Romania, Bucuresti</p>
</address>
</div>`
const thirdTestimonalHtml=`
<div class="testimonial">
            
            <blockquote class="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-3.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Andrei Ferent</h6>
              <p class="testimonial__location">Romania, Brasov</p>
            </address>
          </div>
`
const slider=[firstTestimonialHtml,secondTestimonialHtml,thirdTestimonalHtml]


//contor 
function sliderHtmlLink(){
  slide.innerHTML=slider[sliderIncrease] //by defoult incarcam primul testimonial 
}
sliderHtmlLink()

function nextSlider(){
  if(sliderIncrease<slider.length-1){
    sliderIncrease++
    //incrementarea numarului de testimoniale folosind controul
    sliderHtmlLink()
   //Cntintul html al sliderului primeste valoarea Arrayului Slider la pozitia curenta a contorului 


  
  }
   else {
    sliderIncrease=0;
    //daca ajugem la ultimul testimonial  valoarea contorului porneste de la 0
    sliderHtmlLink()
   }
  
}

function prevSlider(){
  if(sliderIncrease>0){
    //daca numarul sliderului este mai mare ca 0
  sliderIncrease--
  //decrementam testimonialele cu o unitate
  sliderHtmlLink()
  }
 else{
  //daca numarul slidului este mai mic ca 0
  sliderIncrease=slider.length-1;
  //valoare sliderului se schimba cu slider.length adica ultima poza 
  //length -1 pentru ca pozitia in array incepe de la 0 iar length este 3 ,ar trebuie sa functioneze
  //indiferent de numarul de elemente adaugate in arrayul Slider

  sliderHtmlLink()
 }

}





function sticky(){
  //Sticy Navigation
  function stickyNavFun(entries){

    const[entry]=entries
    if(entry.isIntersecting){
     navigationMenu.classList.remove('nav__sticky')
    }
  else{
    navigationMenu.classList.add('nav__sticky')
  }
  
  }
  
  const headerObserver=new IntersectionObserver(stickyNavFun,{root:null,threshold:0.2,rootMargin:'-90px'})
  
  headerObserver.observe(header)
  
}

function intersectionEfect(){
  //Nice Efect
  const sectionObserver=new IntersectionObserver(function(entries,observer){
    const[entry]=entries;
    if(!entry.isIntersecting)return
   
    setTimeout(()=>{entry.target.classList.remove('section__hidden')},200)
    observer.unobserve(entry.target)
   
   },{root:null,threshold:0.15})
   
   
   
   sectionAll.forEach(section=>{
     section.classList.add('section__hidden')
     sectionObserver.observe(section)
   })
   
}
 
function imgLoad(){
  document.documentElement.classList.remove('img_lazy');
}

function navigationSmooth(e){
    //Navigation with Js
    e.preventDefault()
    // prevenim Defoult page
  if(!e.target.classList.contains("navigation_item"))return
  //daca e target continte clasa 'navigation_intem se va executa codul urmator
  const id=e.target.getAttribute('href')
  //variabila id ia valoarea de atribut a href care este section--1,section--2 etc
  //valori care sunt identice cu idiurile sectiunilor
  document.getElementById(id).scrollIntoView({behavior:"smooth"})
  //scrolam pana la sectiunea respectiva cand are loc eventul de click 
}



rosalIcon.addEventListener('click',resposiveMenu)
rosalIcon.addEventListener('mouseenter',logoAnimation)
document.addEventListener('mouseenter',responsiveSectionOne)
btnScroolTo.addEventListener('click',btnScroolToFun)
tabsContainer.addEventListener('click',operetionManipulation)
btnSliderNext.addEventListener('click',nextSlider)
btnSliderPrev.addEventListener('click',prevSlider)
navigationMenu.addEventListener('click',navigationSmooth)
window.addEventListener('load',sticky)
window.addEventListener('load',intersectionEfect)
window.addEventListener('load',imgLoad)