// Data — AI Portrait Quebec 2024 vs 2025
// Source: Données Québec (open data, CC-BY 4.0 license)
// Names harmonized according to the correspondence file

const DATA = {
  total: { y2024: 168, y2025: 258 },
  organismes: { y2024: 65, y2025: 82 },

  categories: {
    labels: ["Decision Support, Planning and/or Prediction", "Behavior/Sentiment Analysis", "Conversational Assistant/Agent", "Automation", "User Experience - Personalization", "AI-Assisted Training and Learning", "Geomatics and Geospatial Management", "Laboratory and Equipment", "Connected Electronic Systems and Ambient Intelligence", "Image Processing/Medical Imaging"],
    y2024: [62, 3, 37, 21, 4, 4, 21, 2, 3, 11],
    y2025: [81, 6, 68, 36, 7, 6, 22, 1, 4, 27]
  },

  statuts: {
    labels: ["Solution in Production", "Solution Development", "Information Unavailable"],
    y2024: [82, 81, 5],
    y2025: [132, 115, 11]
  },

  topOrganismes2025: {
    labels: ["Ministère des Ressources naturelles et des Forêts", "Ministère des Transports et de la Mobilité durable", "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal", "CHUM", "Université Laval", "École des hautes études commerciales de Montréal ", "Ministère de la Santé et des Services sociaux", "Agence du revenu du Québec", "Santé Québec", "Centre intégré universitaire de santé et de services sociaux du Saguenay-Lac-Saint-Jean"],
    values: [26, 19, 14, 12, 11, 9, 9, 8, 7, 7]
  },

  portefeuilles: {
    labels: ["Municipal Affairs and Housing", "Agriculture, Fisheries and Food", "Treasury Board and Government Administration", "Culture and Communications", "Cybersecurity and Digital", "Employment and Social Solidarity", "Higher Education", "Higher Education (Network)", "Environment, Climate Change, Wildlife and Parks", "Family", "Finance", "Justice", "Natural Resources and Forests", "Health and Social Services", "Health and Social Services (Network)", "Public Safety", "Tourism", "Transportation and Sustainable Mobility", "Labour", "Education", "Education (Network)"],
    y2024: [1, 1, 1, 8, 1, 1, 31, 0, 1, 0, 8, 2, 25, 67, 0, 2, 0, 3, 4, 12, 0],
    y2025: [1, 0, 1, 10, 2, 2, 0, 58, 1, 1, 8, 8, 26, 25, 70, 4, 1, 20, 4, 8, 8]
  },

  nouveauxOrganismes: ["Bibliothèque et Archives nationales du Québec", "Bureau du coroner", "CHU Sainte-Justine", "CHU de Québec - UL", "CHUM", "CISSS de Chaudière-Appalaches", "CISSS de Laval", "CISSS de la Montérégie-Ouest", "CISSS des Laurentides", "CISSS du Bas-Saint-Laurent", "CIUSSS de l'Est-de-l'Île-de-Montréal", "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal", "CIUSSS du Centre-Sud-de-l'Île-de-Montréal", "CIUSSS du Nord-de-l'Île-de-Montréal", "CRSSS de la Baie-James", "Centre de services scolaire de Laval  ", "Centre de services scolaire de Sorel-Tracy  ", "Centre de services scolaire de la Baie-James  ", "Centre de services scolaire des Navigateurs ", "Centre de services scolaire des Premières Seigneuries  ", "Centre intégré de santé et de services sociaux de la Gaspésie", "Centre intégré de santé et de services sociaux de la Montérégie-Centre", "Centre intégré universitaire de santé et de services sociaux du Saguenay-Lac-Saint-Jean", "Champlain Regional College ", "Collège Ahuntsic ", "Commissaire à la lutte contre la corruption", "Commission des transports du Québec", "Curateur public", "Cégep Beauce-Appalaches  ", "Cégep Saint-Jean-sur-Richelieu ", "Cégep de Chicoutimi ", "Cégep de Drummondville ", "Cégep de Rosemont ", "Cégep de Saint-Jérôme", "Cégep de Sainte-Foy", "Cégep de Sept-Îles ", "Cégep de Trois-Rivières", "Cégep de Valleyfield ", "Cégep du Vieux Montréal ", "Cégep régional de Lanaudière", "Héma-Québec ", "ICM", "IUCPQ - UL", "John Abbott College ", "Ministère de l'Emploi et de la Solidarité sociale", "Ministère de la Sécurité publique", "Ministère des Affaires municipales et de l'Habitation", "Ministère du Tourisme", "Musée de la Civilisation", "Santé Québec", "Société des établissements de plein air du Québec", "Société du Grand Théâtre de Québec", "Société québécoise d'information juridique", "Télé-université ", "Université de Montréal ", "Université du Québec ", "École de technologie supérieure", "École des hautes études commerciales de Montréal "],

  nouveauxOrgsSecteurs: {
    labels: ["Higher Education (Network)", "Health and Social Services (Network)", "Education (Network)", "Culture and Communications", "Public Safety", "Health and Social Services", "Municipal Affairs and Housing", "Employment and Social Solidarity", "Family", "Justice", "Tourism", "Transportation and Sustainable Mobility", "Education"],
    values: [20, 18, 5, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]
  }
};
