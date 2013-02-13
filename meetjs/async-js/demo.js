/** Copyrighted to Microsoft IE Drive **/

function loadScript(url) {
    var script = document.createElement("script");
    script.async = false;
    script.src = url;
    document.head.appendChild(script);
}

function loadScriptTraditional(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url + "t";
    document.head.appendChild(script);
}

var width = 64;
var height = 64;
var wait = 0;
function log(num) {
    wait--;
    
    var type = (num.indexOf("t") != -1) ? 1 : 2;
    
    num = parseInt(num);
    var x = -width * (num % 4) + "px";
    var y = -height * Math.floor(num / 4) + "px";
    
    var elm = document.createElement("div");
    elm.className = "slice";
    elm.title = "Slice " + (num + 1);
    elm.style.backgroundPosition = x + " " + y;
    document.getElementById("output" + type).appendChild(elm);
}


function dynamicAsyncDemo() {
    if(wait) return;
    
    wait = 32;
    $("#output1").text("");
    $("#output2").text("");
    
    var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    var time, url;
    for(var i = 0, length = times.length; i < length; i++) {   
        time = times.splice(Math.round(Math.random() * (times.length - 1)),1);
        url = "http://www.jasonweber.com/IETestDrive/AsyncScripts/delayLog.aspx?sec="+time+"&id="+i;
        loadScript(url);
        loadScriptTraditional(url);
    }
}