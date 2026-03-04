// Données — Portrait IA Québec 2024 vs 2025
// Source : Données Québec (données ouvertes, licence CC-BY 4.0)
// Noms harmonisés selon le fichier de correspondance

const DATA = {
  totals: {"projets2024": 168, "projets2025": 258, "orgs2024": 65, "orgs2025": 82, "croissanceProjets": 53.6, "croissanceOrgs": 26.2, "nouveauxOrgs": 58},

  categories: [
  {
    "nom": "Aide à la décision, planification et/ou prédiction",
    "projets2024": 62,
    "projets2025": 81
  },
  {
    "nom": "Analyse des comportements/sentiments",
    "projets2024": 3,
    "projets2025": 6
  },
  {
    "nom": "Assistant/agent conversationnel",
    "projets2024": 37,
    "projets2025": 68
  },
  {
    "nom": "Automatisation",
    "projets2024": 21,
    "projets2025": 36
  },
  {
    "nom": "Expérience utilisateur - Personnalisation",
    "projets2024": 4,
    "projets2025": 7
  },
  {
    "nom": "Formation et apprentissage assisté par l'IA",
    "projets2024": 4,
    "projets2025": 6
  },
  {
    "nom": "Gestion géomatique et géospatiale",
    "projets2024": 21,
    "projets2025": 22
  },
  {
    "nom": "Laboratoire et équipement",
    "projets2024": 2,
    "projets2025": 1
  },
  {
    "nom": "Système électronique connecté et intelligence ambiante",
    "projets2024": 3,
    "projets2025": 4
  },
  {
    "nom": "Traitement d'image/Imagerie médicale",
    "projets2024": 11,
    "projets2025": 27
  }
],

  statuts: [
  {
    "nom": "Développement de la solution",
    "projets2024": 81,
    "projets2025": 115
  },
  {
    "nom": "Information indisponible",
    "projets2024": 5,
    "projets2025": 11
  },
  {
    "nom": "Solution en production",
    "projets2024": 82,
    "projets2025": 132
  }
],

  topOrganismes2025: [
  {
    "nom": "Ministère des Ressources naturelles et des Forêts",
    "projets2024": 25,
    "projets2025": 26
  },
  {
    "nom": "Ministère des Transports et de la Mobilité durable",
    "projets2024": 2,
    "projets2025": 19
  },
  {
    "nom": "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal",
    "projets2024": 0,
    "projets2025": 14
  },
  {
    "nom": "CHUM",
    "projets2024": 0,
    "projets2025": 12
  },
  {
    "nom": "Université Laval",
    "projets2024": 8,
    "projets2025": 11
  },
  {
    "nom": "École des hautes études commerciales de Montréal ",
    "projets2024": 0,
    "projets2025": 9
  },
  {
    "nom": "Ministère de la Santé et des Services sociaux",
    "projets2024": 7,
    "projets2025": 9
  },
  {
    "nom": "Agence du revenu du Québec",
    "projets2024": 5,
    "projets2025": 8
  },
  {
    "nom": "Santé Québec",
    "projets2024": 0,
    "projets2025": 7
  },
  {
    "nom": "Centre intégré universitaire de santé et de services sociaux du Saguenay-Lac-Saint-Jean",
    "projets2024": 0,
    "projets2025": 7
  }
],

  portefeuilles: [
  {
    "nom": "Affaires municipales et Habitation",
    "projets2024": 1,
    "projets2025": 1
  },
  {
    "nom": "Agriculture, Pêcheries et Alimentation",
    "projets2024": 1,
    "projets2025": 0
  },
  {
    "nom": "Conseil du trésor et Administration gouvernementale",
    "projets2024": 1,
    "projets2025": 1
  },
  {
    "nom": "Culture et Communications",
    "projets2024": 8,
    "projets2025": 10
  },
  {
    "nom": "Cybersécurité et Numérique",
    "projets2024": 1,
    "projets2025": 2
  },
  {
    "nom": "Emploi et Solidarité sociale",
    "projets2024": 1,
    "projets2025": 2
  },
  {
    "nom": "Enseignement supérieur",
    "projets2024": 31,
    "projets2025": 0
  },
  {
    "nom": "Enseignement supérieur (Réseau)",
    "projets2024": 0,
    "projets2025": 58
  },
  {
    "nom": "Environnement, Lutte contre les changements climatiques, Faune et Parcs",
    "projets2024": 1,
    "projets2025": 1
  },
  {
    "nom": "Famille",
    "projets2024": 0,
    "projets2025": 1
  },
  {
    "nom": "Finances",
    "projets2024": 8,
    "projets2025": 8
  },
  {
    "nom": "Justice",
    "projets2024": 2,
    "projets2025": 8
  },
  {
    "nom": "Ressources naturelles et Forêts",
    "projets2024": 25,
    "projets2025": 26
  },
  {
    "nom": "Santé et Services sociaux",
    "projets2024": 67,
    "projets2025": 25
  },
  {
    "nom": "Santé et Services sociaux (Réseau)",
    "projets2024": 0,
    "projets2025": 70
  },
  {
    "nom": "Sécurité publique",
    "projets2024": 2,
    "projets2025": 4
  },
  {
    "nom": "Tourisme",
    "projets2024": 0,
    "projets2025": 1
  },
  {
    "nom": "Transports et Mobilité durable",
    "projets2024": 3,
    "projets2025": 20
  },
  {
    "nom": "Travail",
    "projets2024": 4,
    "projets2025": 4
  },
  {
    "nom": "Éducation",
    "projets2024": 12,
    "projets2025": 8
  },
  {
    "nom": "Éducation (Réseau)",
    "projets2024": 0,
    "projets2025": 8
  }
],

  nouveauxOrganismes: [
  {
    "nom": "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal",
    "projets": 14
  },
  {
    "nom": "CHUM",
    "projets": 12
  },
  {
    "nom": "École des hautes études commerciales de Montréal ",
    "projets": 9
  },
  {
    "nom": "Centre intégré universitaire de santé et de services sociaux du Saguenay-Lac-Saint-Jean",
    "projets": 7
  },
  {
    "nom": "Santé Québec",
    "projets": 7
  },
  {
    "nom": "CHU Sainte-Justine",
    "projets": 5
  },
  {
    "nom": "Société québécoise d'information juridique",
    "projets": 4
  },
  {
    "nom": "CISSS de Chaudière-Appalaches",
    "projets": 4
  },
  {
    "nom": "CISSS de la Montérégie-Ouest",
    "projets": 4
  },
  {
    "nom": "CISSS des Laurentides",
    "projets": 4
  },
  {
    "nom": "Héma-Québec ",
    "projets": 4
  },
  {
    "nom": "Société des établissements de plein air du Québec",
    "projets": 3
  },
  {
    "nom": "ICM",
    "projets": 3
  },
  {
    "nom": "Bibliothèque et Archives nationales du Québec",
    "projets": 3
  },
  {
    "nom": "Centre de services scolaire de Laval  ",
    "projets": 2
  },
  {
    "nom": "Cégep de Rosemont ",
    "projets": 2
  },
  {
    "nom": "Cégep de Chicoutimi ",
    "projets": 2
  },
  {
    "nom": "Cégep de Saint-Jérôme",
    "projets": 2
  },
  {
    "nom": "Cégep de Sainte-Foy",
    "projets": 2
  },
  {
    "nom": "CIUSSS du Centre-Sud-de-l'Île-de-Montréal",
    "projets": 2
  },
  {
    "nom": "Cégep de Sept-Îles ",
    "projets": 2
  },
  {
    "nom": "CISSS du Bas-Saint-Laurent",
    "projets": 2
  },
  {
    "nom": "CISSS de Laval",
    "projets": 2
  },
  {
    "nom": "Ministère de l'Emploi et de la Solidarité sociale",
    "projets": 2
  },
  {
    "nom": "CIUSSS du Nord-de-l'Île-de-Montréal",
    "projets": 2
  },
  {
    "nom": "Centre intégré de santé et de services sociaux de la Montérégie-Centre",
    "projets": 2
  },
  {
    "nom": "CHU de Québec - UL",
    "projets": 2
  },
  {
    "nom": "Télé-université ",
    "projets": 2
  },
  {
    "nom": "Université du Québec ",
    "projets": 2
  },
  {
    "nom": "IUCPQ - UL",
    "projets": 2
  },
  {
    "nom": "John Abbott College ",
    "projets": 1
  },
  {
    "nom": "CRSSS de la Baie-James",
    "projets": 1
  },
  {
    "nom": "Ministère du Tourisme",
    "projets": 1
  },
  {
    "nom": "Ministère de la Sécurité publique",
    "projets": 1
  },
  {
    "nom": "Ministère des Affaires municipales et de l'Habitation",
    "projets": 1
  },
  {
    "nom": "Musée de la Civilisation",
    "projets": 1
  },
  {
    "nom": "Société du Grand Théâtre de Québec",
    "projets": 1
  },
  {
    "nom": "Université de Montréal ",
    "projets": 1
  },
  {
    "nom": "École de technologie supérieure",
    "projets": 1
  },
  {
    "nom": "CIUSSS de l'Est-de-l'Île-de-Montréal",
    "projets": 1
  },
  {
    "nom": "Cégep de Trois-Rivières",
    "projets": 1
  },
  {
    "nom": "Cégep régional de Lanaudière",
    "projets": 1
  },
  {
    "nom": "Collège Ahuntsic ",
    "projets": 1
  },
  {
    "nom": "Centre de services scolaire de Sorel-Tracy  ",
    "projets": 1
  },
  {
    "nom": "Centre de services scolaire de la Baie-James  ",
    "projets": 1
  },
  {
    "nom": "Centre de services scolaire des Navigateurs ",
    "projets": 1
  },
  {
    "nom": "Centre de services scolaire des Premières Seigneuries  ",
    "projets": 1
  },
  {
    "nom": "Centre intégré de santé et de services sociaux de la Gaspésie",
    "projets": 1
  },
  {
    "nom": "Champlain Regional College ",
    "projets": 1
  },
  {
    "nom": "Commissaire à la lutte contre la corruption",
    "projets": 1
  },
  {
    "nom": "Cégep du Vieux Montréal ",
    "projets": 1
  },
  {
    "nom": "Commission des transports du Québec",
    "projets": 1
  },
  {
    "nom": "Curateur public",
    "projets": 1
  },
  {
    "nom": "Cégep Beauce-Appalaches  ",
    "projets": 1
  },
  {
    "nom": "Bureau du coroner",
    "projets": 1
  },
  {
    "nom": "Cégep de Drummondville ",
    "projets": 1
  },
  {
    "nom": "Cégep de Valleyfield ",
    "projets": 1
  },
  {
    "nom": "Cégep Saint-Jean-sur-Richelieu ",
    "projets": 1
  }
],

  nouveauxOrgsSecteurs: [
  {
    "nom": "Enseignement supérieur (Réseau)",
    "count": 20
  },
  {
    "nom": "Santé et Services sociaux (Réseau)",
    "count": 18
  },
  {
    "nom": "Éducation (Réseau)",
    "count": 5
  },
  {
    "nom": "Culture et Communications",
    "count": 3
  },
  {
    "nom": "Sécurité publique",
    "count": 3
  },
  {
    "nom": "Santé et Services sociaux",
    "count": 2
  },
  {
    "nom": "Affaires municipales et Habitation",
    "count": 1
  },
  {
    "nom": "Emploi et Solidarité sociale",
    "count": 1
  },
  {
    "nom": "Famille",
    "count": 1
  },
  {
    "nom": "Justice",
    "count": 1
  },
  {
    "nom": "Tourisme",
    "count": 1
  },
  {
    "nom": "Transports et Mobilité durable",
    "count": 1
  },
  {
    "nom": "Éducation",
    "count": 1
  }
]
};
