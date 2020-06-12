
alert("Welcome Veterans!!");


let vet = document.querySelector('#demo')
vet.innerHTML = "Veteran Resources"
vet.addEventListner{'mouseover', fucntion(){
    vet.style.color = 'blue'
    vet.style.textShadow = "0.075em 0.08em 0.1em rgba(0, 0, 0, 1)"
}}

vet.addEventListener('mouseout')