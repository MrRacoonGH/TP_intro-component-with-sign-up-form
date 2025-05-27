document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche la page de se recharger

  let isValid = true;
  let errors = []; // Stocke les erreurs pour les afficher dans la console

  // Récupération des éléments
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const firstNameError = document.querySelector("label[for='first-name']");
  const lastNameError = document.querySelector("label[for='last-name']");
  const emailError = document.querySelector("label[for='email']");
  const passwordError = document.querySelector("label[for='password']");

  // Fonction pour afficher ou masquer les erreurs avec console.log()
  function checkInput(input, errorLabel, fieldName) {
      if (input.value.trim() === "") {
          errorLabel.classList.remove("hidden");
          input.style.borderColor = "#FF7979";
          errors.push(`❌ Erreur : Le champ "${fieldName}" est vide.`);
          isValid = false;
      } else {
          errorLabel.classList.add("hidden");
          input.style.borderColor = "#DEDEDE";
          console.log(`✅ "${fieldName}" rempli correctement.`);
      }
  }

  checkInput(firstName, firstNameError, "Prénom");
  checkInput(lastName, lastNameError, "Nom");
  checkInput(password, passwordError, "Mot de passe");

  // Validation de l'email
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
  if (!email.value.match(emailRegex)) {
      emailError.classList.remove("hidden");
      email.style.borderColor = "#FF7979";
      errors.push("Erreur : L'adresse email n'est pas valide.");
      isValid = false;
  } else {
      emailError.classList.add("hidden");
      email.style.borderColor = "#DEDEDE";
      console.log("Email valide.");
  }

  // Affichage du résumé dans la console
  if (isValid) {
      console.log("🎉 Tout est valide ! C'est envoyé !");
      alert(" Formulaire envoyé avec succès !");
  } else {
      console.log("⚠️ Le formulaire contient des erreurs, il ne peut pas être envoyé.");
      errors.forEach(error => console.log(error));
      alert(" Veuillez corriger les erreurs avant d'envoyer le formulaire.");
  }
});
