// 1. heros.json -> liste de hero [{   "hey":"value" ;     },]
// 2. TO DO loadHeros
// 3. TO DO appel de loadHeros
// 4. TO DO verifier qu'on retrouve les géros dans APPLICATION > Storage > LocalStorage
// 5. TO DO puis on les affiches avec displayHeros()
// 6. TO DO localStorage.getItem("heroes ");

// Charger les héros
async function loadHeroes() {
    // On vérifie d'abord le LocalStorage
    const savedHeroes = localStorage.getItem('heroes'); 

    if (savedHeroes) {
        console.log("Chargement depuis le LocalStorage...");
        displayHeroes(JSON.parse(savedHeroes));
    } else {
        console.log("Chargement depuis le fichier JSON...");
        try {
            // Si vide, on fetch le fichier local
            const response = await fetch('heroes.json');
            const heroes = await response.json();
            
            // On sauvegarde pour la prochaine fois
            localStorage.setItem('heroes', JSON.stringify(heroes)); 
            
            displayHeroes(heroes);
        } catch (error) {
            console.error("Erreur de chargement:", error);
        }
    }
}

//  Fonction pour créer le HTML
function displayHeroes(heroes) {
    const container = document.getElementById('heroesList');
    container.innerHTML = ''; // On vide la liste avant d'ajouter

    heroes.forEach(hero => {
        const div = document.createElement('div');
        div.className = 'hero-card';

        div.innerHTML = `
            <h3>${hero.name}</h3>
            <p><strong>Nom:</strong> ${hero.biography ? hero.biography['full-name'] : 'Inconnu'}</p>
            <p><strong>Vitesse:</strong> ${hero.stats ? hero.stats.speed : '?'}</p>
            <p><strong>Force:</strong> ${hero.stats ? hero.stats.strength : '?'}</p>
        `;
        
        container.appendChild(div);
    });
}

// Lancer l'application
document.addEventListener('DOMContentLoaded', loadHeroes);