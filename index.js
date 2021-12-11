var number = document.querySelector("#number");
var msg = document.querySelector("#msg");

var count = 0;
setInterval( function start(){
  if(count < 1000){
    count++;
    number.innerText = count;
  }
}, 1);

setTimeout(() => {
  msg.innerText = "COUNTER IS STOP NOW!!!"
}, 7000);