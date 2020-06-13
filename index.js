document.addEventListener('DOMContentLoaded', function(){

    let changeColorButton = document.querySelector('#changeColor')
  
    let colorDiv = document.querySelector('#colorDiv')
  
    changeColorButton.addEventListener('click', function(){
  
        colorDiv.style.background = 'green'
  
    })
  
  })

  function makeSmall() {
      document.getElementById("veteran").setAttribute(
          'style', 'transform:rotate(180deg)'

      )
  }



  alert("Welcome Veterans!!");
