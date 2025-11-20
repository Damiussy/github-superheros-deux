const heroId = 346;
const myToken = "6570e44801f81594f8a913d3e21be5ab";
const apiUrl = `https://www.superheroapi.com/api.php/${myToken}/${heroId}`;

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
};

const container = document.getElementById("hero-info");
async function recupEtMontrerData() {
    fetch(apiUrl)
    .then( ( reponse ) => reponse.json () )
    .then ( ( data ) => {
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
    })
    .catch( ( error ) => console.log("Erreur : ", error));
};

async function initApp() {
    try {
        const message = await chargerHeros();
        console.log(message);

        const { data, heroImageUrl } = await recupEtMontrerData();
        recupEtMontrerData(data, heroImageUrl);

    } catch (error) {
        console.error("Oups:", error);
        document.getElementById('hero-info').innerHTML = `<p style="color:red">${error}</p>`;
    }
};

// Start the show
document.addEventListener('DOMContentLoaded', initApp);