document.addEventListener('DOMContentLoaded', function() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.id = 'keyboard-container';
    document.body.appendChild(keyboardContainer);

    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', '#'];
    keys.forEach(key => {
        const button = document.createElement('button');
        button.textContent = key;
        button.className = 'keyboard-key';
        keyboardContainer.appendChild(button);
    });

    // Botón de llamar con espacio para imagen
    const callButton = document.createElement('button');
    callButton.className = 'call-button';
    const callIcon = document.createElement('img');
    callIcon.src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436847036_1170702710588052_2307037423088600008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tkaSnyUXIhYAb6IEXpz&_nc_ht=scontent-sea1-1.xx&oh=00_AfB4C7xJPQ3z7-J1NQScHW5GkLlM1Mu9G1f9PGTUBF40lg&oe=661942A2'; // Asegúrate de tener esta imagen en tus recursos
    callButton.appendChild(callIcon);
    keyboardContainer.appendChild(callButton);
});
