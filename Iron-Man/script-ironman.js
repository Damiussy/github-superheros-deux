const heroId = 346;
const myToken = "6570e44801f81594f8a913d3e21be5ab";
const apiUrl = `https://www.superheroapi.com/api.php/${myToken}/${heroId}`;
const container = document.getElementById("hero-info");

// --- STEP 1: THE TIMER (Exercice 1) ---
function chargerHeros() {
    return new Promise((resolve, reject) => {
        const succes = true;
        console.log("Chargement du héros en cours...");
        
        setTimeout(() => {
            if (succes) {
                resolve("Le héros est prêt !");
            } else {
                reject("Le héros est indisponible...");
            }
        }, 2000);
    });
}

async function recupEtMontrerData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);

    container.innerHTML = `
        <div class="hero-card">
            <div class="hero-profile">
                <h2>${data.name}</h2>
                <img src="${heroImageUrl}" alt="${data.name}" height="200">
            </div>
            <div class="hero-details">
                <p><strong>Nom complet :</strong> ${data.biography['full-name'] || 'Non disponible'}</p>
                <p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
                <p><strong>Lieu de naissance :</strong> ${data.biography['place-of-birth'] || 'Non disponible'}</p>
                <p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>
                <p><strong>Force :</strong> ${data.powerstats.strength}/100</p>
                <p><strong>Vitesse :</strong> ${data.powerstats.speed}/100</p>
                <p><strong>Endurance :</strong> ${data.powerstats.durability}/100</p>
                <p><strong>Puissance :</strong> ${data.powerstats.power}/100</p>
                <p><strong>Combat :</strong> ${data.powerstats.combat}/100</p>
            </div>
        </div>
    `;

    return { data, heroImageUrl };
}

async function initApp() {
    try {
        const message = await chargerHeros();
        console.log(message);

        const result = await recupEtMontrerData();    
        
        console.log("Data loaded for:", result.data.name);

    } catch (error) {
        console.error("Oups:", error);
        container.innerHTML = `<p style="color:red">${error}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', initApp);