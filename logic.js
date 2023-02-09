let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (ev)=>{
        if(ev.target.innerHTML == '='){
            string = calculate(string);
            document.querySelector("input").value = string;
        }
        else if(ev.target.innerHTML == 'C'){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(ev.target.innerHTML == 'DEL'){
            
            var value = document.querySelector("input").value;
            string = value.substr(0, value.length - 1);
            document.querySelector("input").value = string;
        }
        else{
        console.log(ev.target)
        string = string + ev.target.innerHTML;
        document.querySelector("input").value = string;}
    })
}) 
function calculate(string) {
    let calculation = string.split(/\b\s*([+\/*-])\s*/)
    const expression = calculation[1]
    switch(expression) {
        case "*":
            return parseInt(calculation[0])*parseInt(calculation[2])
            break;
        case "/":
            return parseInt(calculation[0])/parseInt(calculation[2])
            break;
        case "+":
            return parseInt(calculation[0])+parseInt(calculation[2])
            break;
        case "-":
            return parseInt(calculation[0])-parseInt(calculation[2])
            break;
        case '%':
                return parseInt(calculation[0])%parseInt(calculation[2])
                break;    
        // default:
        //     return (`Error ${string}, invalid OP.`)
    }
}