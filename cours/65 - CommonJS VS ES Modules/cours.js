/* CommonJS VS ES Modules */

/* CommonJS
Avantages :
  - Intégré à NodeJS
Inconvénients :
  - Ne fonctionne pas dans les navigateurs (sauf via un bundler comme esbuild, webpack, parcel, browserify etc.)
  - Charge les modules de façon synchrone (empêche l'exécution du reste du code)
  - Pas de mode strict activé par défaut
*/

/* ES Modules (Modules ES6)
Avantages : 
  - Standard de la norme ECMAScript (donc du JavaScript)
  - Mode strict activé par défaut
  - Fonctionne dans les navigateurs <script type="module"> (leçon suivante)
  - Charge les modules de façon asynchrone
*/

// Support dans les navigateurs ? https://caniuse.com/es6-module