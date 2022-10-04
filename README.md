# 1. Read me

Le projet recommande un certain nombre d'extensions, installez-les. Pour les lister, tapez `@recommended` dans la recherche des extensions puis cliquer sur le petit nuage pour les installer.

## 1.1. Table des matières

- [1. Read me](#1-read-me)
  - [1.1. Table des matières](#11-table-des-matières)
  - [1.2. NodeJS](#12-nodejs)
    - [1.2.1. Installation](#121-installation)
  - [1.3. Formatters](#13-formatters)
    - [1.3.1. Prettier](#131-prettier)
      - [1.3.1.1. Installation](#1311-installation)
      - [1.3.1.2. Configuration](#1312-configuration)
      - [1.3.1.3. Utilisation](#1313-utilisation)
  - [1.4. Linters](#14-linters)
    - [1.4.1. HtmlHint (HTML)](#141-htmlhint-html)
      - [1.4.1.1. Installation](#1411-installation)
      - [1.4.1.2. Configuration](#1412-configuration)
      - [1.4.1.3. Utilisation](#1413-utilisation)
    - [1.4.2. Stylelint (CSS)](#142-stylelint-css)
      - [1.4.2.1. Installation](#1421-installation)
      - [1.4.2.2. Configuration](#1422-configuration)
      - [1.4.2.3. Utilisation](#1423-utilisation)
    - [1.4.3. PostCss (CSS)](#143-postcss-css)
      - [1.4.3.1. Installation](#1431-installation)
      - [1.4.3.2. Configuration](#1432-configuration)
      - [1.4.3.3. Utilisation](#1433-utilisation)
    - [1.4.4. EsLint (JS)](#144-eslint-js)
      - [1.4.4.1. Installation](#1441-installation)
      - [1.4.4.2. Configuration](#1442-configuration)
      - [1.4.4.3. Utilisation](#1443-utilisation)
    - [1.4.5. Markdownlint (Markdown)](#145-markdownlint-markdown)
      - [1.4.5.1. Installation](#1451-installation)
      - [1.4.5.2. Configuration](#1452-configuration)
      - [1.4.5.3. Utilisation](#1453-utilisation)
  - [1.5. Documentation](#15-documentation)
    - [1.5.1. JsDoc](#151-jsdoc)
      - [1.5.1.1. Installation](#1511-installation)
      - [1.5.1.2. Configuration](#1512-configuration)
      - [1.5.1.3. Utilisation](#1513-utilisation)
  - [1.6. Qualité](#16-qualité)
    - [1.6.1. Webhint](#161-webhint)
      - [1.6.1.1. Installation](#1611-installation)
      - [1.6.1.2. Configuration](#1612-configuration)
      - [1.6.1.3. Utilisation](#1613-utilisation)
  - [1.7. Tests](#17-tests)
    - [1.7.1. Jest](#171-jest)
  - [1.8. Autres fichiers](#18-autres-fichiers)
    - [1.8.1. Browserslist](#181-browserslist)
    - [1.8.2. EditorConfig](#182-editorconfig)
  - [1.9. Pour aller plus loin](#19-pour-aller-plus-loin)
    - [1.9.1. Scss](#191-scss)
    - [1.9.2. TypeScript](#192-typescript)

## 1.2. [NodeJS](https://nodejs.org/fr/)

NodeJS va nous servir à mettre en place un certain nombre d'outils permettant de controller la qualité du code produit : lisibilité, conformité, accessibilité, performance...

### 1.2.1. Installation

Télécharger la version LTS depuis le site et installez-la.

Depuis le projet, dans le terminal de VS Code, tapez `npm i` pour installer les modules NodeJS listés dans le fichier `package.json`.

## 1.3. Formatters

Cette section présente les outils utilisés afin de controller la mise en forme du code.

### 1.3.1. [Prettier](https://prettier.io/)

Prettier est utilisé pour mettre en forme le HTML, les CSS, le JS et le Markdown.

#### 1.3.1.1. Installation

Prettier a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.3.1.2. Configuration

Le fichier `.prettierrc` permet de régler la configuration de Prettier.

#### 1.3.1.3. Utilisation

L'extension Prettier présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx prettier -c .` pour vérifier si des fichiers HTML, CSS, JS ou Markdown ne sont pas formatés.

## 1.4. Linters

Cette section présente les outils utilisés afin de controler la qualité du code.

### 1.4.1. [HtmlHint](https://htmlhint.com/) (HTML)

HtmlHint est utilisé pour contrôler la conformité du code HTML.

#### 1.4.1.1. Installation

HtmlHint a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.4.1.2. Configuration

Le fichier `.htmlhintrc` permet de régler la configuration d'HtmlHint.

#### 1.4.1.3. Utilisation

L'extension HtmlHint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx htmlhint **/*.html` pour vérifier si des fichiers HTML ne sont pas conformes.

### 1.4.2. [Stylelint](https://stylelint.io/) (CSS)

Stylelint est utilisé pour contrôler la conformité du code CSS.

#### 1.4.2.1. Installation

Stylelint a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.4.2.2. Configuration

Le fichier `.stylelintrc` permet de régler la configuration de Stylelint.

#### 1.4.2.3. Utilisation

L'extension Stylelint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx stylelint ./css/**/*.css -f verbose` pour vérifier si des fichiers ne sont pas conformes.

### 1.4.3. [PostCss](https://postcss.org/) (CSS)

PostCSS est utilisé pour améliorer la qualité du code CSS.

#### 1.4.3.1. Installation

PostCss a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.4.3.2. Configuration

Le fichier `postcss.config.js` premet de régler la configuration de PostCSS.

#### 1.4.3.3. Utilisation

L'extension Stylelint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx postcss **/*.css -r` pour appeler PostCSS et réécrire les fichiers CSS.

Les plugins installés sont :

- postcss-sorting qui trie les instructions par ordre alphabétique ;
- autoprefixer qui rajoute les instructions dite /vendors/ si le support n'est pas présent sur tous les navigateurs.

### 1.4.4. [EsLint](https://eslint.org/) (JS)

EsLint est utilisé pour contrôler la conformité du code JS.

#### 1.4.4.1. Installation

EsLint a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.4.4.2. Configuration

Le fichier `.eslintrc` permet de régler la configuration d'EsLint. Ce fichier peut être généré en tapant `npx eslint --init` et en répondant aux questions.

#### 1.4.4.3. Utilisation

L'extension EsLint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx eslint js/**/*.js` pour vérifier si des fichiers JS ne sont pas conformes.

### 1.4.5. [Markdownlint](https://github.com/DavidAnson/markdownlint) (Markdown)

Markdownlint est utilisé pour contrôler la conformité du code Markdown.

#### 1.4.5.1. Installation

Markdownlint a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.4.5.2. Configuration

Le fichier `.markdownlintrc` permet de régler la configuration de Markdownlint.

#### 1.4.5.3. Utilisation

L'extension Markdownlint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx markdownlint **/*.md` pour vérifier si des fichiers Markdown ne sont pas conformes.

## 1.5. Documentation

Cette section présente les outils utilisés afin de documenter le code.

### 1.5.1. [JsDoc](https://jsdoc.app/)

JsDoc est utilisé pour documenter le code JS.

#### 1.5.1.1. Installation

JsDoc a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.5.1.2. Configuration

Le fichier `.jsdoc.json` permet de régler la configuration de JsDoc.

#### 1.5.1.3. Utilisation

L'extension DocumentThis présente dans VS Code si vous avez installé les extensions recommandées premet de documenter le code. Il suffit de taper `/**` et la touche `Entrée` ou `Tabulation` au dessus d'une fonction pour générer la documentation de cette fonction.

Tapez dans le terminal `npx jsdoc -c .jsdoc.json --verbose` pour générer la documentation. Le résultat sera accessible sur `http://127.0.0.1:5501/docs/`.

## 1.6. Qualité

### 1.6.1. [Webhint](https://webhint.io/)

Webhint est utilisé pour tester la qualité (accessibilité, performance, compatibilité) des code HTML, CSS et JS.

#### 1.6.1.1. Installation

Webhint a été installé quand vous avez tapé `npm i` dans le terminal.

#### 1.6.1.2. Configuration

Le fichier `.hintrc` permet de régler la configuration de Webhint.

#### 1.6.1.3. Utilisation

L'extension Webhint présente dans VS Code si vous avez installé les extensions recommandées se charge de tout. Vous pouvez quand même tapez dans le terminal `npx hint http://localhost:5501/` pour vérifier si des critères ne sont pas respectés. Le résultat sera accessible sur `http://127.0.0.1:5501/hint-report/http-localhost-5501.html`.

## 1.7. Tests

### 1.7.1. Jest

`npx jest --init`

## 1.8. Autres fichiers

### 1.8.1. [Browserslist](https://github.com/browserslist/browserslist)

Le fichier `.browserslistrc` indique à divers outils comme Stylelint ou PostCSS quels sont les navigateurs que l'on souhaite supporter dans l'application.

### 1.8.2. [EditorConfig](https://editorconfig.org/)

Le fichier `.editorconfig` indique les réglages que l'éditeur, VS Code dans notre cas, doit adopter.

## 1.9. Pour aller plus loin

### 1.9.1. [Scss](https://sass-lang.com/)

Scss a été installé quand vous avez tapé `npm i` dans le terminal.

`npx sass scss:scss`

`npx stylelint ./scss/**/*.scss -f verbose`

`npx postcss **/*.scss -r`

### 1.9.2. [TypeScript](https://www.typescriptlang.org/)

`npx tsc`

`npx eslint ts/**/*.ts`
