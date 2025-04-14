// DECLARAÇÃO GERAL DAS VARIÁVEIS
// Variáveis para os botões inferiores do relógio
const pointerClock = document.getElementById('ponteiro')
const digitalClock = document.getElementById('digital')
const solarClock = document.getElementById('solar')
const buttonPointer = document.getElementById('buttonPonteiro')
const buttonDigital = document.getElementById('buttonDigital')
const buttonSolar = document.getElementById('buttonSolar')

// Variáveis para o relógio de ponteiro
const hr = document.querySelector('.hora')
const min = document.querySelector('.minuto')
const seg = document.querySelector('.segundo')

// Variáveis para o relógio digital
const digital = document.querySelector('.dig')

// Variáveis para o relógio solar
const solarIlustration = document.querySelector('.astro')
const backgroundSolar = document.querySelector('.solarClock')
const solarHour = document.querySelector('.hourSol')

// COLETANDO OS DADOS DE HORA ATUAL
const getTime = () => {
  const date = new Date()

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  } 
}

// CONF DO RELÓGIO DE PONTEIRO
setInterval(() =>{
  
  const { seconds, minutes, hours } = getTime()

  seg.style.transform = `translate(0, -50%) rotate(${seconds*6}deg)`
  min.style.transform = `translate(0, -50%) rotate(${minutes*6}deg)`
  hr.style.transform = `translate(0, -50%) rotate(${hours*30}deg)`

}, 1000)

// FAZENDO FUNCIONAR O RELÓGIO DIGITAL
setInterval(() =>{
  
  const { seconds, minutes, hours } = getTime()
  const horas = hours.toString().padStart(2, '0')
  const minutos = minutes.toString().padStart(2, '0')
  const segundos = seconds.toString().padStart(2, '0')

  digital.innerHTML = `${horas} : ${minutos} : ${segundos}`

}, 1000)

// FAZENDO FUNCIONAR O RELÓGIO SOLAR
setInterval(() =>{
  
  const { minutes, hours } = getTime()
  const horasIlustration = hours*7.5
  const minutosIlustration = minutes*0.125
  const horasClock = hours.toString().padStart(2, '0')
  const minutosClock = minutes.toString().padStart(2, '0')

  solarHour.innerHTML = `${horasClock}:${minutosClock}`

  solarIlustration.style.transform = `rotate(${horasIlustration+minutosIlustration}deg)`

  if(hours <= 4 || hours >=19){
    solarIlustration.innerHTML = '🌙'
    backgroundSolar.style.backgroundImage = 'linear-gradient(to bottom, #050024, #00245e95 80%)'
    backgroundSolar.style.boxShadow = 'inset 0 0 0 21px #e4e3e0, inset 0 0 0 33px #050024, inset 0 0 0 100px #e4e3e0'
  } else if(hours == 5 || hours == 18){
    backgroundSolar.style.backgroundImage = 'linear-gradient(to bottom, #ffba18, #c7000095 80%)'
    backgroundSolar.style.boxShadow = 'inset 0 0 0 21px #e4e3e0, inset 0 0 0 33px #ffba18, inset 0 0 0 100px #e4e3e0'
  } else if (hours >= 6 || hours <= 17){
    backgroundSolar.style.backgroundImage = 'linear-gradient(to bottom, #ff0, #ffc710 70%)'
    backgroundSolar.style.boxShadow = 'inset 0 0 0 21px #e4e3e0, inset 0 0 0 33px #ff0, inset 0 0 0 100px #e4e3e0'
  }

}, 1000)

// FAZENDO FUNCIONAREM OS BOTÕES INFERIORES DO RELÓGIO
function showPointer() {
  pointerClock.style.display = 'flex'
  digitalClock.style.display = 'none'
  solarClock.style.display = 'none'
  buttonPointer.style.border = '1px solid #fff'
  buttonDigital.style.border = '2px solid #7e0711'
  buttonSolar.style.border = '2px solid #7e0711'
}

function showDigital(){
  digitalClock.style.display = 'flex'
  pointerClock.style.display = 'none'
  solarClock.style.display = 'none'
  buttonDigital.style.border = '1px solid #fff'
  buttonPointer.style.border = '2px solid #7e0711'
  buttonSolar.style.border = '2px solid #7e0711'
}

function showSolar(){
  solarClock.style.display = 'flex'
  digitalClock.style.display = 'none'
  pointerClock.style.display = 'none'
  buttonSolar.style.border = '1px solid #fff'
  buttonDigital.style.border = '2px solid #7e0711'
  buttonPointer.style.border = '2px solid #7e0711'
}