# Gestionnaire de produits en ligne

## Description
Ce projet Nest.js comporte 2 Modules, 2 Services et 1 Middleware :
<ul>
    <li>
        <u>Module Statique</u> : User
        <ul>
            <li>
                Stocke les données des utilisateurs <i>(nom, prenom, email, password)</i>
            </li>
        </ul>
    </li>
    <li>
        <u>Module Dynamique</u> : Produit
        <ul>
            <li>
                Permet de lire, créer, modifier et supprimer des produits
            </li>
            <li >
                Stocke les données des produits <i>(nom, description, prix)</i>
            </li>
        </ul>
    </li>
    <li>
        <u>Services</u> : 
        <ul>
            <li>
                <code>UserService</code>: gère la logique métier liée aux utilisateurs <i>(autorisations)</i>
            </li>
            <li>
                <code>ProduitService</code>: gère la logique métier liée aux produits <i>(création, modification, suppression)</i>
            </li>
        </ul>
    </li>
    <li>
        <u>Middleware</u> : 
        <ul>
            <li>
                Logger de requête qui détaille d'où elle vient, par qui elle a été faite.
            </li>
        </ul>
    </li>
</ul>

## Documentations
<ul>
    <li>
        <a href="https://developer.mozilla.org/fr/">JavaScript</a>
    </li>
    <li>
        <a href="https://www.typescriptlang.org/fr/docs/">TypeScript</a>
    </li>
    <li>
        <a href="https://docs.nestjs.com/">Nest.js</a>
    </li>
</ul>

## Get started
### Prérequis
<ul>
  <li>
      Avoir installer <a href="https://nodejs.org/en/download/current" target="_blank">Node.js</a>
  </li>
</ul>

### Installation
```
git clone https://github.com/tombruaire/gestionnaire-de-produits-nestjs
```
```
cd gestionnaire-de-produits-nestjs
```
```
npm install # Création du dosser node_modules
```
```
npm run start:dev # Lancer l'application
```
<a href="http://localhost:3000" target="_blank">http://localhost:3000</a>