let btnCount = document.getElementById('btnCount');
let btnReset = document.getElementById('btnReset');
let pCount = document.getElementById('pCount');
let sect = document.getElementById('sect');

let count = 0;

const sbg = function(){
  const randColor = Math.floor(Math.random() * 16777215).toString(16);
  sect.style.backgroundColor = "#" + randColor;
}

pCount.textContent = 0;

btnCount.onclick = function(){
  count++;
  pCount.textContent = count;
  sbg()
}

btnReset.onclick = function(){
  pCount.textContent = 0;
  count = 0;
  sect.style.backgroundColor = 'white';
}

