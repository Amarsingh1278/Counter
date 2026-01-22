const mainTitle = document.querySelector("#title");
let curValue = 0;

const btnDecrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");

btnIncrement.addEventListener("click" , ()=>{
    curValue ++;
    mainTitle.textContent = curValue;
    if(curValue>0){
        mainTitle.style.color = 'green'
    }
});
btnDecrement.addEventListener("click" , ()=>{
    curValue --;
    mainTitle.textContent = curValue;
    if(curValue<0){
        mainTitle.style.color = 'red'
    }
});
reset.addEventListener("click" , ()=>{
    curValue = 0;
    mainTitle.textContent = curValue;
    if(curValue==0){
        mainTitle.style.color = 'black'
    }
});
