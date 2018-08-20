var outerW, innerW, outerH, innerH, footer;
    outerW = window.outerWidth;
    innerW = window.innerWidth;

if(outerW < 550) {
    footer = document.getElementById('footer1');
footer.style.display = 'block';
               var footer2 = document.querySelector('#footer2'); footer2.style.marginTop = "-2vh";
                  
//               var hr = document.getElementsByClassName('hr');  
//    console.log(hr);            
//    for(var i=0; i < hr.length; i++)
//     var h = hr[i];
//                  console.log(h);
                 }
else{
    console.log(outerW);
}