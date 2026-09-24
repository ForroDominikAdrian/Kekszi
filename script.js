    document.addEventListener('DOMContentLoaded', function() {
        const userHeader = document.getElementById('userHeader');
        if (!userHeader) return;

        // Adatok kiolvasása a böngészőből
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (isLoggedIn && currentUser) {
            // HA BE VAN JELENTKEZVE:
            userHeader.innerHTML = `
                <span class="me-3 fw-bold" style="color: #3d2314; font-size: 15px;">
                    Szia, ${currentUser.name}!
                </span>
                <button id="logoutBtn" class="btn btn-custom" style="padding: 6px 12px; font-size: 13px;">
                    Kijelentkezés
                </button>
            `;

            // Kijelentkezés gomb működtetése
            document.getElementById('logoutBtn').addEventListener('click', function() {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser');
                window.location.reload(); // Oldal újratöltése
            });
        } else {
            // HA NINCS BEJELENTKEZVE:
            userHeader.innerHTML = `
                <a href="index.html" class="btn btn-custom" style="padding: 6px 12px; font-size: 13px;">
                    Bejelentkezés
                </a>
            `;
        }
    });
