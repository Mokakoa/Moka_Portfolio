function work(){var t=$(window).innerWidth(),e=($(window).innerHeight(),5*t/100);gsap.defaults({ease:"none",duration:2}),gsap.to(".section1 .play-text .head.p",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.5,markers:!1},x:()=>"+="+t}),gsap.to(".section1 .play-text .head.l",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.8,markers:!1},x:()=>"+="+t}),gsap.to(".section1 .play-text .head.a",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:2.1,markers:!1},x:()=>"+="+t}),gsap.to(".section1 .play-text .head.y",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.9,markers:!1},x:()=>"+="+t}),gsap.to(".section1 .ground .head.g",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:2.25,markers:!1},x:()=>"+="+-t}),gsap.to(".section1 .ground .head.r",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:2.1,markers:!1},x:()=>"+="+-t}),gsap.to(".section1 .ground .head.o",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.9,markers:!1},x:()=>"+="+-t}),gsap.to(".section1 .ground .head.u",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.75,markers:!1},x:()=>"+="+-t}),gsap.to(".section1 .ground .head.n",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:1.9,markers:!1},x:()=>"+="+-t}),gsap.to(".section1 .ground .head.d",{scrollTrigger:{trigger:".section1",start:"top top",end:"115% bottom",scrub:2.1,markers:!1},x:()=>"+="+-t});var r={trigger:".section2",start:"top 75%",end:()=>"+=50",scrub:1,markers:!1};gsap.fromTo("body",{background:"#151515"},{scrollTrigger:r,background:"#FFF4E6"}),gsap.to(".section1 .text",{scrollTrigger:r,color:"#151515"}),gsap.from(".section2 .sticky-container",{scrollTrigger:{trigger:" .section2",start:"top bottom",end:"200px center",scrub:!0,markers:!1},y:-200,ease:"power1.out"});const o=document.querySelectorAll(".section2 .sticky-container .marquee-container"),n="top 45%",s="bottom 70%";gsap.fromTo(o,{y:0},{scrollTrigger:{trigger:".section2 .thumb-container .content1 span",start:n,end:s,scrub:.8,markers:false},y:()=>-180}),gsap.fromTo(o,{y:()=>-180},{scrollTrigger:{trigger:".section2 .thumb-container .content2 span",start:n,end:s,scrub:.8,markers:false},y:()=>-360}),gsap.set(o,{y:0});var a="power4.out",c=$(".section2 .sticky-container .content-container .text1"),i=c.children("p"),g=$(".section2 .sticky-container .content-container .text2").children("p"),u=$(".section2 .sticky-container .content-container .text3").children("p"),m=(c.width(),"bottom 55%");gsap.fromTo(i,{yPercent:0},{scrollTrigger:{trigger:".section2 .thumb-container .content1 span",start:m,end:()=>"+=20",scrub:!0,markers:!1},yPercent:()=>100,duration:.1}),gsap.fromTo(g,{yPercent:()=>-100},{scrollTrigger:{trigger:".section2 .thumb-container .content1 span",start:m,scrub:!0,markers:!1},yPercent:0,duration:.5,ease:a}),gsap.fromTo(g,{yPercent:()=>0},{scrollTrigger:{trigger:".section2 .thumb-container .content2 span",start:m,scrub:!0,markers:!1},yPercent:()=>100,duration:.5,ease:a}),gsap.set(g,{yPercent:()=>-100}),gsap.fromTo(u,{yPercent:()=>-100},{scrollTrigger:{trigger:".section2 .thumb-container .content2 span",start:m,scrub:!0,markers:!1},yPercent:0,duration:.5,ease:a})}function marquee(){gsap.defaults({ease:"none",duration:2});var t=120,e=($(window).innerWidth(),$(window).innerHeight(),$(".section2 .marquee1 .marquee-content").width()+t),r=$(".section2 .marquee2 .marquee-content").width()+t,o=$(".section2 .marquee3 .marquee-content").width()+t,n=$(".section2 .marquee4 .marquee-content").width()+t,s=$(".section2 .stkmarquee1 .marquee-content").width()+t,a=$(".section2 .stkmarquee2 .marquee-content").width()+t,c=$(".section2 .stkmarquee3 .marquee-content").width()+t,i=$(".section2 .stkmarquee4 .marquee-content").width()+t,g=10,u=e*g/s,m=r*g/s,p=o*g/s,d=n*g/s,l=a*g/s,b=c*g/s,k=i*g/s;$(".section2 .sticky-container .sticky-text .stroke-text .marquee-container").css("right"," "+1.5*s+"px"),gsap.to(".section2 .marquee1 .marquee-content",{x:()=>"+="+-e,repeat:-1,duration:u}),gsap.to(".section2 .marquee2 .marquee-content",{x:()=>"+="+-r,repeat:-1,duration:m}),gsap.to(".section2 .marquee3 .marquee-content",{x:()=>"+="+-o,repeat:-1,duration:p}),gsap.to(".section2 .marquee4 .marquee-content",{x:()=>"+="+-n,repeat:-1,duration:d}),gsap.to(".section2 .stkmarquee1 .marquee-content",{x:()=>"+="+s,repeat:-1,duration:g}),gsap.to(".section2 .stkmarquee2 .marquee-content",{x:()=>"+="+a,repeat:-1,duration:l}),gsap.to(".section2 .stkmarquee3 .marquee-content",{x:()=>"+="+c,repeat:-1,duration:b}),gsap.to(".section2 .stkmarquee4 .marquee-content",{x:()=>"+="+i,repeat:-1,duration:k})}window.addEventListener("load",(function(){work(),marquee(),window.addEventListener("resize",(function(){work(),marquee()}))}));