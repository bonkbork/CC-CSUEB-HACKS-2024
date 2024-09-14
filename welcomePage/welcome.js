const messages = document.getElementById('messages');

    function sendMessage() {
      const input = document.getElementById('input');
      const userMessage = input.value;

      // Add user message to the chat
      const userDiv = document.createElement('div');
      userDiv.classList.add('message', 'user');
      userDiv.innerText = userMessage;
      messages.appendChild(userDiv);

      // Clear the input field
      input.value = '';

      // Simulate bot response
      setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.classList.add('message', 'bot');
        botDiv.innerText = 'This is a response from the bot!';
        messages.appendChild(botDiv);

        // Scroll to the bottom
        messages.scrollTop = messages.scrollHeight;
      }, 1000);
    }