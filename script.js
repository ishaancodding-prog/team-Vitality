// Function to switch between pages/sections smoothly
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }

    // Update active navbar styles
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
}

// Handle login mock action
function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Redirecting to Programmer Dashboard...');
    showSection('dashboard');
}

// --- Chatbot Integration Logic ---
// Use this function/logic to integrate your existing chatbot mechanism
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    
    if (input.value.trim() === '') return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = input.value;
    chatBody.appendChild(userMsg);

    const userText = input.value;
    input.value = '';

    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate bot response (You can replace this handler with your actual custom chatbot API or script integration)
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        botMsg.textContent = getBotResponse(userText);
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// Simple logic handler (Placeholder for your custom chatbot system)
function getBotResponse(input) {
    const text = input.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) {
        return "Hey there! Ready to explore the Gen-Z dashboard?";
    } else if (text.includes('programmer') || text.includes('data')) {
        return "You can check the Programmer Profile tab to view live GitHub stats and metrics!";
    } else {
        return "That's a vibe! If you have your custom backend chatbot code, you can easily plug it right into this `sendMessage` function.";
    }
}
