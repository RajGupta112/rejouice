function locosrcoll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locosrcoll();
function cursoreffect(){
  var page1content=document.querySelector("#page1-content");
var cursor=document.querySelector("#cursor");

// page1content.addEventListener("mousemove",function(dets){
//   cursor.style.left=dets.x+"px";
//   cursor.style.top=dets.y+"px";
// })

page1content.addEventListener("mousemove",function(dets){
 gsap.to("#cursor",{
  x:dets.x,
  y:dets.y
 })
})

page1content.addEventListener("mouseenter",function(){
gsap.to(cursor,{
  scale:1,
  opacity:1
})
})
page1content.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})
}
cursoreffect();
function page5Animation(){
  var page5elem=document.querySelector("#page5");
  var page5cursor=document.querySelector("#cursor2")

  page5elem.addEventListener("mousemove",function(dets){
    gsap.to(page5cursor, {
     left: dets.clientX - page5cursor.offsetWidth / 2,  // Offset the cursor's position to center it
      top: dets.clientY - page5cursor.offsetHeight / 2, 
     
    });
    
  })

  page5elem.addEventListener("mouseenter",function(){
    gsap.to(page5cursor,{
      scale:1,
      opacity:1
    })
  })

  page5elem.addEventListener("mouseleave",function(){
    gsap.to(page5cursor,{
      scale:0,
      opacity:0
    })
  })
}
page5Animation();
function page2Animation() {
  // Start of GSAP animation
  gsap.from("#elem1", {
    y: 120, // Move from 120px below the original position
    stagger: 0.2, // Stagger the animations by 0.2s (for multiple elements)
    duration: 2, // Duration of each animation in seconds
    scrollTrigger: {
      trigger: "#page2", // Element that triggers the animation when scrolled into view
      scroller: "#main", // Scrolling container (in this case, the body of the document)
      start: "top 40%", // Animation starts when the top of #page2 reaches 47% of the viewport height
      end: "top 37%", // Animation ends when the top of #page2 reaches 46% of the viewport height
     
      scrub: 2 // Link the animation progress to the scroll position with a 2-second delay
    }
  });

  // Optional: Animate elements inside #elem2
  gsap.from("#elem2 span", {
    y: 120, // Start from 120px below the final position
    opacity: 0, // Start with opacity 0 (invisible)
    stagger: 0.3, // Delay the animation of each <span> by 0.3s
    duration: 2, // Duration of each animation in seconds
    scrollTrigger: {
      trigger: "#page2", // Same scroll trigger for the entire #page2
      scroller: "#main", // The scroll container is the body of the document
      start: "top 40%", // Animation starts when the top of #page2 reaches 47% of the viewport height
      end: "top 37%", // Animation ends when the top of #page2 reaches 46% of the viewport height
      
      scrub: 2 // Link the animation progress to the scroll position with a 2-second delay
    }
  });
}
page2Animation();
function page4Animaton(){
  gsap.from("#page4elem1", {
    y: 120, // Move from 120px below the original position
    stagger: 0.2, // Stagger the animations by 0.2s (for multiple elements)
    duration: 2, // Duration of each animation in seconds
    scrollTrigger: {
      trigger: "#page4", // Element that triggers the animation when scrolled into view
      scroller: "#main", // Scrolling container (in this case, the body of the document)
      start: "top 40%", // Animation starts when the top of #page2 reaches 47% of the viewport height
      end: "top 37%", // Animation ends when the top of #page2 reaches 46% of the viewport height
     
      scrub: 2 // Link the animation progress to the scroll position with a 2-second delay
    }
  });

  // Optional: Animate elements inside #elem2
  gsap.from("#page4elem2", {
    y: 120, // Start from 120px below the final position
    opacity: 0, // Start with opacity 0 (invisible)
    stagger: 0.3, // Delay the animation of each <span> by 0.3s
    duration: 2, // Duration of each animation in seconds
    scrollTrigger: {
      trigger: "#page4", // Same scroll trigger for the entire #page2
      scroller: "#main", // The scroll container is the body of the document
      start: "top 40%", // Animation starts when the top of #page2 reaches 47% of the viewport height
      end: "top 37%", // Animation ends when the top of #page2 reaches 46% of the viewport height
      
      scrub: 2 // Link the animation progress to the scroll position with a 2-second delay
    }
  });
}
page4Animaton();
function page6Animation(){
  gsap.from("#page6elem1",{
    y:120,
    stagger:0.3,
    duration:2,
    scrollTrigger:{
    trigger:"#page6",
   scroller:"#main",
   start:"top 40%",
   end:"top 37%",
   scrub:2
    }
  })
  gsap.from("#page6elem2 span",{
    y:120,
    stagger:0.3,
    opacity:0,
    duration:2,
    scrollTrigger:{
trigger:"#page6",
scroller:"#main",
start:"top 40%",
end:"top 37%",
scrub:2
    }
  })



}
page6Animation();

function SwiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    
    
    loop: true,
    speed:40000,

    autoplay: {
      delay: 0,
      
    }
    
  });
}
SwiperAnimation();
function loaderAniation(){
  var t1=gsap.timeline()
t1.from("#loader h3",{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.1
})

t1.to("#loader h3",{
  opacity:0,
  x:-20,
  duration:1,
  stagger:0.1
})
t1.to("#loader ",{
  opacity:0
})
t1.to("#loader ",{
  display:"none"
})
}
loaderAniation();
window.addEventListener('DOMContentLoaded', page5Animation);

