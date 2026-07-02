# Intégration Google Sheets (Backend)

Ce document contient le code nécessaire pour connecter votre formulaire de contact à un Google Sheet.

## 1. Code Google Apps Script

Copiez ce code dans l'éditeur de script de votre Google Sheet :

```javascript
/**
 * Google Apps Script pour collecter les données du formulaire
 * Déployer en tant qu'Application Web (Accès : Tout le monde)
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Ajout de la ligne [Timestamp, Nom, Prénom, Email, Téléphone, Objet, Message]
    sheet.appendRow([
      new Date(),
      data.lastname,
      data.firstname,
      data.email,
      data.phone,
      data.subject,
      data.message,
    ]);

    // Envoi de l'email de notification
    const emailTo = "gregfitoussi@gmail.com";
    const emailSubject = "Nouveau contact G Hypnose : " + data.subject;
    const emailBody =
      "Vous avez reçu une nouvelle demande de contact depuis le site G Hypnose.\n\n" +
      "Détails :\n" +
      "👤 Nom : " +
      data.lastname +
      " " +
      data.firstname +
      "\n" +
      "✉️ Email : " +
      data.email +
      "\n" +
      "📞 Téléphone : " +
      (data.phone || "Non renseigné") +
      "\n" +
      "🎯 Motif : " +
      data.subject +
      "\n\n" +
      "📝 Message :\n" +
      data.message;

    // Utilisation de MailApp pour envoyer le mail
    MailApp.sendEmail({
      to: emailTo,
      subject: emailSubject,
      body: emailBody,
      replyTo: data.email, // Permet de faire "Répondre" directement à l'adresse du client
    });

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Instructions de Déploiement

1. Créez un nouveau **Google Sheet**.
2. Allez dans **Extensions** > **Apps Script**.
3. Supprimez tout le code existant et collez le code ci-dessus.
4. Cliquez sur **Déployer** > **Nouveau déploiement**.
5. Type : **Application Web**.
6. Exécuter en tant que : **Moi**.
7. Qui a accès : **Tout le monde** (Important pour que le site puisse envoyer des données).
8. **Lors de l'autorisation d'accès, Google vous demandera la permission d'envoyer des e-mails en votre nom, cliquez sur "Autoriser".**
9. Copiez l'**URL de l'application web** fournie.
10. Collez cette URL dans votre fichier `js/script.js` à la place de la variable `SCRIPT_URL`.

> [!IMPORTANT]
> Assurez-vous d'autoriser les permissions lors du premier déploiement.
