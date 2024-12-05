document.getElementById('szamit').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('ao').value);
    var b = parseFloat(document.getElementById('bo').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Kérem, adja meg a megfelelő értékeket!');
        return;
    }

    var kerulet = 2 * (a + b);
    document.getElementById('kerulet').textContent = 'A kerület: ' + kerulet;
});