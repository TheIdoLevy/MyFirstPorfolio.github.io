let line = document.getElementById('ground');

function change(){
    ball.style.bottom = '250px';
    ball.innerHTML = '';
};

function restore(){
    ball.style.bottom = '0px';
    ball.innerHTML = '<h1>Weeeeee!</h1>'
}

function colorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function colorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;
  }


document.addEventListener('keydown',change);
document.addEventListener('keyup',restore);
document.addEventListener('wheel', colorChange);
