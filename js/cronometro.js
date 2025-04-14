const showTimer = document.querySelector('.timer');
const buttonPower = document.querySelector('.power');
const buttonReload = document.querySelector('.reload');
const buttonMark = document.querySelector('.mark');
const markList = document.querySelector('.marklist');
let interval = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const hundredths = time % 100;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

const toogle = () => {
  const action = buttonPower.getAttribute('action');
  buttonReload.style.display = 'block';
  buttonMark.style.display = 'block';

  clearInterval(interval);

  if (action == 'start' || action == 'continue') {
    interval = setInterval(()=>{
      timer += 1
      showTimer.innerHTML = formatTime(timer);
    },10)

    buttonPower.innerHTML = '<i class="fa-solid fa-pause"></i>';
    buttonPower.setAttribute('action', 'pause');
  } else if(action == 'pause') {
    buttonPower.innerHTML = '<i class="fa-solid fa-play"></i>';
    buttonPower.setAttribute('action', 'continue');
  }
}

const restart = () => {
  buttonPower.innerHTML = '<i class="fa-solid fa-play"></i>';
  buttonPower.setAttribute('action', 'start');

  buttonReload.style.display = 'none';
  buttonMark.style.display = 'none';

  clearInterval(interval);
  timer = 0;
  showTimer.innerHTML = '00:00:00:00';

  marks = [];
  markList.innerHTML = '';
}

const addMarkList = (markIndex, markTime) => {
  markList.innerHTML += `<p><i class="fa-regular fa-flag"></i> Marca ${markIndex}: ${formatTime(markTime)}</p>`;
}

const markTime = () => {
  if (marks.length > 9){
    alert('Só é possível marcar 10 passos')
  } else {
    marks.push(timer);
    addMarkList(marks.length, timer);
  }
}

buttonPower.addEventListener('click', toogle);
buttonReload.addEventListener('click', restart);
buttonMark.addEventListener('click', markTime);