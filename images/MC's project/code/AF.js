var ul = document.querySelector("nav ul"),
    errEl = document.createElement("li");
errEl.textContent = "hello";
ul.appendChild(errEl);

var date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    
    
    ampm = hour < 12 ? "AM" : "PM",
    time;
    function sec(){  
        var secs = document.createElement("span");
        secs.textContent = "0";
        secs.textContent =  parseFloat((date.getSeconds()) + 1) ;
        return secs.textContent++;
        
    };

window.setInterval(sec, 1000);
try{

hour = hour > 12 ? hour %  12 : hour;
minute = minute < 10 ? `0${minute}` : minute;
 var span = document.createElement("span").textContent = "hello";
    var s = document.createTextNode('0');
    
time = `${hour}:${minute} ${sec()} ${ampm}`;
errEl.textContent = `${time}`; 
console.log(time);     
}
catch(err){
    errEl.textContent = err.message;
}
