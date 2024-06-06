var bulb=document.querySelector("#bulb");
var btn=document.querySelector("button");

var check=0;

btn.addEventListener("click",function(){
    if(check==0){
        bulb.style.backgroundColor="yellow";
        btn.innerHTML="OFF";
        check=1;
    }
    else{
        bulb.style.backgroundColor="transparent";
        btn.innerHTML="ON";
        check=0;
    }
});