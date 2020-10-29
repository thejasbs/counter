var count=0;


const left_button=document.querySelector("#left_btn");
const right_button=document.querySelector("#right_btn");


left_button.addEventListener("click",lowerCount);
right_button.addEventListener("click",upperCount);

function lowerCount(){
    count+=-1;
    document.querySelector("#counter").textContent=count;
    countColor();
}
function upperCount(){
    count+=1;
    document.querySelector("#counter").textContent=count;
    countColor();
}

function countColor(){
    if(count < 0){
        document.querySelector("#counter").style.color="red";
    }else if(count > 0){
        document.querySelector("#counter").style.color="green";
    }
    else{
        document.querySelector("#counter").style.color="black";
    }
}
