void window.addEventListener("load",(function(){var t,e,o,r,s,n,i,g,a,c,p,l;!(function workSavour(){$(window).innerWidth();var t=$(window).innerHeight();gsap.defaults({ease:"none",duration:2}),s1h=$(".section1 .big-logo").innerHeight()+$(".section1 .under-logo").innerHeight(),pad=(t-s1h)/2,$(".section1").css("paddingTop"," "+pad+"px"),$(".section1").css("paddingBottom"," "+pad+"px"),gsap.from(".section1 .big-logo",{y:-10,scale:1.1,opacity:0,ease:Power3.easeOut,duration:2,delay:1.5}),gsap.from(".section1 .under-logo p",{x:50,opacity:0,ease:Power3.easeOut,duration:2,stagger:.1,delay:2}),gsap.to(".section1",{scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:1,markers:0},y:300}),gsap.to(".section2 .image1",{scrollTrigger:{trigger:".section1",start:"top top",endTrigger:".section2",end:"bottom top",scrub:1,markers:0},y:200}),gsap.to(".section2 .image3",{scrollTrigger:{trigger:".section1",start:"top top",endTrigger:".section2",end:"bottom top",scrub:1,markers:0},y:-100}),gsap.to(".section2 .image4",{scrollTrigger:{trigger:".section1",start:"top top",endTrigger:".section2",end:"bottom top",scrub:1,markers:0},y:50}),gsap.to(".section2 .image5",{scrollTrigger:{trigger:".section1",start:"top top",endTrigger:".section2",end:"bottom top",scrub:1,markers:0},y:-100}),gsap.from(".section2 .text p",{scrollTrigger:{trigger:".section2 .text",start:"top 80%",toggleActions:"play none none none",markers:0},y:100,opacity:0,ease:Power4.easeOut,duration:3}),gsap.to(".section2 .text",{scrollTrigger:{trigger:".section1",start:"top top",endTrigger:".section2",end:"bottom top",scrub:1,markers:0},y:50}),gsap.from(".section3",{scrollTrigger:{trigger:".section3",start:"-400px top",toggleActions:"play none none reverse",markers:0},scale:.9,ease:Power2.easeInOut,duration:1}),gsap.to(".section3 video",{scrollTrigger:{trigger:".section3",start:"top center",end:"bottom top",scrub:1,markers:0},y:300}),gsap.to(".section4 img",{scrollTrigger:{trigger:".section4",start:"top bottom",endTrigger:".section5",end:"top top",scrub:1,markers:0},y:500}),gsap.to(".section5 .phone-clipping",{scrollTrigger:{trigger:".section5",start:"top bottom",end:"bottom top",scrub:.5,markers:0},y:120}),gsap.to(".section6 video",{scrollTrigger:{trigger:".section6",start:"top center",end:"bottom top",scrub:1,markers:0},y:300}),gsap.from(".section7 p",{scrollTrigger:{trigger:".section7",start:"top 80%",toggleActions:"play none none none",markers:0},x:50,opacity:0,ease:Power2.easeOut,duration:3}),gsap.to(".section7 p",{scrollTrigger:{trigger:".section7",start:"top bottom",end:"500px top",scrub:1,markers:0},y:-150}),gsap.to(".section8 .img-container",{scrollTrigger:{trigger:".section8",start:"top bottom",end:"bottom top",scrub:.5,markers:0},yPercent:15}),gsap.to(".section8 .desktop-frame",{scrollTrigger:{trigger:".section8",start:"top bottom",end:"bottom top",scrub:.5,markers:0},y:200}),gsap.from(".section9 .container",{scrollTrigger:{trigger:".section9",start:"200px bottom",toggleActions:"play none none none",markers:0},x:50,ease:Power2.easeOut,duration:2}),gsap.to(".section9 .container",{scrollTrigger:{trigger:".section9",start:"top bottom",end:"bottom top",scrub:.5,markers:0},y:-400})})(),t=document.getElementById("image1"),e=new Parallax(t,{relativeInput:1}),o=document.getElementById("image2"),r=new Parallax(o,{relativeInput:1}),s=document.getElementById("image3"),n=new Parallax(s,{relativeInput:1}),i=document.getElementById("image4"),g=new Parallax(i,{relativeInput:1}),a=document.getElementById("image5"),c=new Parallax(a,{relativeInput:1}),p=document.getElementById("s5img"),l=new Parallax(p,{relativeInput:1}),e.friction(.2,.2),r.friction(.2,.2),n.friction(.2,.2),g.friction(.2,.2),c.friction(.2,.2),l.friction(.2,.2)}));
//# sourceMappingURL=js-savour-dist.js.map