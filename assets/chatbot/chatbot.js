(function () {

  // SAFETY: wait until chatbot HTML exists
  function initChatbot() {
    const bubble = document.getElementById("chatbot-bubble");
    const panel = document.getElementById("chatbot-panel");
    const body = document.getElementById("chatBody");

    if (!bubble || !panel || !body) {
      // try again until HTML is injected
      setTimeout(initChatbot, 50);
      return;
    }

    // OPEN CHAT
    bubble.addEventListener("click", () => {
      panel.classList.remove("chat-hidden");
      bubble.style.display = "none";
    });

    // GLOBAL CLICK HANDLER (KEY FIX 🔥)
    document.addEventListener("click", (e) => {

  // ✅ CLOSE CHAT (ROBUST)
    
      const closeBtn = e.target.closest("#chat-close");
      if (closeBtn) {
        panel.classList.add("chat-hidden");
        bubble.style.display = "flex";
        return;
       }

      // QUICK BUTTONS
      if (e.target.classList.contains("quick-btn")) {
        const type = e.target.dataset.type;
        addUser(type);
        setTimeout(() => respond(type), 300);
      }

      // SEND BUTTON
      if (e.target.id === "chat-send") {
        sendFromInput();
      }
    });

    // ENTER KEY
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !panel.classList.contains("chat-hidden")) {
        sendFromInput();
      }
    });

    function addUser(text) {
      const div = document.createElement("div");
      div.className = "user-msg";
      div.innerText = text;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
    }

    function addBot(text) {
      const div = document.createElement("div");
      div.className = "bot-msg";
      div.innerText = text;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
    }

    function sendFromInput() {
      const input = document.getElementById("chatInput");
      if (!input) return;

      const text = input.value.trim();
      if (!text) return;

      addUser(text);
      input.value = "";
      setTimeout(() => respond(text.toLowerCase()), 400);
    }

    function respond(text) {
      if (text.includes("help")) {
        addBot("You can ask about contract summary or system status.");
      }
      else if (text.includes("summary")) {
        const contracts = JSON.parse(localStorage.getItem("contracts")) || [];
        addBot(`Total contracts: ${contracts.length}`);
      }
      else if (text.includes("status")) {
        addBot("System is running normally.");
      }
      else {
        addBot("Try typing 'help'.");
      }
    }
  }

  // START
  initChatbot();

})();
