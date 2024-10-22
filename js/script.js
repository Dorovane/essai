// Assurez-vous que le DOM est chargé avant d'exécuter le script
$(document).ready(function () {
  // Fonction pour charger les catégories de menu
  window.$dc = {
      loadMenuCategories: function () {
          // Ici, vous pouvez récupérer les catégories de menu à partir d'une API ou d'un fichier JSON
          $.ajax({
              url: 'path/to/your/menu-categories.json', // Changez cela par votre fichier JSON ou API
              method: 'GET',
              success: function (data) {
                  // Afficher les catégories de menu dans #main-content
                  $('#main-content').empty(); // Efface le contenu précédent
                  data.categories.forEach(function (category) {
                      $('#main-content').append(`
                          <div class="menu-category">
                              <h2>${category.name}</h2>
                              <ul>
                                  ${category.items.map(item => `<li>${item}</li>`).join('')}
                              </ul>
                          </div>
                      `);
                  });
              },
              error: function (error) {
                  console.error('Erreur lors du chargement des catégories de menu', error);
                  $('#main-content').html('<p>Erreur lors du chargement du menu. Veuillez réessayer plus tard.</p>');
              }
          });
      },

      // Fonction pour charger une catégorie aléatoire
      loadRandomCategory: function () {
          // Exemple de catégories aléatoires (vous pouvez changer cela par une requête API)
          const categories = [
              { name: "Entrées", items: ["Soupe Won Ton", "Rouleaux de Printemps", "Ailes de Poulet"] },
              { name: "Plats Principaux", items: ["Poulet Général Tso", "Boeuf Brocoli", "Crevettes Szechuan"] },
              { name: "Desserts", items: ["Gâteau au Litchi", "Perles de Coco", "Boulettes de Riz"] }
          ];
          const randomCategory = categories[Math.floor(Math.random() * categories.length)];
          $('#main-content').empty(); // Efface le contenu précédent
          $('#main-content').append(`
              <div class="menu-category">
                  <h2>${randomCategory.name}</h2>
                  <ul>
                      ${randomCategory.items.map(item => `<li>${item}</li>`).join('')}
                  </ul>
              </div>
          `);
      }
  };

  // Lier les événements de clic aux éléments de la navigation
  $('#navMenuButton').on('click', function () {
      $dc.loadMenuCategories();
  });

  $('#navPromotionsButton').on('click', function () {
      $dc.loadRandomCategory();
  });
});
