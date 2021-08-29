const tableElements = document.querySelectorAll(".main-table"),
            tableVal = document.querySelector(".first"),
            input = document.querySelector("input"),
            buttons = document.querySelectorAll(".button");

buttons.forEach((item)=>{
    item.addEventListener("click" , ()=>{
        insert(item.getAttribute("data"))
    })
})

const signPlus = document.querySelector(".plus"),
        signMinus = document.querySelector(".minus"),
        signMult = document.querySelector(".multiply"),
        signDivide = document.querySelector(".divide"),
        signClear = document.querySelector(".clear"),
        signEqual = document.querySelector(".equals "),
        signCutter = document.querySelector(".cutter");

signClear.addEventListener("click" , ()=>{
    input.value = "";
})

signCutter.addEventListener("click" , ()=>{
    input.value=input.value.slice(0,-1);
})

signEqual.addEventListener("click" , ()=>{
    if(input.value == false){
        input.value = "Введите сначала цифры"
    }else{
        let result = input.value;
        input.value = eval(result)
    }
   
})


function insert(num){
    input.value = input.value + num;
}




