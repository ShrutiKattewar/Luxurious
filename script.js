
function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveScroll()


function page2Animation(){
gsap.from(".element h1",{
    y:120,
    opacity:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 40%",
        end:"top 37%",
        scrub:2
    }
})
}
page2Animation()

function page2CursorAnimation(){

    var page2Content =  document.querySelector(".page2 .element video")
    var cursor2 = document.querySelector(".cursor2")
    console.log(cursor2);
    
    page2Content.addEventListener("mousemove",function(details){
        // cursor.style.left = details.x+"px"
        // cursor.style.top = details.y+"px"
    
        gsap.to(cursor2,{
            left : details.x,
            top : details.y
        })
    })
    page2Content.addEventListener("mouseenter", function(){
        gsap.to(cursor2,{
            scale:1,
            opacity:1
        })
    })
    page2Content.addEventListener("mouseleave", function(){
        gsap.to(cursor2,{
            scale:0,
            opacity:0
        })
    })
}
page2CursorAnimation()


function page3Animation(){
    gsap.from(".page3 .page3-top h2",{
        y:50,
        stagger:0.1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })
}
page3Animation()

function page4Animation(){
    gsap.from(".page4 .page4-top h2",{
        y:50,
        stagger:0.1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })

    document.querySelector(".page4").addEventListener("mouseenter", function(){
        gsap.from("#storage_number", {
            innerText: 0,
            stagger:0.1,
            duration: 2,
            opacity:0,
            delay:.2,
            snap : {
               innerText: 10
            },
          })

          gsap.from(".circle",{
            rotation:360,
            stagger:0.1,
            delay:.2,
            duration:2,
          })
    })

}
page4Animation()

function page5Animation(){
    gsap.from(".page5 .page5-top h1",{
        y:50,
        stagger:0.1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page5",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })
}
page5Animation()

function footerAnimation(){
    gsap.from(".footer h1 span",{
        y:-100,
        stagger:0.1,
        duration:0.5,
        scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
            scrub:3
        }
    })
}
footerAnimation()
    


//////////////////////// Swiper JS //////////////////////////////

function sliderAnimationPage4(){
    var swiper = new Swiper(".mySwiperPage4", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
      });
}

sliderAnimationPage4()


function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });    
}
sliderAnimation()


///////////////////////// Swiper JS End ////////////////////////////

function loaderAnimation(){

  
var t1 = gsap.timeline()

t1.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

t1.to(".loader h3",{
    opacity:0,
    x:-30,
    duration:1,
    stagger:0.1
})

t1.to(".loader",{
    opacity:0,
    display:"none"
})

t1.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration: 0.5,
    delay:-0.3
})
}
loaderAnimation()
