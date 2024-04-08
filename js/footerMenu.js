document.addEventListener('DOMContentLoaded', function() {
    const footerMenu = document.createElement('div');
    footerMenu.id = 'footer-menu';
    document.body.appendChild(footerMenu); // Coloca el menú en el cuerpo del documento, pero asegúrate de que esté visualmente al final

    const menuItems = ['home2', 'home', 'contactos', 'saldo'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        const icon = document.createElement('img');
        icon.src = `${item}-icon.png`; // Usa íconos representativos aquí
        icon.className = 'menu-icon';
        menuItem.appendChild(icon);

        footerMenu.appendChild(menuItem);
    });
});
