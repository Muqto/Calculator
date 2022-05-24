const button = Array.from(document.querySelectorAll(".button"));
const display = document.querySelector(".display");
button.map( b => {
    b.addEventListener('click', (e) =>{
        

        switch(e.target.innerText){
            case 'C':
                display.innerHTML = '';
                break;
            case 'Del':
                display.innerHTML = display.innerHTML.slice(0, -1);
                break;
            case '=':
                try{
                    display.innerHTML = eval(display.innerHTML);
                }
                catch(err){
                    display.innerHTML = "Error";
                }
                break;
            default:
                display.innerHTML += e.target.innerText;
                break;
        }
    })
});