document.addEventListener('DOMContentLoaded', function() {
    const homeContainer = document.getElementById('home-container');

    // Crear el header y sus contenidos
    const header = document.createElement('header');
    homeContainer.appendChild(header);

    // Sección del saldo
    const balanceInfo = document.createElement('div');
    balanceInfo.className = 'balance-info';
    header.appendChild(balanceInfo);

    const walletIcon = document.createElement('img');
    walletIcon.src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436658333_1170170567307933_8621982789288833053_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qzrQduE64uMAb7n77vj&_nc_ht=scontent-sea1-1.xx&oh=00_AfAPb5leQlFISdcdfC23rhjZw-ajKC-TR1SALyjG3ERj-w&oe=6617EBE7'; // Asegúrate de tener este ícono en tu proyecto
    walletIcon.alt = 'Saldo';
    walletIcon.className = 'wallet-icon';
    balanceInfo.appendChild(walletIcon);

    const balance = document.createElement('span');
    balance.className = 'balance';
    balance.textContent = '$0.00'; // Ejemplo de saldo s
    balanceInfo.appendChild(balance);

    // Barra de búsqueda
    const searchBar = document.createElement('input');
    searchBar.type = 'search';
    searchBar.className = 'search-bar';
    searchBar.placeholder = 'Busca un nombre o número';
    header.appendChild(searchBar);
});
