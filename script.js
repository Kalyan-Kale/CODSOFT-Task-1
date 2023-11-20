function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top 80%`,
        end:`top 30%`,
        scroller:`#main`,
        scrub:1,
        // markers:true,
    },
    stagger:.2,
    color:`#fff`
})

var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top 95%`,
      end:`top 30%`,
      scroller:`#main`,
      scrub:.5,
      // markers:true,
  },
  stagger:.2,
  color:`#fff`
})



var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`top 25%`,
      scroller:`#main`,
      scrub:.5,
      // markers:true,
  },
  stagger:.2,
  color:`#fff`
})

    // extra animation 

    gsap.from(".left",{
      delay:.6,
      width:0,
      // y:-100,
      duration:1,
    })

    gsap.from(".right",{
      delay: .8,
      width: 0,
      duration:1,
      // y:900,
    })

    gsap.from(".top",{
      delay: 1,
      width: 0,
      duration:1,
      // y:900,
    })


    // page 2 

    gsap.from("#page2 .service",{
      scrollTrigger:{
          trigger:`#page2 .service`,
          start:`top bottom`,
          end:`bottom bottom`,
          scroller:`#main`,
          scrub:1,
      },
      stagger:.2,
      opacity:0,
      y:200,
  })

  gsap.from("#page2 .photo-container",{
    scrollTrigger:{
        trigger:`#page2 .photo-container`,
        start:`top bottom`,
        end:`bottom bottom`,
        scroller:`#main`,
        scrub:1,
    },
    stagger:.2,
    opacity:0,
    y:250,
})

gsap.from(".box h4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".box h4",
    scroller: "#main",
    // markers:true,
    start: "top 70%"
  },
  stagger: 0.5
})

gsap.from(".elem-div1 img", {
  opacity: 0,
  // duration:1.5,
  scrollTrigger: {
    trigger: ".elem-div1 img",
    scroller: "#main",
    // markers:true,
    start: "top 65%"
  },
  y: 20,
  scrub:1,
  stagger: {
    amount: 1,
  }
})  

gsap.from(".elem-div2 img", {
  opacity: 0,
  // duration:1.5,
  scrollTrigger: {
    trigger: ".elem-div2 img",
    scroller: "#main",
    // markers:true,
    start: "top bottom"
  },
  y: 20,
  // scrub:true,
  stagger: {
    amount: 1,
  }
})  

gsap.from(".page1-bottom .scroll",{
  y:10,
  opacity:.5,
  duration:.8,
  repeat:-1,
  yoyo:true,
})

// overlay

gsap.to("#page1 .overlay1",{
  left:"-100%",
  delay:0.2,
  duration:1.2
})
gsap.to("#page1 .overlay2",{
  left:"-100%",
  delay:0.4,
  duration:1.2
})
gsap.to("#page1 .overlay3",{
  left:"-100%",
  delay:0.6,
  duration:1.2
})

// landing page

gsap.from("nav",{
  y:"-100%",
  opacity:0,
  delay:2
})

gsap.from(".page1-bottom .social-section a",{
  x:-30,
  opacity:0,
  stagger:.2,
  delay:2,
  duration:.1
})

gsap.from(".title-section h1",{
  x:"-100%",
  duration:.5,
  delay:1.5,
  opacity:0,
})

gsap.from(".title-section h5",{
  x:"-100%",
  duration:.5,
  delay:1.9,
  opacity:0
})

gsap.from(".title-section h4",{
  x:"-100%",
  duration:.5,
  delay:1.9,
  opacity:0
})

gsap.from(".img-bg",{
  delay:2.5,
  width:0,
  opacity:0,
  duration:.5
})

gsap.to(".img-bg .img-cover",{
  width: 0,
  duration:.3,
  delay:2.9,
})

gsap.from(".page1-bottom .quote",{
  duration:1,
  delay:2.3,
  y: 40,
  opacity:0,
})

//contact page

var contact = document.querySelector(".contact-page");
var hirebtn = document.querySelector("#hirebtn");
var cross = document.querySelector("#cross");
var resume = document.querySelector("#one");
var contactbtn = document.querySelector("#hirebtn");

hirebtn.addEventListener("click",function(){
  contact.style.top = 0;
})

cross.addEventListener("click",function(){
  contact.style.top = "-100%";
})

resume.addEventListener("mouseenter",function(){
  cursor.style.width = "8vw";
  cursor.style.height = "8vw";
})
resume.addEventListener("mouseleave",function(){
  cursor.style.width = "";
  cursor.style.height = "";
})
contactbtn.addEventListener("mouseenter",function(){
  cursor.style.width = "8vw";
  cursor.style.height = "8vw";
})
contactbtn.addEventListener("mouseleave",function(){
  cursor.style.width = "";
  cursor.style.height = "";
})
