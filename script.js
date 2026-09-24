document.addEventListener('DOMContentLoaded', function() {
    renderHeader();
});

function renderHeader() {
    const userHeader = document.getElementById('userHeader');
    if (!userHeader) return;

    // Bejelentkezett felhasználó kiolvasása
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // HA BE VAN JELENTKEZVE:
        userHeader.innerHTML = `
            <span class="me-3 fw-bold" style="color: #3d2314; font-size: 15px;">
                Szia, ${currentUser.name}!
            </span>
            <button id="logoutBtn" class="btn btn-custom" style="padding: 6px 12px; font-size: 13px;">
                Kijelentkezés
            </button>
        `;

        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            renderHeader(); // Frissíti a fejlécet kijelentkezés után
        });
    } else {
        // HA NINCS BEJELENTKEZVE:
        userHeader.innerHTML = `
            <a href="index.html" class="btn btn-custom" style="padding: 6px 12px; font-size: 13px;">
                Bejelentkezés
            </a>
        `;
    }
}