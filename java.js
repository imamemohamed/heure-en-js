/*je commence à recuperer le paragraphe*/
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p = document.querySelector('div');//je recupere le div

//je récupere le body puis je le met en noir
let kakka = document.body;
kakka.style.background = 'black';

//j'affiche la date du jour sur le deuxieme paragraphe
p2.innerHTML = Date();
//un evenement lors d'un clic sur le body pour m'afficher l'heure
kakka.addEventListener('click', afheure);

 p.style.color = 'black';
function afheure(){
    //setinterval sert à repeter la fonction en boucle
    setInterval(function(){
        let d = new Date();//récupere la date du jour
        p1.innerHTML = d.toLocaleTimeString();
        //toLocaleTimeString() renvoie la date en heure-min-sec
    }, 1000)
    /*apres 1000 miliseconde de clic la fonction
     sera repeter en boucle*/
    p.style.color = 'white';
    //apres le clic les elements du body sera en blanc
}


