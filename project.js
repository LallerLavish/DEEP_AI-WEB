function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
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
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotive();
function navAni() {
    const h4 = document.querySelectorAll("#nav #nav-mid h4");
    const mid = document.querySelector("#nav #nav-mid");
    let isHovered = false;

    const showNav = () => {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.3
        });
        tl.set(".nav", { display: "block" });
        tl.fromTo(".nav span", { y: 25 }, {
            y: 0,
            duration: 0.3,
            stagger: { amount: 0.3 }
        });
    };

    const hideNav = () => {
        let tl = gsap.timeline();
        tl.to(".nav span", {
            y: 25,
            duration: 0.3,
            stagger: { amount: 0.2 }
        });
        tl.set(".nav", { display: "none" });
        tl.to("#nav-bottom", {
            height: "0",
            duration: 0.2
        });
    };

    mid.addEventListener("mouseenter", () => {
        if (!isHovered) {
            isHovered = true;
            showNav();
        }
    });

    mid.addEventListener("mouseleave", () => {
        if (isHovered) {
            hideNav();
            isHovered = false;
        }
    });
}
navAni();
function page2Animation(){
    let el=document.querySelectorAll(".right-elem");
let elImg=document.querySelectorAll(".right-elem img");

el.forEach((i)=>{
    
    i.addEventListener("mouseenter",()=>{
        
       gsap.to(i.childNodes[3],{
        opacity:1,
        scale:1
       })
        i.style.borderTop="2px solid white";
       
       
    })
    i.addEventListener("mouseleave",()=>{
        gsap.to(i.childNodes[3],{
            opacity:0,
            scale:0
           })
           if(i==el[0]){
            i.style.borderTop="none";
           }
           else{
            i.style.borderTop="1px solid #333";
           }
           
    })
    i.addEventListener("mousemove",(dets)=>{
        // console.log(dets);
        // i.getBoundingClientRect()
        gsap.to(i.childNodes[3],{
            x:dets.x-i.getBoundingClientRect().x,
            y:dets.y-i.getBoundingClientRect().y-100
        })
    })
})

}
page2Animation();
function video_ani(){
    let show=document.querySelector(".page-mid h5");
let video=document.querySelector("#page3 video");
show.addEventListener('click',()=>{
    video.play()
    gsap.to(video,{
        opacity:1,
        transform:"scaleX(1) scaleY(1)",
        borderRadius:0
    })
})
video.addEventListener('click',()=>{
    video.pause()
    gsap.to(video,{
        opacity:0,
        transform:"scaleX(0.7) scaleY(0)",
        borderRadius:"30px"
    })
})
}
video_ani();
function partition_ani_right(){
    let img=document.querySelector(".p-right1 img");
img.addEventListener("mouseenter",()=>{
    img.style.opacity=0;
})
img.addEventListener("mouseleave",()=>{
    img.style.opacity=1;
})
let vid=document.querySelector(".p-right2 #video");
let prig1=document.querySelector(".p-right1");
    prig1.addEventListener("mouseenter",()=>{
        gsap.to(".circle1",{
            opacity:1,
            scale:1
        })
    })
    prig1.addEventListener("mouseleave",()=>{
        gsap.to(".circle1",{
            opacity:0,
            scale:0
        })
    })
    prig1.addEventListener("mousemove",(dets)=>{
        gsap.to(".circle1",{
           x:dets.x-prig1.getBoundingClientRect().x-50,
           y:dets.y-prig1.getBoundingClientRect().y-50
        })
    })
    prig1.addEventListener("mousestop",(dets)=>{
        gsap.to(".circle1",{
           x:dets.x-prig1.getBoundingClientRect().x,
           y:dets.y-prig1.getBoundingClientRect().y-100
        })
    })

    // p-right 2
    let prig2=document.querySelector(".p-right2");
    prig2.addEventListener("mouseenter",()=>{
        gsap.to(".circle2",{
            opacity:1,
            scale:1
        })
        vid.style.opacity=1;
        vid.play()
        
    })
    prig2.addEventListener("mouseleave",()=>{
        gsap.to(".circle2",{
            opacity:0,
            scale:0
        })
        vid.style.opacity=0;
        vid.load();
    })
    prig2.addEventListener("mousemove",(dets)=>{
        gsap.to(".circle2",{
           x:dets.x-prig2.getBoundingClientRect().x-50,
           y:dets.y-prig2.getBoundingClientRect().y-50
        })
    })
    prig2.addEventListener("mousestop",(dets)=>{
        gsap.to(".circle2",{
           x:dets.x-prig2.getBoundingClientRect().x,
           y:dets.y-prig2.getBoundingClientRect().y-100
        })
    })
}
partition_ani_right();

function partition_ani_left(){

} 
function page7A(){
    gsap.from("#end7 #part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
          trigger:".end7-parts",
          scroller:"#main",
          marker:true,
          start:"top 80%",
          end:"top -50",
          scrub:true
        }
  })
  gsap.from("#end7 #part3 h4",{
      x:0,
      duration:1,
      scrollTrigger:{
        trigger:".end7-parts",
        scroller:"#main",
        marker:true,
        start:"top 80%",
        end:"top -50",
        scrub:true
      }
  })
  gsap.from("#end7 #part4 h4",{
      x:0,
      duration:1,
      scrollTrigger:{
        trigger:".end7-parts",
        scroller:"#main",
        marker:true,
        start:"top 80%",
        end:"top -50",
        scrub:true
      }
  })
  gsap.to(".end7-parts ",{
      borderRight:"2px solid #dadada",
      duration:1,
      scrollTrigger:{
        trigger:".end7-parts",
        scroller:"#main",
        marker:true,
        start:"top 80%",
        end:"top -50",
        scrub:true
      }
  })
}
page7A();
function loading(){
    let tl=gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.3,
        delay:0.2
    })
    tl.from("#page1",{
        transform:"scaleX(0.8) scaleY(0.2) translateY(90%)",
        borderRadius:"40px",
        duration:2,
        ease:"elastic.out"

    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#page1 h1,#page1 p,#page1 div",{
        opacity:0,
        duration:0.3,
        stagger:0.2
    })
}
loading();