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

/* EXO1 – PREMIERE PROMESSE
Créez une fonction chargerHeros() qui :
    1. Attend 2 secondes,
    2. Puis renvoie “Le héros est prêt !” si tout va bien,
    3. Ou une erreur “Le héros s’est perdu...” sinon. */

function chargerHeros() {
    return  new Promise((resolve, reject) => {
        const succes = true

        // Fonction call back : fonct fléchée appelée dans la promesse (fonction dans une fonction)
        // setTimeout(callbackFunction: Function, delay: number)
        setTimeout(() => {
            if (succes) 
                resolve("Le héros est prêt !");
            else 
                reject("Le héros s’est perdu...");
        }, 1500);
    });
}

/* EXO 2 - API ET DOM
Afficher dans la console : Le prénom et le nom de l’utilisateur renvoyé par l’API. 
Puis l’afficher dans le DOM (sur votre page HTML).

// Entrée de l'utilisateur qu'on va envoyer à l'API
var nameInput = prompt("Ton prénom :")
var lastNameInput = prompt("Ton nom :")


const newHero = {
    name: nameInput,
    lastName : lastNameInput
};

// LE LIEN NE MARCHE PLUS
fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newHero) // On transforme l’objet en texte JSON !
})
    .then((res) => res.json())
    .then((data) => console.log("Héros créé :", data))
    .catch((err) => console.error("Erreur :", err));
   
console.log("test :",JSON.stringify(newHero));
*/