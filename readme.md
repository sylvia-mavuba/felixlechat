## Loki IoT Workshop

Ce workshop a pour but de réaliser un petit objet connecté qui peut se connecter à une base de donnés et pouvoir ensuite faire une appli qui récupérera/affichera les donnés en question.

### Partie Hardware

Construire un circuit électronique avec des capteurs et se servir d'un Arduino pour récupérer les données des capteurs. Puis faire communiquer l'Arduino avec le Raspberry (qui est capable d'aller sur le WiFi) pour stocker les données remontées par les capteurs dans une base de données quelque part sur Internet.

1. Circuit + Arduino
2. Upload Arduino code (plus ou moins du C)
3. Wifi Raspberry / SSH / Node …
4. serialport pour les faire communiquer ensemble


### Partie Back end / API

Développer un petit site web en Node.js + Express.js qui peut se connecter à une base de donnée Mongo. Ce site sera notre API que l'on pourra interroger sur différentes url pour récupérer les données au format JSON. Le tout hébergé quelque part … probablement sur Heroku.

1. Ce sera notre API en ligne qui contiendra toutes nos data dans une base de donnée.
2. node.js (la technologie back end)
3. [express.js](http://expressjs.com/) (le framework pour faire un site web avec Node.js)
4. [MongoDB](https://www.mongodb.com/) (pour la partie bdd - [quickstart](https://docs.mongodb.com/manual/crud/)) avec [Mongoose](http://mongoosejs.com/) (pour pouvoir faire du MongoDB avec Node.js - [quickstart](http://mongoosejs.com/docs/index.html))
5. Heroku (pour déployer une appli gratuite) + MongoLab (pour avoir une bdd MongoDB gratuite)
6. cors (pour faire du cross origin) (on ne l'a pas encore abordé)

##### Liens utiles
* Repo github bidon qui sert de modèle :  
[https://github.com/sylvia-mavuba/felixlechat](https://github.com/sylvia-mavuba/felixlechat)
* Appli Heroku bidon qui va avec :   [https://felixlechat.herokuapp.com/api/measures](https://felixlechat.herokuapp.com/api/measures) (GET)  
[https://felixlechat.herokuapp.com/api/measures/new](https://felixlechat.herokuapp.com/api/measures/new) (POST)



### Partie Front end / web app
Récupérer les dernières données en JSON en interrogeant l'API depuis un navigateurs avec une techno front du type Angular, React ou whatever!


### Autres

##### Appli iPhone / Android
Faire une petite appli pour smartphone en javascript qui sera compilée vers du code natif iOS et/ou Android. On utilisera Cordova (ou Phonegap) ou bien Ionic (qui est du Angular) pour le faire ?
Le principe sera le même, l'appli va interroger l'API en json pour pouvoir récupérer les dernières données.

##### Notifications
Mettre en place un système de push notifications ou sms ou mail ou whatever qui nous notifiera en fonction des alertes que l'on aura défini.
