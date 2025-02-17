document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le groupe de planètes
    const planetsGroup = document.getElementById('planets-group');
    
    // Position Z initiale
    let currentZ = 700; // Votre position initiale

    // Sélectionner toutes les planètes
    const planets = document.querySelectorAll('.celestial-body');
    
    // Définir les positions Z pour chaque planète
    const planetPositions = {
        'mercure': 0,
        'venus': -4000,
        'terre': -8000,
        'mars': -12000,
        'jupiter': -16000,
        'saturne': -20000,
        'uranus': -24000,
        'neptune': -28000,
        'pluton': -32000
    };

    // Ajouter les événements de clic
    planets.forEach(function(planet) {
        planet.addEventListener('click', function() {
            // Récupérer la position Z cible depuis notre objet
            const targetZ = -planetPositions[planet.id];
            
            // Animer le déplacement
            planetsGroup.style.transition = 'transform 1s ease-in-out';
            planetsGroup.style.transform = `translateZ(${targetZ + 700 }px)`;
            
            // Mettre à jour la position courante
            currentZ = targetZ;
        });
    });
});

