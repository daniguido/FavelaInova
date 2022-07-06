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
    
      
function vermais(){
  let pontos = document.getElementById("pontos");
  let maisTexto = document.getElementById("mais");
  let btnVermais = document.getElementById("btnVerMais");

  if (pontos.style.display ==="none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    btnVermais.innerHTML="Ver mais";
  }else{
    pontos.style.display="none";
    maisTexto.style.display="inline";
    btnVermais.innerHTML="Ver menos"
  }
}