const botBtn = document.getElementById("chatbot-button");
const botWidget = document.getElementById("chatbot-widget");
const botInput = document.getElementById("chatbot-input");
const botMessages = document.getElementById("chatbot-messages");

botBtn.onclick = () => {
    botWidget.style.display =
        botWidget.style.display === "flex" ? "none" : "flex";
};

// Append messages
function addMessage(text, sender="user") {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.className = sender;
    botMessages.appendChild(msg);
    botMessages.scrollTop = botMessages.scrollHeight;
}

// Handle input
botInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter" && botInput.value.trim() !== "") {
        const userMsg = botInput.value;
        addMessage(userMsg, "user");
        botInput.value = "";

        // Placeholder bot response
        const reply = "Mostofa’s AI Assistant: I’m here to help! (Connect API later)";
        addMessage(reply, "bot");
    }
});
