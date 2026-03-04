# Instructions données à Claude Code

## Prérequis logiciels

### Déjà installés sur la machine

| Logiciel | Rôle | Pourquoi Claude Code en a eu besoin |
|----------|------|-------------------------------------|
| **Git** | Contrôle de version | Créer le dépôt, faire les commits, pousser le code vers GitHub, travailler dans un worktree isolé |
| **Python (Anaconda)** | Traitement de données | Lire et comparer les CSV (pandas), convertir la photo en base64, modifier le HTML quand le fichier est devenu trop volumineux (~1.3 Mo) |
| **Node.js / npm** | Exécution JavaScript côté serveur | Lancer un serveur local (`npx serve`) pour prévisualiser le site pendant le développement |

### Installé par Claude Code pendant la session

| Logiciel | Commande d'installation | Pourquoi |
|----------|------------------------|----------|
| **GitHub CLI** | `winget install --id GitHub.cli` | S'authentifier à GitHub (`gh auth login`) et créer le dépôt distant (`gh repo create`) directement depuis le terminal |

### Bibliothèques via CDN (aucune installation requise)

| Librairie | Rôle |
|-----------|------|
| **Chart.js** | Générer les 10 graphiques interactifs (barres, anneaux, barres horizontales) |
| **chartjs-plugin-datalabels** | Afficher les étiquettes de valeurs sur les graphiques |
| **Google Fonts (Inter)** | Typographie moderne et professionnelle sans héberger les fichiers de police |

### Service externe (aucune installation requise)

| Service | Rôle |
|---------|------|
| **Web3Forms** | Recevoir les soumissions du formulaire de contact et les envoyer par courriel, sans exposer l'adresse email dans le code source. Fonctionne sans backend — idéal pour un site statique sur GitHub Pages |

## Instruction initiale (fichier CLAUDE.md)

```
vas sur le site : https://www.donneesquebec.ca/recherche/dataset/portrait-public-des-utilisations-de-l-ia-dans-l-administration-publique-quebecoise

Télécharge les données pertinentes pour faire une comparaison 2025 vs 2024 de l'adoption de l'IA.

Produit moi un rapport avec des graphiques. Ressors l'information pertinente.
```

## Instructions itératives (dans la conversation)

1. **"je veux ça sous forme d'application avec un lien interactif"**
   → Transformation du rapport statique en application web interactive (Chart.js)

2. **"est-ce que je peux donner le lien à n'importe qui à l'externe ?"**
   → Déploiement sur GitHub Pages

3. **"j'aimerais avoir mon nom quelque part genre Claude Code et Ulrich Djidonou"**
   → Ajout du crédit en footer

4. **"je veux comme créer une page du site pour qu'on peut m'envoyer un courriel sans qu'ils ne voient mon courriel"**
   → Intégration de Web3Forms (formulaire de contact sans exposer l'email)

5. **"je veux comme changer les couleurs des graphiques et de la page. Fais les couleurs comme moderne"**
   → Nouvelle palette indigo/teal/rose, hero gradient modernisé

6. **"as-tu des idées pour rendre encore le site intéressant" → "tout"**
   → Mode sombre, animations au scroll, carrousel d'insights, filtre de recherche, date de mise à jour

7. **"me semble que c'est pertinent de mettre ce dictionnaire"**
   → Ajout de l'onglet Méthodologie avec le dictionnaire de données officiel

## Résultat

- **Input** : 3 lignes d'instructions + itérations conversationnelles
- **Output** : Dashboard interactif déployé publiquement
- **Lien** : https://ulrich-e-r-djidonou.github.io/ia-quebec-dashboard/
- **Durée estimée** : ~1h30 (données → site déployé) + ~1h30 d'itérations
