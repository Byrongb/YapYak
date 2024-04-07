window.onload = function() {
    const app = document.getElementById('app');

    // Crear el logo
    const logo = document.createElement('img');
    logo.src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/434339732_1167308667594123_6935472885804797777_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NP2nXsXO6fAAb6wyVHM&_nc_ht=scontent-sea1-1.xx&oh=00_AfAYxqABfkuSgmZ-aj-o1bRA0gpwjZBAW_1IAyMI7mQQJg&oe=6617F9C4';
    logo.alt = 'YapYak Logo';
    logo.classList.add('logo');
    app.appendChild(logo);

    // Crear el título
    const title = document.createElement('h1');
    title.textContent = 'YapYak';
    app.appendChild(title);

    // Redirigir a home.html después de 4 segundos
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 4000);
};
