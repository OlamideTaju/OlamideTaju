/*const btn = 1;
function updateBtn1(){
    document.getElementById("btn").onclick = function () {
        document.getElementById("div2").innerHTML=1;
        btn.style.color="red";
    }
} updateBtn1();

let date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
//seconds = seconds.toString();
let time = [hours, minutes, seconds];
//time = time.toString();
console.log(time[0]);
   let interval = setInterval(funct, 1000);
  function funct(){
     time[2] +=1;
    document.getElementById("p").textContent= `${time[0]} : ${time[1]} : ${time[2]}`;
   if(time[2] >= 59){
    time[1]+=1;
    time[2] = 0;
    }
   else if (time[1] >= 60 && time[0] >= 12){
       time[0] = 1;
       time[1] = 0;
  }
    else if (time[1] >= 60){
        time[0] +=1;
        time[1] = 0;
}
else{
  document.getElementById("p").textContent= `${time[0]} : ${time[1]} : ${time[2]}`;
}
}
*/
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

for (let one = 0; one < number.length; number[0]++){
    console.log(number);
}
let display = document.getElementById("myclock");
let list = document.getElementById("list");
function displayNum() {
    document.getElementById("btn").onclick = function (){
        fetch('package.json').then(res =>{ res.json();
        }).then(data => {console.log(data);
        });
        display.style.opacity = "1";
        setInterval(function () {
            list.style.maxHeight = "120px";
            display.style.height = "0px";
            display.style.backgroundColor = "blue";

        });
    };
}
displayNum();

let inp = document.getElementById("input");
function myfunct() {
    document.getElementById("mybtn").onclick = function () {
        localStorage.setItem(inp);
        console.log(localStorage.getItem(inp));
    };
}
myfunct();
let counterTime =0;
let mycounter = document.getElementById("mywatch");
let counting = setInterval(update, 1000);
function updateCounter(){
    mycounter.textContent = counterTime;
     
} updateCounter();
function update(){
        counterTime +=1;
mycounter.textContent =`00:00: ${counterTime}`;
}
   
   
   function updateBtn(){
       document.getElementById("btnO").onclick = function (){
       inp.value = number[0] / 1;
 
       }
document.getElementById("btnT").onclick = function (){
       inp.value = number["1"];
       }
       
   } updateBtn();