Suite du mini-projet
A faire :
- OK : Stocker et lire les heros dans un heroes.json local
- OK : Sauvegarder les heros lus dans le local storage
- OK : Création d’un formulaire d’ajout d’un nouveau héros
- EN TRAIN : Ajouter ce nouveau heros au local storage depuis le formulaire js (avec addEventListener). Lors de la soumission, récupérer les valeurs des inputs et créer un nouvel objet héros.
- SEN TRAIN : Suppression d’un héros spécifique de votre liste et du local storage.
- Création d’une barre de chargement (UX javascript). affichage des héros s’ils sont déjà sauvegardés dans le local storage, sinon rechargement depuis le fichier heros.json
- Création d’une fonction de recherche des heros
  
A faire tout le long du projet :
- Commitez vos modifications
- Créez des branches pour chaque nouvelle petite fonctionnalité
  
A la fin :
- Déployez projet sur Github et envoyez lien à mgourlaouen1@myges.fr


# Wiki des Super-Héros

Projet Git + API pour apprendre la collaboration sur GitHub.

## Étapes du projet

### 1. Configuration

**Étudiant A** :
- Fork ce repo
- Settings → Collaborators → Ajouter Étudiant B
- Cloner : `git clone https://github.com/VOTRE-USERNAME/super-heroes-wiki.git`

**Étudiant B** :
- Accepter l'invitation GitHub
- Cloner le repo de A : `git clone https://github.com/USERNAME-DE-A/super-heroes-wiki.git`

### 2. Développement

**Chaque étudiant doit** :
# Créer une branche
git checkout -b hero-spiderman

# Modifier le script.js (utiliser l'ID d'un autre héros)
# Personnaliser l'affichage HTML
# Ajouter du CSS si vous voulez

# Commit
git add .
git commit -m "Ajout de Spider-Man"

# Push
git push origin hero-spiderman
