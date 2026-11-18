# L’IA dans l’administration publique québécoise

Le tableau de bord bilingue présente les initiatives déclarées de 2024 à 2026. Ouvrir `index.html` pour le français ou `en/index.html` pour l’anglais. Les graphiques utilisent Chart.js et son module d’étiquettes chargés par CDN. Les tableaux de la vue d’ensemble figurent dans le HTML.

## Mise à jour du 18 novembre 2026

Le [portrait ministériel](https://www.quebec.ca/gouvernement/numerique/intelligence-artificielle-administration-publique/portrait) donne 168, 258 et 432 initiatives et 65, 83 et 157 organismes pour 2024, 2025 et 2026. La date de référence est le 15 juin 2026. Les indicateurs de services aux citoyens proviennent de cette même synthèse.

Le [CSV officiel de 2026](https://www.donneesquebec.ca/recherche/dataset/1c9131d2-ab2a-4513-9a46-945b2bc96e1b/resource/302dc7b6-f1c5-48bb-b05b-7b45ed964b2d/download/portrait_public_utilisations_ia_gouvernement_quebec_2026.csv) contient 432 lignes et autant de numéros distincts. Pour reproduire les répartitions dans PowerShell après téléchargement, utiliser `$d = Import-Csv portrait.csv`, puis `$d | Group-Object Categorie`. Remplacer `Categorie` par `Statut`, `Portefeuille` ou `Organismes_publics` selon le tableau. Normaliser les espaces avant regroupement. Empreinte SHA-256 du fichier utilisé : `ac8f0567ff185f38b9158357d1bd8e86534843f7b273dfda4cbca663d0039eb5`.

Le fichier compte 311 initiatives en production ou en exploitation et 121 en développement. Pour les autres usages et la traduction, le CSV donne 32 et 24, contre 31 et 25 dans la synthèse. Le tableau de bord reprend le CSV. Le classement des usages de 2026 est présenté séparément de celui de 2024 et 2025. Les variations des totaux mesurent l’évolution des déclarations et ne permettent pas de dénombrer les nouveaux entrants.

[Site français](https://ulrich-e-r-djidonou.github.io/ia-quebec-dashboard/) · [English site](https://ulrich-e-r-djidonou.github.io/ia-quebec-dashboard/en/). Données Québec, CC BY 4.0. Ulrich Djidonou.
