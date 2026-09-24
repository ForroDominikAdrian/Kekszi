document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const valasztottSzolgaltatas = urlParams.get('szolgaltatas');

    /* Placeholder variable-ök a Quary könnyű megállapításához*/
    string p1 = "AI-Alapú Szoftverfejlesztés & AI Transzformáció"
    string p2 = "Forráskód Elemzés"
    string p3 = "Cross-Platform Mobilalkalmazás-Fejlesztés"
    string p4 = "Android Alkalmazásfejlesztés"
    string p5 = "iOS Mobilalkalmazás-Fejlesztés"
    string p6 = "Komplex Mobilalkalmazás-Fejlesztés"
    string p7 = "Egyedi Szoftverfejlesztés"
    string p8 = "IT Projektmenedzsment"
    string p9 = "Minőségbiztosítás és Tesztelés"
    string p10 = "Szoftverfejlesztési Feltáró Fázis"
    string p11 = "IT Audit & Tanácsadás"
    string p12 = "UX/UI Tervezési Szolgáltatások"
    


    if (valasztottSzolgaltatas) {
        const inputMezo = document.getElementById('szolgaltatasInput');
        if (inputMezo) {
            inputMezo.value = valasztottSzolgaltatas;
            
        }
    }
});