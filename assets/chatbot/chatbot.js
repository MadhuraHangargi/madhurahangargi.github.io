(function () {

  const bubble = document.getElementById("chatbot-bubble");
  const panel = document.getElementById("chatbot-panel");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("chat-send");
  const body = document.getElementById("chatBody");

  if (!bubble || !panel) return;

  // ADD MESSAGE
  function addMessage(text, type = "user") {
    const div = document.createElement("div");
    div.className = type === "user" ? "user-msg" : "bot-msg";
    div.innerText = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  // BOT RESPONSE
  function respond(text) {
    if (text.includes("help")) {
      addMessage("You can ask about contract counts or system status.", "bot");
    } 
    else if (text.includes("summary")) {
      const contracts = JSON.parse(localStorage.getItem("contracts")) || [];
      addMessage(`Total contracts: ${contracts.length}`, "bot");
    } 
    else if (text.includes("status")) {
      addMessage("All systems are running normally.", "bot");
    } 
    else {
      addMessage("Try typing 'help', 'summary', or 'status'.", "bot");
    }
  }

  // SEND MESSAGE
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    setTimeout(() => respond(text.toLowerCase()), 300);
  }

  // SEND BUTTON
  sendBtn.addEventListener("click", sendMessage);

  // ENTER KEY
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // QUICK BUTTONS
  document.querySelectorAll(".quick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      addMessage(type, "user");
      setTimeout(() => respond(type), 300);
    });
  });

})();




