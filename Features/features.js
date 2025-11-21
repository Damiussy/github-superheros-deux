// ====================================================
// FEATURE STORAGE-HEROES-AND-SAVE-IN-LOCAL-STORAGE
// ====================================================
// 1. Stocker
// 2. Lire
// 3. les heros dans un heroes.json local 
// 4. Sauvegarder les heros lus dans le local storage
// ====================================================

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

// ================================================================================
// FEATURE FORM-MANAGE-HERO
// ================================================================================
// 1. Création d’un formulaire d’ajout d’un nouveau héros
// 2. Ajouter ce nouveau heros au local storage depuis form js (addEventListener). 
// Lors de la soumission, récup les valeurs des inputs et créer new objet héros.
// ================================================================================

// EN TRAIN

// ==========================================================================
// FEATURE DELETE-HERO-IN-LOCAL-STORAGE
// ==========================================================================
// 1. Suppression d’un héros spécifique de votre liste et du local storage.
// ==========================================================================

// Fonction permettant la suppression d’un héros spécifique
function deleteHero(heroNameToDelete) {
    // On récupère les objets stockés
    const heroes = JSON.parse(localStorage.getItem('heroes')) || [];

    // FIX 1: On a enlevé les accolades { } pour que le filtre marche direct !
    const updatedHeroes = heroes.filter(hero => hero.name !== heroNameToDelete);
    
    // Sauvegarde du nouveau localstorage
    localStorage.setItem('heroes', JSON.stringify(updatedHeroes));

    // On met à jour l'affichage
    displayHeroes(updatedHeroes);

    // Confirmation pour le debuggage
    console.log("Héros supprimé : ", heroNameToDelete);
}

// Fonction pour demander le nom
function deleteHeroFromLocalStorage() {
    const heroNameToDelete = prompt("Quel héros voulez-vous supprimer ? (Sensible à la casse)");
    
    if (heroNameToDelete) {
        deleteHero(heroNameToDelete);
    }
}










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