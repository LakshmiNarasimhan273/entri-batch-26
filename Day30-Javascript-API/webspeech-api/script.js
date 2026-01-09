// Check browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Your browser does not support Speech Recognition. Try Chrome!");
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // keep listening until stopped
  recognition.interimResults = true;
  recognition.lang = "en-US";

  const output = document.getElementById("output");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");

  // Start button
  startBtn.addEventListener("click", () => {
    recognition.start();
    output.textContent = "Listening...";
  });

  // Stop button
  stopBtn.addEventListener("click", () => {
    recognition.stop();
  });

  // On result
  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    output.textContent = transcript;
  };

  // Error handling
  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
  };

  recognition.onend = () => {
    console.log("Speech recognition stopped.");
  };
}
