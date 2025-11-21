const heroId = 70;
const myToken = "6570e44801f81594f8a913d3e21be5ab"; 
const apiUrl = `https://superheroapi.com/api.php/${myToken}/${heroId}`;

const container = document.getElementById("hero-info");

// https://superheroapi.com/api.php/6570e44801f81594f8a913d3e21be5ab/70
fetch(apiUrl)
    .then( ( reponse ) => reponse.json () )
    .then ( ( data ) => {
        const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);

        container.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${heroImageUrl}" alt="${data.name}" height="200">
        <p><strong>Nom complet :</strong> ${data.biography['full-name']}</p>
        <p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
        <p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>

        <p><strong>Rapidité :</strong> ${data.powerstats.speed}/100</p> 

        <p><strong>Lieu de naissance :</strong> ${data.biography['place-of-birth']}</p> 

        <p><strong>Taille :</strong> ${data.appearance.height[1]}</p> `;
    })
    .catch( ( error ) => console.log("Erreur : ", error));

// ========================================================
// EXO1 – PREMIERE PROMESSE
// ========================================================
// Créez une fonction chargerHeros() qui :
// 1. Attend 2 secondes,
// 2. Puis renvoie “Le héros est prêt !” si tout va bien,
// 3. Ou une erreur “Le héros s’est perdu...” sinon.
// ========================================================

// Fonction qui renvoie une promesse qui annonce si l'opération a réussi ou échoué
function chargerHeros() {
    return  new Promise((resolve, reject) => {
        const succes = true // On met le variable de test sur true

        // Fonction call back : fonction fléchée exécutée apres le délai du setTimeout

        setTimeout(() => {                          // setTimeout(callbackFunction: Function, delay: number) >> delai de 2 secondes
            if (succes) 
                resolve("Le héros est prêt !");    // Cette ligne est executée en cas réussite (resolve)
            else 
                reject("Le héros s’est perdu..."); // Cette ligne est executée en cas d'erreur (reject)
        }, 2000);
    });
}

// ================================================================================
// EXO 2 - API ET DOM
// ================================================================================
// 1. Afficher dans la console : prénom et nom de l’utilisateur renvoyé par l’API.
// 2. Puis l’afficher dans le DOM (sur votre page HTML).
// ================================================================================

// Saisie de l'utilisateur (a pour but d'etre envoyée à l'API)
var nameInput = prompt("Ton prénom :")
var lastNameInput = prompt("Ton nom :")

// Création de l'objet newHero qui contient le nom et prénom rentré par l'utilisateur
const newHero = {
    name: nameInput,
    lastName : lastNameInput
};

// Envoi de la requete POST avec l'objet newHero
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-api-key": "reqres-free-v1" },
  body: JSON.stringify(newHero) // On transforme l’objet en texte JSON
})
  .then((res) => res.json())
  .then((data) => {
    // Affiche dans la console de l'objet 
    console.log("Héros créé :", data);

        // Préparation de l'affichage des données dans la page batman.html
        const container = document.getElementById('new-hero-info');
        container.innerHTML = `
            <h2> Votre héro : </h2>
            <p>     <strong>    Prénom :     </strong>    ${data.name}      </p>
            <p>     <strong>    Nom :        </strong>    ${data.lastName}  </p>
        `; // Ligne de débug pour afficher dans la page les données présentes dans l'objet retourné par l'API : <p> ${JSON.stringify(data)}</p>
    })
  .catch((err) => console.error("Erreur :", err)); 