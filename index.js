
let billAmountInput = document.querySelector("#bill");
let cashAmountInput = document.querySelector("#cash");
const notes = [2000,500,100,20,5,1];
let amountReturn = 0;

let billButton = document.querySelector("#take-bill");
let cashButton = document.querySelector("#take-cash");

let cashDiv = document.querySelector(".after-bill");
let tableDiv = document.querySelector(".after-cash");

let errorMessage = document.querySelector("#bill-error");
let returnMessage = document.querySelector("#return")

clear(cashDiv)
clear(tableDiv)
clear(errorMessage)

let change = document.querySelectorAll(".change")

billButton.addEventListener('click',function(){
    handleExecption(billAmountInput,cashDiv);
})
cashButton.addEventListener('click',function(){ 
    amountReturn = cashAmountInput.value -billAmountInput.value 
    if(amountReturn>0){
        returnMessage.innerText = "Return Amount: " + amountReturn
    notes.map((item,index)=>{
        let numberOfNotes=Math.trunc(amountReturn/item)
        if(numberOfNotes){
            change[index].innerText = numberOfNotes 
        }
        amountReturn %=item;
    })
  handleExecption(cashAmountInput,tableDiv);
    }else{
        showBillError()
    }
     

})

function handleExecption(inputToHandle,divToDisplayIfCorrect){
    if(inputToHandle.value<=0){
        showBillError()
    }else if (inputToHandle.value === ""){
       showBillError()
    }
    else{
        clear(errorMessage)
        display(divToDisplayIfCorrect)
    }
}


function showBillError (text){
    clear(errorMessage)
    errorMessage.innerText = "Bill Amount or Cash Amount is invalid"
    display(errorMessage)
}
function clear(thingToClear){
    thingToClear.style.display = "none";
}
function display(thingToDisplay){
    thingToDisplay.style.display = "block";
}

