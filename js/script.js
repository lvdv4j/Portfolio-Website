document.addEventListener('DOMContentLoaded', function () {
  const texts = ["Lizzon-Vanique", "A programmer", "An animator", "A data engineer", "A game designer", "A website developer", "A freelancer"];
  const typingText = document.getElementById('changing-text');
  const typingSpeed = 100; // Adjust typing speed here
  const backspaceSpeed = 100; // Adjust backspace speed here
  const backspacePauseTime = 1500; // Pause before backspacing starts
  const typingPauseTime = 500; // Pause before typing the next text


  let currentTextIndex = 0;

  function typeText(text, callback) {
      let i = 0;
      typingText.textContent = '';
      const interval = setInterval(function () {
          typingText.textContent += text.charAt(i);
          i++;
          if (i > text.length) {
              clearInterval(interval);
              setTimeout(function () {
                  backspaceText(text, callback); 
              }, backspacePauseTime);
          }
      }, typingSpeed); 
  }

  function backspaceText(text, callback) {
      let i = text.length;
      const interval = setInterval(function () {
          typingText.textContent = text.substring(0, i);
          i--;
          if (i < 0) {
              clearInterval(interval);
              setTimeout(callback, typingPauseTime);  
          }
      }, backspaceSpeed);  
  }

  function startTyping() {
      typeText(texts[currentTextIndex], function () {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          startTyping();
      });
  }

  startTyping();
});

var canvas = document.querySelector('.matrix-rain canvas'), // Select the canvas inside matrix-rain
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(28, 28, 28, 0.4)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 48);

document.getElementById('navbar-placeholder').innerHTML = fetch('includes/navbar.html')
.then(response => response.text())
.then(html => document.getElementById('navbar-placeholder').innerHTML = html);
