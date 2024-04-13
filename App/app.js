// Selects
const intro = document.getElementById("intro");
const framer =document.getElementById("Frame-primary");
const TB1 =document.getElementById("TB1");
const TB2 =document.getElementById("TB2");
const TB21= document.getElementById("TB21");
const h1N= document.getElementById("h1N");
const h2T= document.getElementById("h2T");
document.addEventListener("DOMContentLoaded",()=>{
 framer.style.display="none";

  setTimeout(()=>{
    intro.style.animation="intro 1s ease-out";
   framer.style.animation="introP 650ms ease-out";
   TB1.style.animation="h1T 650ms ease-out";
   TB2.style.animation="h2T 650ms ease-out";
   TB21.style.animation="h2T 650ms ease-out";
   h1N.style.animation="h1N 650ms ease-out";
 },960);
 setTimeout(()=>{
  intro.style.display="none";
},1968);

  setTimeout(()=>{
     intro.style.display="none";
    
     framer.style.display="block";
  },2969);
 setTimeout(()=>{
 framer.style.animation="zoom 1s ease-out";
 TB1.style.animation="h1TV 1s ease-out";
 TB2.style.animation="h2TV 1s ease-out";
 TB21.style.animation="h2TV 1s ease-out";
 },4500);
 setTimeout(()=>{
  framer.style.top="0%";
  framer.style.left="0%";
  framer.style.width="100%";
  framer.style.height="100%";
  TB1.style.fontSize="3vw";
  TB2.style.fontSize="2vw";
  TB21.style.fontSize="2vw";
  h2T.style.marginTop="2rem"
 },5500);
})