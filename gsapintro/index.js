

// // gsap.to(".box2",{
// //     x:500,rotate:340,
// //     width:"300px",opacity:0.3,
// //     duration:5,repeat:-1,
// //     yoyo:true
   
// // })

// // gsap.from(".box2",{
// //     x:-100,
// // })



// // let first=gsap.timeline()
// // first.to(".box3",{
// //     x:700,
// //     y:100,duration:4
// // })
// // first.to(".box2",{
// //     x:900,duration:1
// // })
// // first.to(".box1",{
// //     x:200,delay:1
// // })



// gsap.to(".page1 .box1", {
//     duration: 2,
//     x: 50,
//     y: 400,
//     scrollTrigger: {

//         trigger: ".page1",
//         scroller:"body",
//         markers: true,
//         start: "top 80%",
//         scrub:1
//     }
// });


// gsap.to(".page2 .box1", {
//     duration: 2,
//     x: 50,
//     y: 200,
//     scrollTrigger: {

//         trigger: ".page2",
//         scroller:"body",
//         markers: true,
//         start: "top 80%",
//         scrub:1
//     }
// });


// gsap.to(".page3 .box1", {
//     duration: 2,
//     x: 50,
//     y: 200,
//     scrollTrigger: {

//         trigger: ".page3",
//         scroller:"body",
//         markers: true,
//         start: "top 80%",
//         scrub:1
//     }
// });

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,markers:false,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000"
    }
  });

// gsap.set(".box-1, .box-2", {y: 100});
// // ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

// // red section
// gsap.to(".box-1", {
//   y: -130,
//   duration: 2,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".box-1",
//     containerAnimation: scrollTween,
//     start: "left center",
//     toggleActions: "play none none reset",
//     id: "1",
//     markers: {startColor: "red", endColor: "green"}
//   }
// });


// // gray section
// gsap.to(".box-2", {
//   y: -120,
//   backgroundColor: "#1e90ff",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".box-2",
//     containerAnimation: scrollTween,
//     start: "center 80%",
//     end: "center 20%",
//     scrub: true,
//     id: "2",
//     markers: {startColor: "white", endColor: "blue"}
//   }
// });

// // purple section
ScrollTrigger.create({
    
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3",
  markers: {startColor: "yellow", endColor: "gray"},
  

});

// // green section
// ScrollTrigger.create({
//   trigger: ".green",
//   containerAnimation: scrollTween,
//   start: "center 65%",
//   end: "center 51%",
//   onEnter: () => console.log("enter"),
//   onLeave: () => console.log("leave"),
//   onEnterBack: () => console.log("enterBack"),
//   onLeaveBack: () => console.log("leaveBack"),
//   onToggle: self => console.log("active", self.isActive),
//   id: "4",
//     markers: {startColor: "green", endColor: "orange"}
//   ,
// });

// only show the relevant section's markers at any given time
gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
["red","gray","purple","green"].forEach((triggerClass, i) => {
  ScrollTrigger.create({
    trigger: "." + triggerClass,
    containerAnimation: scrollTween,
    start: "left 30%",
    end:"right 50%" ,
    markers: {startColor: "blue", endColor: "red"}
    ,
    onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
  });
});

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// // making the code pretty/formatted.
// PR.prettyPrint();


// 💚 This just adds the GSAP link to this pen, don't copy this bit

// 💚 Happy tweening!

let bvox=document.querySelector(".box")
let  mm=gsap.matchMedia()
// mm.add({
//     isMobile:"(max-width:500px)",
//     isdesktop:"(min-width:501px)",
// },(context)=>{
//     console.log(context.isRevertedff,"cii")
// let {isMobile,isdesktop} =context.conditions

//     gsap.to(".box",{

//         rotation:isMobile?70:4,duration:2

//     })
// })

mm.add("(max-width:500px)",(context)=>{
// bvox.addEventListener("click",()=>{

//     gsap.to(bvox,{
//         rotation:360,repeat:-1,duration:5,yoyo:true
//     })
// })

// return()=>{
//     bvox.removeEventListener("clickff")
// }

//   ee mukalilathe case il  nammal  window siuze  kuttityalum aniumation wrk ayum appol 

context.add("spinkkk",()=>{
        gsap.to(bvox,{
                rotation:360,repeat:-1,duration:5,yoyo:true
            })
}
)
bvox.addEventListener("click",context.spinkkk)


return ()=>{
    bvox.removeEventListener("click",context.spinkkk)

}
})