const display=document.getElementById("display");

function addToDisplay(input){
 
  display.value += input;
}

function cancel(){
  display.value="";
}
function  deleteOneNumber(){
  
  display.value = display.value.slice(0, -1);

}

function equal(){
  try{
    const total=eval(display.value).toFixed(6);
    if(total===undefined){
      display.value="";
    }
    else{
      display.value=total;
    }
    
  }
  catch{
    display.value="Error";
    
  }
  
 
}



document.addEventListener('keydown', (event)=> {
    const key = event.key;

    
    if (/[\d\.\+\-\*\/]/.test(key)) {
        addToDisplay(key);
    }
    
    else if (key === 'Enter'||key==='=') {
        equal();
    }
    
    else if (key === 'Escape' ) {
      cancel();
    }
    else if(key==='Delete'){
      display.value=display.value.slice(1);
    }
    else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
  }
});
