// script.js - INPT Silver Screen Custom Interactions

document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Initialisation des Tooltips (Infobulles) Bootstrap
  // Cela permet d'afficher des petits messages flottants quand on passe la souris sur un élément
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


  // 2. Gestion du Formulaire avec une Alerte Bootstrap dynamique
  const contactForm = document.querySelector("form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      // Empêche le rechargement de la page
      event.preventDefault(); 
      
      // Récupère le nom saisi
      const nameInput = document.getElementById("inputName").value;
      const userName = nameInput.trim() !== "" ? nameInput : "Cinephile";

      // Supprime l'ancienne alerte si elle existe
      const oldAlert = document.querySelector('.custom-alert');
      if (oldAlert) {
        oldAlert.remove();
      }

      // Crée l'Alerte Bootstrap
      const alertHTML = `
        <div class="alert alert-success alert-dismissible fade show custom-alert mt-4" role="alert" style="background-color: #198754; color: white; border: none;">
          <strong>🎬 Cut! That's a wrap, ${userName}.</strong> Your application has been successfully submitted to the INPT Silver Screen crew.
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;

      // Insère l'alerte au-dessus du formulaire
      contactForm.insertAdjacentHTML('beforebegin', alertHTML);
      contactForm.reset();

      // Fait disparaître l'alerte automatiquement après 5 secondes
      setTimeout(() => {
        const alertNode = document.querySelector('.custom-alert');
        if(alertNode) {
          const bsAlert = new bootstrap.Alert(alertNode);
          bsAlert.close();
        }
      }, 5000);
    });
  }
});