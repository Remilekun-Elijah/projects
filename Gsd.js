////window.onscroll = function(){ move(); hideNav()};
//var nav = document.querySelector('#banner'); 
//var btn = document.querySelector('.btn');
//
//function spy(){ if(document.body.scrollTop > Math.round(document.documentElement.scrollHeight/2) || document.documentElement.scrollTop >
//   Math.round(document.documentElement.scrollHeight/2) ){ btn.style.opacity = '1'; btn.style.bottom = '3em'}
//    else{ btn.style.bottom = '-3em'; btn.style.opacity = '0'}
//               };
////    var offset = window.pageYOffset; function hideNav(){ console.log('offset '+offset); 
////    var newOffset = window.pageYOffset;
////console.log('newOffset'+newOffset); 
////if(offset > newOffset){ nav.style.top = '-6em'}
////else{ nav.style.top = '0px'} offset = newOffset}; 
//
//
//
//



//window.onload = function(){setTimeout(alet,10000); };
//function alet(){ alert('welcome!')};


function spy(){ 
     var btn = document.querySelector('.go-up');
    btn.scrollIntoView({ behavior: 'smooth'});
    if(document.body.scrollTop > Math.round(document.documentElement.scrollHeight/2.5) || document.documentElement.scrollTop > Math.round(document.documentElement.scrollHeight/2.5)){ btn.style.opacity = '1'; btn.style.bottom = '3em'} else { btn.style.opacity ='0'; btn.style.bottom = '-3em';} }

// scroll listener
window.onscroll = function(){spy(); move() };
   
var slide = window.pageYOffset; function move(){
    var newSlide = window.pageYOffset;
    var nav = document.querySelector('#banner');
    if(slide > newSlide){ nav.style.top = '-5.6em'} else{ nav.style.top = '0em'} slide = newSlide} 

