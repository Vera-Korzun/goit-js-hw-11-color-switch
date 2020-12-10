import './styles.css';
const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
  };
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  let timerId;
  
  
  const handleClick = function () {
    refs.startButton.removeEventListener("click", handleClick);
    timerId = setInterval(() => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }
  
  refs.startButton.addEventListener("click", handleClick);
  
  console.log('Hello');
  
  refs.stopButton.addEventListener("click", function () {
    
    refs.startButton.addEventListener("click", handleClick);
    clearInterval(timerId);
  });