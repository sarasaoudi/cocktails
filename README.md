# cocktails

# Application Cocktail Bar

Bienvenue sur l’**Application Cocktail Bar** ! Cette application web sert de plateforme interactive pour explorer et découvrir des cocktails aléatoires. À chaque actualisation, de nouvelles suggestions de cocktails sont présentées, vous permettant de plonger dans le monde de la mixologie.

## Fonctionnalités

- **Suggestions de Cocktails Aléatoires :** Obtenez un ensemble de cocktails aléatoires à chaque actualisation.
- **Tri Alphabétique :** Les cocktails sont triés par ordre alphabétique pour faciliter la navigation.
- **Suggestions Uniques :** L’application veille à ce que vous ne receviez pas le même cocktail lors de rafraîchissements consécutifs.
- **Liste des Ingrédients :** Consultez les ingrédients de chaque cocktail, ainsi qu’une image et des instructions.

## Technologie Utilisée

- **Framework Frontend :** Vue.js 3
- **Client HTTP :** Axios pour les requêtes API
- **Stylisation :** CSS personnalisé
- **Tests :** Vitest et Vue Test Utils pour les tests unitaires
- **Containerisation :** Docker pour l’emballage de l’application

## Guide d’Installation

Suivez ces étapes pour faire fonctionner l’application en local :

1. **Cloner le Répertoire :**

   ```bash
   git clone https://github.com/your-repo/cocktail-app.git
   cd cocktail-app
2. **Installer les Dépendances :**
    Assurez-vous d'avoir Node.js installé. Ensuite, exécutez :
   ```bash
   npm install
3. **Démarrer le Serveur de Développement :**
    Pour démarrer le serveur de développement local, utilisez :
   ```bash
   npm start
L’application devrait être disponible à l’adresse http://localhost:8080.

## Récupérer l'image Docker

L'image Docker pour cette application est disponible sur Docker Hub. Vous pouvez la récupérer et l'exécuter en utilisant les commandes suivantes :

1. **Tirer l'image** :

   ```bash
   docker pull jaenpay/cocktail-app:latest
2. **Exécuter l'image :** :

   ```bash
   docker run -d -p 80:80 votre_nom_utilisateur/cocktail-app:latest
## Déploiement
Cette application est actuellement déployée et disponible en ligne. Vous pouvez y accéder ici :

https://cocktails-1.onrender.com/

Le déploiement est hébergé sur Render.
