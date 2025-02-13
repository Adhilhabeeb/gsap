

// gsap.to(".box2",{
//     x:500,rotate:340,
//     width:"300px",opacity:0.3,
//     duration:5,repeat:-1,
//     yoyo:true
   
// })

// gsap.from(".box2",{
//     x:-100,
// })



// let first=gsap.timeline()
// first.to(".box3",{
//     x:700,
//     y:100,duration:4
// })
// first.to(".box2",{
//     x:900,duration:1
// })
// first.to(".box1",{
//     x:200,delay:1
// })



gsap.to(".page1 .box1", {
    duration: 2,
    x: 50,
    y: 400,
    scrollTrigger: {

        trigger: ".page1",
        scroller:"body",
        markers: true,
        start: "top 80%",
        scrub:1
    }
});


gsap.to(".page2 .box1", {
    duration: 2,
    x: 50,
    y: 200,
    scrollTrigger: {

        trigger: ".page2",
        scroller:"body",
        markers: true,
        start: "top 80%",
        scrub:1
    }
});


gsap.to(".page3 .box1", {
    duration: 2,
    x: 50,
    y: 200,
    scrollTrigger: {

        trigger: ".page3",
        scroller:"body",
        markers: true,
        start: "top 80%",
        scrub:1
    }
});
