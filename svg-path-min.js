$(window).ready((function(){var t=$(window).scrollTop(),i=$(window).innerWidth();ratiosvg=t>i?.5*t/1800:.5*i/1e3}));var friction=.3,restitution=.2,forceconts=-.08;function DomieSocks(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,angle:0,chamfer:{radius:radius},render:{sprite:{texture:"img/dms.png",xScale:ratiosvg,yScale:ratiosvg}},url:"https://koapd2710.github.io/Domie-Website/"};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:forceconts})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function Diary(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,angle:0,chamfer:{radius:radius},render:{sprite:{texture:"img/dia.png",xScale:ratiosvg,yScale:ratiosvg}}};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:.5*forceconts})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function ProE(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,angle:0,chamfer:{radius:radius},render:{sprite:{texture:"img/proe.png",xScale:ratiosvg,yScale:ratiosvg}}};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:forceconts})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function OliBanner(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,angle:0,chamfer:{radius:radius},render:{sprite:{texture:"img/olip.png",xScale:ratiosvg,yScale:ratiosvg}}};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:forceconts})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function Savour(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,chamfer:{radius:radius},render:{sprite:{texture:"img/sav.png",xScale:ratiosvg,yScale:ratiosvg}}};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:forceconts/2})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function CocaCola(t,i,o,r){this.w=o,this.h=r,radius=r/2;var s={friction:friction,restitution:restitution,angle:0,chamfer:{radius:radius},render:{sprite:{texture:"img/coca.png",xScale:ratiosvg,yScale:ratiosvg}}};this.body=Bodies.rectangle(t,i,o,r,s),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.applyForce=function(){var t=this.body.position;Body.applyForce(this.body,{x:t.x,y:t.y},{x:0,y:forceconts})},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),rect(0,0,this.w,this.h),pop()}}function Flowers1(t,i,o){this.r=o;var r={friction:.1,restitution:.2,render:{sprite:{texture:"img/flower.png",xScale:2*ratiosvg,yScale:2*ratiosvg}}};this.body=Bodies.circle(t,i,o,r,2*o),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),ellipse(0,0,2*o),pop()}}function Flowers2(t,i,o){this.r=o;var r={friction:.1,restitution:.2,render:{sprite:{texture:"img/flower.png",xScale:2*ratiosvg,yScale:2*ratiosvg}}};this.body=Bodies.circle(t,i,o,r,2*o),World.add(world,this.body),this.isOffScreen=function(){return this.body.position.y>wdheight+100},this.show=function(){var t=this.body.position,i=this.body.angle;push(),translate(t.x,t.y),rotate(i),rectMode(CENTER),noStroke(),ellipse(0,0,2*o),pop()}}