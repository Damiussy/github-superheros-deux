// ========================================
// FEATURE STORAGE-HEROES
// ========================================
// 1. Stocker
// 2. Lire
// 3. les heros dans un heroes.json local 
// ========================================

// 1. heros.json -> liste de hero [{   "hey":"value" ;     },]
// 2. loadHeros
// 3. appel de loadHeros
// 4. verifier qu'on retrouve les géros dans APPLICATION > Storage > LocalStorage
// 5. puis on les affiches avec displayHeros()
// 6. localStorage.getItem("heroes ");

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

// ========================================
// FEATURE
// ========================================
// 1. Afficher dans une page html
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Sauvegarder les heros lus dans le local storage
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Création d’un formulaire d’ajout d’un nouveau héros
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Ajouter ce nouveau heros au local storage depuis le formulaire js (avec
// addEventListener). Lors de la soumission, récupérer les valeurs des inputs et
// créer un nouvel objet héros.
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Suppression d’un héros spécifique de votre liste et du local storage.
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Création d’une barre de chargement (UX javascript). affichage des héros s’ils sont
// déjà sauvegardés dans le local storage, sinon rechargement depuis le fichier
// heros.json
// ========================================

// TO DO

// ========================================
// FEATURE 
// ========================================
// 1. Création d’une fonction de recherche des heros
// ========================================