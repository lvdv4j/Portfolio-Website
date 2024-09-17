// JavaScript to handle changing text effect
const texts = [
    "Hi I'm {Lizzon-Vanique}",
    "Hi I'm {a programmer}",
    "Hi I'm {an animator}",
    "Hi I'm {a data engineer}",
    "Hi I'm {a game designer}"
  ];
  
  let textIndex = 0;
  const changingText = document.getElementById('changing-text');
  
  function changeText() {
    changingText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
  }
  
  // Change text every 2.5 seconds
  setInterval(changeText, 2500);