document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('quick-actions-container');

    const actions = [
        { title: 'Ver<br>contactos', icon: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436782990_1170200107304979_2321296002468936271_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S77gxhh0pVYAb5sf-wQ&_nc_ht=scontent-sea1-1.xx&oh=00_AfBwT2HuI7bKqZnuei1wshldYruG7vEwtk1U_kF5b-ZTWA&oe=6617ECDA' },
        { title: 'Recarga<br>móvil', icon: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436770755_1170195520638771_5708917345082855468_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WXFsiyBl5PQAb4GKv0h&_nc_ht=scontent-sea1-1.xx&oh=00_AfBkTtQO1jkBGyLO0OPL8yiirqxC4dkUQJ3g7wlo28DG3Q&oe=6617FC4E' },
        { title: 'Transferencia<br>de dinero', icon: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436907132_1170192953972361_3525272167220031839_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gkjImOtDqfIAb4BhUz-&_nc_ht=scontent-sea1-1.xx&oh=00_AfCiIQ_sfZmDWkJrho4XzIP1o9xV4fDG7HQ5N9nB1bPB6g&oe=6617E4A5' },
        { title: 'Planes<br>de llamadas', icon: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/436801275_1170197120638611_5243823755745497661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8O_7SVvfBqMAb4Szbp0&_nc_ht=scontent-sea1-1.xx&oh=00_AfBx0bYyMReXwCPiOia10FYmqh6BsI3B-p_CDFqecUCKoA&oe=661812A5' },
    ];

    actions.forEach(action => {
        const actionButton = document.createElement('div');
        actionButton.className = 'action-button';

        const icon = document.createElement('img');
        icon.src = action.icon;
        icon.className = 'action-icon';
        actionButton.appendChild(icon);

        const title = document.createElement('div'); // Usamos 'div' para contener el texto
        title.className = 'action-title';
        title.innerHTML = action.title; // Usamos innerHTML para interpretar el HTML (como <br>)
        actionButton.appendChild(title);

        container.appendChild(actionButton);
    });
});
