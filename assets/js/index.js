/* const txt= document.querySelector(".card-text");
const txtInitialHeight = txt.clientHeight;
const overflow = document.querySelector(".overflow");
const btn = document.querySelector(".toggle");

btn.addEventListener("click", initToggle);

function initToggle(e){
  txt.style.maxHeight = 
  e.target.dataset.state ==="mais"
  ? '${txt.scrollHeight}%'
  : '${txtInitialHeight}%';

  e.target.setAttribute(
    "data-state",
    e.target.dataset.state ==="mais" ? "menos" : "mais"
  );

  e.target.innerHTML = 
  e.target.dataset.state === "mais" ? "Leia mais" : "Leia menos";

  overflow.setAttribute(
    "data-state",
    e.target.dataset.state ==="mais" ? "visible" : "hidden"
  );
} */


/* 
document.querySelectorAll('.post-body').forEach(function (el) {
   
  var fullText = el.querySelector('.full-text');
  var shortText =  el.querySelector('.short-text');
  
  if (! shortText) return;
  
  el.querySelector('.read-more').addEventListener('click', function () {
     fullText.style.display = '';
     shortText.style.display = 'none';
  })
  
  el.querySelector('.read-less').addEventListener('click', function () {
     fullText.style.display = 'none';
     shortText.style.display = '';
  })
})


function readMoreRome() { //finds function
  var dots = document.getElementById("dots"); //returns element that has the ID attribute with value, searches for dots
  var moreText = document.getElementById("more"); // '' '' searches for more
  var btnText = document.getElementById("myBtn"); // '' '' searches for myBtn
  
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
  }
  
  function readMoreBuda() { //finds function
  var dots = document.getElementById("dots2"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more2"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn2"); // '' '' searches for myBtn2
  
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
  } [
*/


  /****    FUNCIONOU 1 *******/
/*   function mostra(id){
    if (document.getElementById(id).style.display =='none'){
     document.getElementById(id).style.display = 'block';
    }else {document.getElementById(id).style.display ='none';} 
   } */
    
      
function vermais1(){
  let pontos1 = document.getElementById("pontos1");
  let maisTexto1 = document.getElementById("mais1");
  let btnVermais1 = document.getElementById("btnVerMais1");

  if (pontos1.style.display ==="none"){
    pontos1.style.display="inline";
    maisTexto1.style.display="none";
    btnVermais1.innerHTML="Ver mais";
  }else{
    pontos1.style.display="none";
    maisTexto1.style.display="inline";
    btnVermais1.innerHTML="Ver menos";
  }
}

function vermais2(){
  let pontos2 = document.getElementById("pontos2");
  let maisTexto2 = document.getElementById("mais2");
  let btnVermais2 = document.getElementById("btnVerMais2");

  if (pontos2.style.display ==="none"){
    pontos2.style.display="inline";
    maisTexto2.style.display="none";
    btnVermais2.innerHTML="Ver mais";
  }else{
    pontos2.style.display="none";
    maisTexto2.style.display="inline";
    btnVermais2.innerHTML="Ver menos";
  }
}

function vermais3(){
  let pontos3 = document.getElementById("pontos3");
  let maisTexto3 = document.getElementById("mais3");
  let btnVermais3 = document.getElementById("btnVerMais3");

  if (pontos3.style.display ==="none"){
    pontos3.style.display="inline";
    maisTexto3.style.display="none";
    btnVermais3.innerHTML="Ver mais";
  }else{
    pontos3.style.display="none";
    maisTexto3.style.display="inline";
    btnVermais3.innerHTML="Ver menos";
  }
}

function vermais4(){
  let pontos4 = document.getElementById("pontos4");
  let maisTexto4 = document.getElementById("mais4");
  let btnVermais4 = document.getElementById("btnVerMais4");

  if (pontos4.style.display ==="none"){
    pontos4.style.display="inline";
    maisTexto4.style.display="none";
    btnVermais4.innerHTML="Ver mais";
  }else{
    pontos4.style.display="none";
    maisTexto4.style.display="inline";
    btnVermais4.innerHTML="Ver menos";
  }
}

function vermais5(){
  let pontos5 = document.getElementById("pontos5");
  let maisTexto5 = document.getElementById("mais5");
  let btnVermais5 = document.getElementById("btnVerMais5");

  if (pontos5.style.display ==="none"){
    pontos5.style.display="inline";
    maisTexto5.style.display="none";
    btnVermais5.innerHTML="Ver mais";
  }else{
    pontos5.style.display="none";
    maisTexto5.style.display="inline";
    btnVermais5.innerHTML="Ver menos";
  }
}

function vermais6(){
  let pontos6 = document.getElementById("pontos6");
  let maisTexto6 = document.getElementById("mais6");
  let btnVermais6 = document.getElementById("btnVerMais6");

  if (pontos6.style.display ==="none"){
    pontos6.style.display="inline";
    maisTexto6.style.display="none";
    btnVermais6.innerHTML="Ver mais";
  }else{
    pontos6.style.display="none";
    maisTexto6.style.display="inline";
    btnVermais6.innerHTML="Ver menos";
  }
}

function vermais7(){
  let pontos7 = document.getElementById("pontos7");
  let maisTexto7 = document.getElementById("mais7");
  let btnVermais7 = document.getElementById("btnVerMais7");

  if (pontos7.style.display ==="none"){
    pontos7.style.display="inline";
    maisTexto7.style.display="none";
    btnVermais7.innerHTML="Ver mais";
  }else{
    pontos7.style.display="none";
    maisTexto7.style.display="inline";
    btnVermais7.innerHTML="Ver menos";
  }
}

function vermais8(){
  let pontos8 = document.getElementById("pontos8");
  let maisTexto8 = document.getElementById("mais8");
  let btnVermais8 = document.getElementById("btnVerMais8");

  if (pontos8.style.display ==="none"){
    pontos8.style.display="inline";
    maisTexto8.style.display="none";
    btnVermais8.innerHTML="Ver mais";
  }else{
    pontos8.style.display="none";
    maisTexto8.style.display="inline";
    btnVermais8.innerHTML="Ver menos";
  }
}