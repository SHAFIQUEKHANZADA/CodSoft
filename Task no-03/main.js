let input = document.getElementById('Box')
let btn = document.querySelectorAll('button')

let str = "";
let arr = Array.from(btn);
arr.forEach (button => {
    button.addEventListener('click', s => {
        if(s.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
         else if (s.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
         } else if (s.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length-1) 
            input.value = str;
         }
         
         else {
            str += s.target.innerHTML;
            input.value = str;
        }

        
    })
})