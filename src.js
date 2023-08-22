var slides = document.querySelectorAll('.slide') 
var btns = document.querySelectorAll('.btn')
var currentSlide = 0 

function manualSlide(manual) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    btns.forEach(btn => {
        btn.classList.remove('active')
    })
    
    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
}

 btns.forEach( (btn,i) => {
    btn.addEventListener('click',() => {
        manualSlide(i)
        currentSlide = i
    })
 })

 function autoSlider () {
   setInterval( () => {
     currentSlide++ 
     if (currentSlide > slides.length - 1) {
        currentSlide = 0 ;
     }  
     manualSlide(currentSlide)
   },4500)
 }

 autoSlider()