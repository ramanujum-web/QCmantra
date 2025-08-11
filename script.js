
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('chatbot-toggle-button');
        const closeButton = document.getElementById('chatbot-close-button');
        const chatbotContainer = document.getElementById('chatbot-container');

        toggleButton.addEventListener('click', function() {
            chatbotContainer.classList.toggle('open');
        });

        closeButton.addEventListener('click', function() {
            chatbotContainer.classList.remove('open');
        });
    });
