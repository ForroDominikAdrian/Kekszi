document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    // Itt a valasztottKod változóba mentjük az értéket
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

    // Itt is a valasztottKod-ot vizsgáljuk
    if (valasztottKod) {
        const inputMezo = document.getElementById('szolgaltatasInput');
        if (inputMezo) {
            inputMezo.value = szolgaltatasok[valasztottKod] || valasztottKod;
        }
    }
});