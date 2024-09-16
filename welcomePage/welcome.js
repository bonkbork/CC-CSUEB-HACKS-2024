const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Function to show the popup
    window.onload = function() {
      popup.style.display = 'block';
    };

    // Function to hide the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    const messages = document.getElementById('messages');

    

    var alrHappened = false; // created boolean function alrHappened outside of functions to keep its value, also here to allow for change in prompt -B

function sendMessage() {
  setTimeout(() => {      // set this messages.innerHTML part here to get rid of existing text when new prompt drawn -B
    messages.innerHTML = "\n";
  }, 700);
  const input = document.getElementById('input');
  const userMessage = input.value;

  // Clear the input field
  input.value = '';

  // Simulate bot response
  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.classList.add('message', 'bot');
    if(alrHappened){  //condition statements to go through two different responses to show what AI would look like -B
      botDiv.innerText = 'I have not been trained to answer that yet';
      alrHappened = false;
    }
    else{ //condition statements to go through two different responses to show what AI would look like -B (runs when alrHappened = false)
      botDiv.innerText = "Mmmm I love honey, and extra words to show that it stays within limit. Did you know brown bears can live 20-30 years long? I didn't either."
      alrHappened = true;
    }
    
    messages.appendChild(botDiv);

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
  }, 700);
}