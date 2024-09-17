document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Lizzon-Vanique", "A programmer", "An animator", "A data engineer", "A game designer"];
    const typingText = document.getElementById('changing-text');
    let currentTextIndex = 0;
  
    function typeText(text, callback) {
      let i = 0;
      typingText.textContent = '';
      const interval = setInterval(function () {
        typingText.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTimeout(callback, 1000); // Pause before starting next text
        }
      }, 100); // Adjust typing speed here
    }
  
    function startTyping() {
      typeText(texts[currentTextIndex], function () {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        startTyping();
      });
    }
  
    startTyping();
  });  