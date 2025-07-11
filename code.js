let seconds=0;
let interValid = null;

const display=document.querySelector("#display");
function  updateDisplay(){
    let hrs=Math.floor(seconds/3600);
    let min=Math.floor((seconds%3600)/60); //left over seconds converting to min
    let secs=seconds%60;
    display.textContent=`${pad(hrs)}:${pad(min)}:${pad(secs)}`;//pad-2digits always
}
function pad(num){
    return num.toString().padStart(2,'0');
}
function strt(){
    if(interValid) return;
    interValid=setInterval(()=>{
    seconds++;
    updateDisplay();
},1000);//after every 1 second we will incement the seconds
}

function pause(){
    clearInterval(interValid);//stops the  interval
    interValid=null;
}

function reset(){
    clearInterval(interValid);
    interValid=null;
    seconds=0;
    updateDisplay();
    document.getElementById("laps").textContent="";

}
function lap(){
    const lapContainer=document.querySelector("#laps");
    const lapItem=document.createElement("li");
    lapItem.textContent=display.textContent;
    lapContainer.appendChild(lapItem);//add to list
}

