// --- Selects --- //
const contentLeft =document.getElementById("content-r");
const banner =document.getElementById("content-banner");
const contentRight =document.getElementById("content-l");
const RCon = document.getElementById("RCon");
const LCon = document.getElementById("LCon");
const LC = document.getElementById("Lc");
const btnl = document.getElementById("btnl");
const btnr = document.getElementById("btnr");
const txtl = document.getElementById("txtl");
const txtr = document.getElementById("txtr");
const conLeft = document.getElementById("conLeft");
const conRight = document.getElementById("conRight");

//contentLeft = 33%
//   banner   = 34%
//contentRight= 33%

// --- Events ---//
RCon.addEventListener("click",()=>{
  contentLeft.style.animation="contentExpander 1s ease-out";
  contentRight.style.animation="contentContract 1s ease-out";
  LC.style.display="none";
  btnr.style.display="block";
  txtr.style.display="none";
  conRight.style.display="flex";
  setTimeout(()=>{
  contentRight.style.width="0%";
  contentLeft.style.width="66%";
  contentRight.style.display="none";
  },1001);
});
btnr.addEventListener("click",()=>{
  contentLeft.style.animation="contentContractExtender 1s ease-out";
  contentRight.style.animation="contentExpanderExtender 1s ease-out";
  RCon.style.display="flex";
  LC.style.display="flex";
  btnr.style.display="none";
  conRight.style.display="none";
  //setTimeout(()=>{
  contentRight.style.width="33%";
  contentLeft.style.width="33%";
  contentRight.style.display="flex";
  txtr.style.display="block";

 // },1000);
});

LCon.addEventListener("click",()=>{
  contentRight.style.animation="contentExpander 1s ease-out";
  contentLeft.style.animation="contentContract 1s ease-out";
  txtl.style.display="none";
  RCon.style.display="none";
  btnr.style.display="none";
  btnl.style.display="block";
  conLeft.style.display="flex";
  setTimeout(()=>{
  contentLeft.style.width="0%";
  contentRight.style.width="66%";
  contentLeft.style.display="none";
  
  },1001);
});
btnl.addEventListener("click",()=>{
  contentRight.style.animation="contentContractExtender 1s ease-out";
  contentLeft.style.animation="contentExpanderExtender 1s ease-out";
  RCon.style.display="flex";
  btnl.style.display="none";
  conLeft.style.display="none";
 // setTimeout(()=>{
  contentLeft.style.width="33%";
  contentRight.style.width="33%";
  contentLeft.style.display="flex";
  txtl.style.display="block";

 // },1000);
});
