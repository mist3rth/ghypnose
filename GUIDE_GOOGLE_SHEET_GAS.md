# Guide de Configuration : Lier le Formulaire à Google Sheets

Ce guide vous explique comment configurer votre Google Sheet et créer le script Google Apps Script (GAS) pour recevoir les demandes de contact de votre site web.

## Étape 1 : Préparer le fichier Google Sheets

1. Ouvrez Google Sheets (https://sheets.google.com) et créez un nouveau fichier.
2. Nommez le fichier comme vous le souhaitez (ex: "Demandes Contact GHypnose").
3. Renommez le premier onglet en **"Sheet1"** (c'est le nom par défaut, mais vérifiez qu'il s'appelle bien ainsi, sans espace).
4. Sur la première ligne, ajoutez exactement les en-têtes suivants dans cet ordre (de A à H) :
   - Colonne A : `Date`
   - Colonne B : `Motif`
   - Colonne C : `Text`
   - Colonne D : `Civilité`
   - Colonne E : `Nom`
   - Colonne F : `Prénom`
   - Colonne G : `Email`
   - Colonne H : `Téléphone`

*(Astuce : Vous pouvez mettre cette première ligne en gras et figer la ligne via le menu "Affichage" > "Figer" > "1 ligne").*

## Étape 2 : Créer le script (Google Apps Script)

1. Depuis votre fichier Google Sheets, cliquez sur le menu **"Extensions"** > **"Apps Script"**.
2. Un nouvel onglet s'ouvre. Effacez tout le code présent et remplacez-le par le code suivant :

```javascript
var SHEET_NAME = "Sheet1"; // Nom de l'onglet où les données seront enregistrées

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Si l'onglet n'est pas trouvé
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ "result": "error", "error": "Onglet introuvable" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Récupération des données envoyées par le formulaire
    // Les clés doivent correspondre aux noms utilisés dans formDataToSubmit.append() côté code
    var date = e.parameter["Date"] || new Date().toLocaleString("fr-FR");
    var motif = e.parameter["Motif"] || "";
    var text = e.parameter["Text"] || "";
    var civilite = e.parameter["Civilité"] || "";
    var nom = e.parameter["Nom"] || "";
    var prenom = e.parameter["Prénom"] || "";
    var email = e.parameter["Email"] || "";
    var telephone = e.parameter["Téléphone"] || "";

    // Ajout d'une nouvelle ligne dans la feuille
    sheet.appendRow([
      date,
      motif,
      text,
      civilite,
      nom,
      prenom,
      email,
      telephone
    ]);

    // Retour d'une réponse de succès
    return ContentService.createTextOutput(
      JSON.stringify({ "result": "success" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // En cas d'erreur
    return ContentService.createTextOutput(
      JSON.stringify({ "result": "error", "error": error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Cliquez sur l'icône "Enregistrer" (la petite disquette en haut).

## Étape 3 : Déployer le script (Créer l'URL)

1. En haut à droite, cliquez sur le bouton bleu **"Déployer"** > **"Nouveau déploiement"**.
2. À côté de "Sélectionner le type", cliquez sur l'engrenage et choisissez **"Application Web"**.
3. Remplissez les paramètres ainsi :
   - **Description :** *Connexion Formulaire Contact* (ou ce que vous voulez)
   - **Exécuter en tant que :** *Moi (votre.email@gmail.com)*
   - **Qui a accès :** **Tout le monde** *(C'est très important pour que le site web puisse envoyer les données)*
4. Cliquez sur le bouton **"Déployer"**.
5. *Autorisation requise* : Google va vous demander d'autoriser le script. 
   - Cliquez sur "Autoriser l'accès".
   - Choisissez votre compte Google.
   - Google affichera un message d'alerte disant que l'application n'est pas validée. Cliquez sur **"Paramètres avancés"** en bas, puis sur **"Aller à Projet sans titre (non sécurisé)"**.
   - Cliquez sur **"Autoriser"**.
6. Une fenêtre "Déploiement mis à jour" s'affiche avec une URL sous **"URL de l'application Web"**. 
7. **Copiez cette URL**. Elle commence par `https://script.google.com/macros/s/.../exec`.

## Étape 4 : Relier l'URL au site web (Hébergement OVH)

Puisque le site sera hébergé sur OVH, la variable d'environnement doit être intégrée au moment de la création de la version finale du site (le "build").

1. Ouvrez le code source de votre site (le dossier du projet sur votre ordinateur).
2. À la racine du projet, créez ou ouvrez un fichier nommé `.env` (ou `.env.production`).
3. Ajoutez-y la ligne suivante :
   ```
   VITE_GAS_WEBAPP_URL=Collez_ici_l_URL_copiée_a_l_etape_3
   ```
   *(Assurez-vous qu'il n'y a pas d'espace autour du `=`).*
4. Sauvegardez le fichier.
5. Générez la version finale du site en exécutant la commande de build (généralement `npm run build`).
6. Transférez le contenu du dossier généré (`dist/` ou `build/`) sur votre hébergement OVH (via FTP, FileZilla, ou l'interface OVH).

**C'est fait !** Votre formulaire est maintenant relié à votre Google Sheet. Chaque fois qu'un utilisateur soumettra une demande sur le site, une nouvelle ligne apparaîtra dans votre fichier.
