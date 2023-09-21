
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/ 60) * 360 + 90);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360 + 90);

  const hours = now.getHours();
  const hoursDegrees = ((hours/ 12) * 360 + 90);

  if (secondsDegrees === 450) secondHand.style.transform = `rotate(90deg)`;
  else secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (minutesDegrees === 450) minHand.style.transform = `rotate(90deg)`;
  else minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  if (hoursDegrees === 450) hourHand.style.transform = `rotate(90deg)`;
  else hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000,);