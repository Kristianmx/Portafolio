// --- Selects --- //
const contentLeft =document.getElementById("content-r");
const banner =document.getElementById("content-banner");
const contentRight =document.getElementById("content-l");
//contentLeft = 33%
//   banner   = 34%
//contentRight= 33%

// --- Events ---//
contentLeft.addEventListener("click",()=>{
  contentLeft.style.animation="contentExpander 1s ease-out";
  contentRight.style.animation="contentContract 1s ease-out"
  setTimeout(()=>{
    contentRight.style.width="0%";
    contentLeft.style.width="66%";
  },1002)

});

contentRight.addEventListener("click",()=>{
  contentRight.style.animation="contentExpander 1s ease-out";
  contentLeft.style.animation="contentContract 1s ease-out"
  setTimeout(()=>{
    contentLeft.style.width="0%";
    contentRight.style.width="66%";
  },1002)

});