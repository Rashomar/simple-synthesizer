  const blue = document.querySelector('.blue');
  const purple = document.querySelector('.purple');
  const green = document.querySelector('.green');
  const grey = document.querySelector('.grey');
  const brown = document.querySelector('.brown');
  const yellow = document.querySelector('.yellow');
  const lightblue = document.querySelector('.lightblue');
  const orange = document.querySelector('.orange');
  const pink = document.querySelector('.pink');

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  window.addEventListener('click',function(e){
    if(e.target == blue) {
       play(15,100);
    }
    else if(e.target == purple){
       play(70,200);
    }
    else if(e.target == green){
       play(15,300);
    }
      else if(e.target == grey){
       play(15,400);
    } 
    else if(e.target == brown){
       play(15,450);
    }
    else if(e.target == yellow){
       play(15,600);
    }
      else if(e.target == lightblue){
       play(15,700);
    } 
    else if(e.target == orange){
       play(15,800);
    }
    else if(e.target == pink){
       play(15,900);
    } 
  });


  window.addEventListener("keydown", function(e){
    let key = e.which;

    if(key == "65") {
       blue.classList.add('q');
       play(15,100);
    }
    else if(key == "83"){
       purple.classList.add('s');
       play(70,200);
    }
    else if(key == "68"){
       green.classList.add('d');
       play(15,300);
    }
      else if(key == "70"){
       grey.classList.add('f');
       play(15,400);
    } 
    else if(key == "71"){
       brown.classList.add('g');
       play(15,450);
    }
    else if(key == "72"){
       yellow.classList.add('h');
       play(15,600);

    }
      else if(key == "74"){
       lightblue.classList.add('j');
       play(15,700);
    } 
    else if(key == "75"){
       orange.classList.add('k');
       play(15,800);
    }
    else if(key == "76"){
       pink.classList.add('l');
       play(15,900);
    } 
  })

  window.addEventListener("keyup", function(e){
    let key = e.which;
    if(key == "65") {
       blue.classList.remove('q');
    }
    else if(key == "83"){
       purple.classList.remove('s');
    }
    else if(key == "68"){
       green.classList.remove('d');
    }
      else if(key == "70"){
       grey.classList.remove('f');
    } 
    else if(key == "71"){
       brown.classList.remove('g');
    }
    else if(key == "72"){
       yellow.classList.remove('h');
    }
      else if(key == "74"){
       lightblue.classList.remove('j');
    } 
    else if(key == "75"){
       orange.classList.remove('k');
    }
    else if(key == "76"){
       pink.classList.remove('l');
    } 
  });



function play(pitch, freq) {
  let startTime = audioContext.currentTime;
  let endTime = startTime + 0.14;

  let oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  oscillator.type = 'square';
  oscillator.detune.value = pitch * 10;
  oscillator.frequency.value = freq;

  oscillator.start(startTime);
  oscillator.stop(endTime);
}