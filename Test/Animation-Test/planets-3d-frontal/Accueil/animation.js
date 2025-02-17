
const items = document.querySelectorAll('.celestial-body')
let index = 0;

function positionPlanets(){
    items.forEach((item,index) => {
        
    })
}

function changeColor() {

    const colorB = window.getComputedStyle(circleB).backgroundColor;
    const colorA = window.getComputedStyle(circleA).backgroundColor;

    circleA.style.backgroundColor = window.getComputedStyle(circleB).backgroundColor ;
  }