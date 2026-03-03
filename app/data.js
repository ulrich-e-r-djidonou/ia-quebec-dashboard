// ═══ DONNÉES ═══
// Source : Données Québec — Portrait public des utilisations de l'IA (CC-BY 4.0)

const DATA = {
  total: { y2024: 168, y2025: 258 },
  organismes: { y2024: 65, y2025: 82 },

  categories: {
    labels: [
      "Aide à la décision, planification\net/ou prédiction",
      "Assistant/agent conversationnel",
      "Automatisation",
      "Traitement d'image /\nImagerie médicale",
      "Gestion géomatique\net géospatiale",
      "Expérience utilisateur —\nPersonnalisation",
      "Analyse des comportements\n/ sentiments",
      "Formation et apprentissage\nassisté par l'IA",
      "Système électronique connecté\net intelligence ambiante",
      "Laboratoire et équipement"
    ],
    y2024: [62, 37, 21, 0, 21, 4, 3, 4, 3, 2],
    y2025: [81, 68, 36, 27, 22, 7, 6, 6, 4, 1]
  },

  statuts: {
    labels: ["Solution en production", "Développement de la solution", "Information indisponible"],
    y2024: [82, 81, 0],
    y2025: [132, 115, 11]
  },

  topOrganismes2025: {
    labels: [
      "Min. Ressources naturelles\net des Forêts",
      "Min. Transports et de la\nMobilité durable",
      "CIUSSS Centre-Ouest-\nÎle-de-Montréal",
      "CHUM",
      "Université Laval",
      "HEC Montréal",
      "Min. Santé et\nServices sociaux",
      "Agence du revenu\ndu Québec",
      "Santé Québec",
      "CIUSSS Saguenay—\nLac-Saint-Jean"
    ],
    values: [26, 19, 14, 12, 11, 9, 9, 8, 7, 7]
  },

  portefeuilles: {
    labels: [
      "Santé et Services sociaux",
      "Ressources naturelles\net Forêts",
      "Transports et Mobilité\ndurable",
      "Conseil du trésor et Admin.\ngouvernementale",
      "Éducation",
      "Enseignement supérieur",
      "Économie, Innovation\net Énergie",
      "Cybersécurité et\nNumérique",
      "Finances",
      "Culture et Communications",
      "Sécurité publique",
      "Affaires municipales\net Habitation",
      "Emploi et Solidarité\nsociale",
      "Environnement, Lutte contre\nles changements climatiques",
      "Agriculture, Pêcheries\net Alimentation",
      "Tourisme",
      "Justice",
      "Travail"
    ],
    y2024: [29, 26, 18, 14, 12, 12, 11, 10, 7, 7, 5, 4, 4, 3, 3, 0, 0, 0],
    y2025: [62, 28, 20, 17, 13, 27, 16, 13, 4, 12, 9, 6, 7, 5, 5, 4, 4, 2]
  },

  nouveauxOrganismes: [
    "Bibliothèque et Archives nationales du Québec",
    "Bureau du coroner",
    "CHU de Québec — Université Laval",
    "Centre de services scolaire de Sorel-Tracy",
    "Centre de services scolaire de la Baie-James",
    "Centre de services scolaire des Navigateurs",
    "Centre de services scolaire des Premières Seigneuries",
    "Centre hospitalier de l'Université de Montréal",
    "CHU Sainte-Justine",
    "CISSS de Chaudière-Appalaches",
    "CISSS de Laval",
    "CISSS de la Gaspésie",
    "CISSS de la Montérégie-Centre",
    "CISSS de la Montérégie-Ouest",
    "CISSS des Laurentides",
    "CISSS du Bas-Saint-Laurent",
    "CIUSSS de l'Est-de-l'Île-de-Montréal",
    "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal",
    "CIUSSS du Centre-Sud-de-l'Île-de-Montréal",
    "CIUSSS du Nord-de-l'Île-de-Montréal",
    "CIUSSS du Saguenay—Lac-Saint-Jean",
    "CRSSS de la Baie-James",
    "Collège Ahuntsic",
    "Commissaire à la lutte contre la corruption",
    "Commission des transports du Québec",
    "Curateur public",
    "Cégep Beauce-Appalaches",
    "Cégep de Drummondville",
    "Cégep de Rosemont",
    "Cégep de Saint-Jérôme",
    "Cégep de Sainte-Foy",
    "Cégep de Sept-Îles",
    "Cégep de Trois-Rivières",
    "Cégep régional de Lanaudière",
    "Institut de cardiologie de Montréal",
    "IUCPQ — Université Laval",
    "Min. de l'Emploi et de la Solidarité sociale",
    "Min. de la Sécurité publique",
    "Min. des Affaires municipales et de l'Habitation",
    "Min. du Tourisme",
    "Musée de la Civilisation",
    "Santé Québec",
    "SÉPAQ",
    "Société du Grand Théâtre de Québec",
    "SOQUIJ",
    "Université de Montréal",
    "Université du Québec",
    "Urgences-santé",
    "École de technologie supérieure",
    "HEC Montréal"
  ],

  nouveauxOrgsSecteurs: {
    labels: ["Santé", "Éducation\n(Cégeps/CSS)", "Universités", "Culture", "Justice &\nSécurité", "Autres"],
    values: [18, 12, 5, 3, 4, 8]
  }
};
