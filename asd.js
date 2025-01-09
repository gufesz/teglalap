document.addEventListener('DOMContentLoaded', function() {
    const ellenorzesGomb = document.getElementById('ellenorzes');
    const szamInput = document.getElementById('szam');
    const uzenetDiv = document.getElementById('uzenet');

    ellenorzesGomb.addEventListener('click', function() {
        const szam = szamInput.value;
        
        if (szam.length !== 6 || isNaN(szam)) {
            uzenetDiv.textContent = "Adj meg egy 6 jegyű számot";
            return;
        }

        let osszeg = 0;
        for (let i = 0; i < 5; i++) {
            osszeg += parseInt(szam[i]);
        }

        while (osszeg > 9) {
            osszeg = osszeg.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }

        const utolsoSzamjegy = parseInt(szam[5]);

        if (osszeg === utolsoSzamjegy) {
            uzenetDiv.textContent = "Siker.";
        } else {
            uzenetDiv.textContent = "Sikertelen";
        }
    });
});