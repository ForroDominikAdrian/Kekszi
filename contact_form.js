document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const valasztottKod = urlParams.get('szolgaltatas');

    const szolgaltatasok = {
        p1: "AI-Alapú Szoftverfejlesztés & AI Transzformáció",
        p2: "Forráskód Elemzés",
        p3: "Cross-Platform Mobilalkalmazás-Fejlesztés",
        p4: "Android Alkalmazásfejlesztés",
        p5: "iOS Mobilalkalmazás-Fejlesztés",
        p6: "Komplex Mobilalkalmazás-Fejlesztés",
        p7: "Egyedi Szoftverfejlesztés",
        p8: "IT Projektmenedzsment",
        p9: "Minőségbiztosítás és Tesztelés",
        p10: "Szoftverfejlesztési Feltáró Fázis",
        p11: "IT Audit & Tanácsadás",
        p12: "UX/UI Tervezési Szolgáltatások"
    };

    const nevInput = document.getElementById('nev');
    const emailInput = document.getElementById('email');
    const szolgaltatasInput = document.getElementById('szolgaltatasInput');

    try {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

        if (isLoggedIn && currentUser) {
            if (currentUser.name && nevInput) {
                nevInput.value = currentUser.name;
            }

            if (currentUser.email && emailInput) {
                emailInput.value = currentUser.email;
            }
        }
    } catch (error) {
        console.warn('A felhasználói adatok olvasása sikertelen:', error);
    }

    if (valasztottKod && szolgaltatasInput) {
        szolgaltatasInput.value = szolgaltatasok[valasztottKod] || valasztottKod;
    }
});
