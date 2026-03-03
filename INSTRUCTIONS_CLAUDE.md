# Instructions données à Claude Code

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


4. **"j'aimerais avoir mon nom quelque part genre Claude Code et Ulrich Djidonou"**
   → Ajout du crédit en footer

5. **"je veux comme créer une page du site pour qu'on peut m'envoyer un courriel sans qu'ils ne voient mon courriel"**
   → Intégration de Web3Forms (formulaire de contact sans exposer l'email)

6. **"est-ce que mon headline peut être inséré dans la page web ?"**
   → Ajout du headline LinkedIn dans la carte auteur

8. **"mets ma page linkedin sur la page web"**
   → Ajout du lien LinkedIn avec icône sur la page Contact

9. **"je veux comme changer les couleurs des graphiques et de la page. Fais les couleurs comme moderne"**
   → Nouvelle palette indigo/teal/rose, hero gradient modernisé

10. **"as-tu des idées pour rendre encore le site intéressant" → "tout"**
    → Mode sombre, animations au scroll, carrousel d'insights, filtre de recherche, date de mise à jour

11. **"me semble que c'est pertinent de mettre ce dictionnaire"**
    → Ajout de l'onglet Méthodologie avec le dictionnaire de données officiel

## Résultat

- **Input** : 3 lignes d'instructions + itérations conversationnelles
- **Output** : Dashboard interactif déployé publiquement
- **Lien** : https://ulrich-e-r-djidonou.github.io/ia-quebec-dashboard/
- **Durée estimée** : ~1h30 (données → site déployé) + ~1h30 d'itérations
