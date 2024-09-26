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
