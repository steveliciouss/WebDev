const chatContainer = document.getElementById('chat-container');
const chatbox = document.getElementById('chatbox');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');
const exitBtn = document.getElementById('exitBtn');

function showChat() {
    chatContainer.style.display = 'block'; // Show the chatbox
}

function sendMessage() {
    const message = input.value.trim();
    if (message === '') return;

    // Display user message
    displayMessage(message, 'You');

    // Clear input field
    input.value = '';

    // Focus on input for next message
    input.focus();

    //stimulate delayed response
    setTimeout(() => {
        let response;
        if (message.includes('hello')) {
            response = "Hi there!";
        } else if (message.includes('any update?')) {
            response = "Thanks for using our platform. It is being processed. You may wait for the update regarding your request.";
        } else {
            response = "I'm sorry, I don't understand. Can you please rephrase?";
        }
        displayMessage(response, 'Helper');
    }, 1000); // delay the response
}

function displayMessage(message, sender) {
    const msgElement = document.createElement('div');
    msgElement.textContent = `${sender}: ${message}`;
    msgElement.style.marginBottom = '6px';
    msgElement.style.color = sender === 'You' ? 'blue' : 'green';
    chatbox.appendChild(msgElement);

    // scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

function exitChat() {
    // Clear chatbox
    chatbox.innerHTML = '';

    // Clear input field
    input.value = '';

    // Hide the chatbox
    chatContainer.style.display = 'none';
}