![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


# 🚀 LearnWeb

**LearnWeb** est une plateforme de démonstration de compétences en développement web.  
Le site centralise des projets et cours utilisant des technologies modernes pour apprendre et explorer les bonnes pratiques du développement web.

---

# 📸 Aperçu

<img width="320" height="180" alt="learnweb" src="https://github.com/user-attachments/assets/c2c8bc5d-e406-4af0-9243-62df52d3614f" />

---

# 🚀 Démo

👉 [Lien vers le site](https://learnweb.oumportfolio.com/)

---

# 📝 Table des matières

- [À propos](#-à-propos)
- [Technologies utilisées](#-technologies-utilisées)
- [Fonctionnalités](#-fonctionnalités)
- [Installation & Lancement](#-installation--lancement)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Auteurs](#-auteurs)

---

# 📖 À propos

LearnWeb est un projet éducatif et de démonstration.  
Il contient des exemples concrets de développement frontend et backend avec plusieurs stacks technologiques.  
L’objectif est de fournir un site clair, structuré et moderne pour montrer les compétences en développement web.

---

# 🛠️ Technologies utilisées

- **Angular** ⚡ : Frontend dynamique et composants réutilisables  
- **Firebase** 🔥 : Authentification, base de données temps réel et stockage  
- **Node.js** 🌐 : Backend léger et gestion d’API  
- **PHP** 🐘 : Scripts serveur et gestion classique côté serveur  
- **JSON** 📄 : Manipulation et échange de données  
- **CSS3** 🎨 : Styles modernes et animations  
- **Bootstrap** 💠 : Layout responsive et composants UI
  
---

# ✨ Fonctionnalités

- Pages organisées par technologie et cours  
- Exemple de consommation d’API JSON  
- Formulaires et authentification Firebase  
- Layout responsive avec sidebar et navbar 3D  
- Déploiement sur serveur Apache ou Node.js  
- Présentation de projets frontend et backend
  
---

## ⚡ Installation & Lancement

### Prérequis

- Node.js (>= 16)  
- Angular CLI (>= 15)  
- PHP (si utilisation des scripts côté serveur)  

### Étapes

#### 1. Cloner le projet :  

```
git clone https://github.com/OumObayid/learnweb
```

#### 2. Installer les dépendances :

```
cd learnweb
npm install
```

#### 3. Lancer le serveur de développement Angular :

```
ng serve
```

#### 4. Accéder au projet :

```
http://localhost:4200
```

## 🚀 Déploiement

- Frontend Angular uniquement : copier dist/learnWeb sur un serveur Apache/Nginx
- Avec Node.js : lancer un serveur Express et pointer vers le dossier dist/learnWeb/browser
- Exemple .htaccess pour routing Angular :
  
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 👨‍💻 Auteur :
    - **Oumaima El Obayid** 
    - Email : elobayidoumaima@gmail.com --- 

---
