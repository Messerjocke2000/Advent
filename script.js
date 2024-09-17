window.onload = function () {
    const today = new Date().getDate();

    // Füge EventListener für jedes Türchen hinzu
    document.querySelectorAll('.door').forEach((door, index) => {
        const day = index + 1;

        if (day <= today) {
            door.addEventListener('click', function () {
                openDoor(day);
            });
        } else {
            door.style.opacity = "0.5"; // Türchen noch nicht anklickbar
        }
    });

    // Schließen des Popups
    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('content').style.display = 'none';
    });
};

function openDoor(day) {
    const content = document.getElementById('day-content');

    // Inhalte für jeden Tag festlegen
    let dayContent = "";
    switch (day) {
        case 1:
            dayContent = "<h2>Tag 1: Full-Body-Workout</h2><p>Ein 10-minütiges Ganzkörper-Training!</p>";
            break;
        case 2:
            dayContent = "<h2>Tag 2: Selbstverteidigungstipp</h2><p>Tipps zur Verteidigung gegen Umklammerungen.</p>";
            break;
        case 3:
            dayContent = "<h2>Tag 3: Quiz</h2><p>Teste dein Wissen zur Selbstverteidigung!</p>";
            break;
        // Weitere Tage hier hinzufügen...
        default:
            dayContent = "<h2>Tag " + day + "</h2><p>Inhalt für diesen Tag.</p>";
    }

    content.innerHTML = dayContent;
    document.getElementById('content').style.display = 'block';
}

