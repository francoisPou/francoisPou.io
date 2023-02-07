/**
 * Redirige l'utilisateur vers une page dans un nouveau onglet on non.
 * @param {Text} lien
 * @param {boolean} nouveauOnglet 
 */
function RedirectionJavascript(lien,nouveauOnglet=false){
    // Fonction permettant de renvoyer vers une autre page
    if (nouveauOnglet) {
        window.open(lien,'_blank')
    } else {
        document.location.href=lien; 
    }
}

/**
 * Cache un élément html
 * 
 * @param {html} element 
 */
function cacherElt(element) {
    element.style.display = "none";
}

/**
 * Affiche un élément html
 * 
 * @param {html} element 
 */
function afficherElt(element) {
    element.style.display = "block";
}

/**
 * Affiche un élément html avec une animation de glissade
 * de bas en haut.
 * 
 * @param {html} element 
 */
function glissade(element) {
    let margin = 500;
    element.style.margin = margin + "px 0px 0px 0px";
    afficherElt(element);
    const intervalId = setInterval(() => {
        margin -= 10;
        element.style.margin = margin + "px 0px 0px 0px";
        if (margin < 0) {
            clearInterval(intervalId);
        }
    }, 5);
}

/**
 * Fonction utiliser sur les boutons de bootstrap.
 * Si le bouton est bleu (btn-primary), il devient gris (btn-secondary)
 * Si le bouton est gris (btn-secondary), il devient bleu (btn-primary)
 * 
 * @param {html} element 
 */
function toggleCouleurBtn(element) {
    if (element.classList.contains("btn-primary")) {
        element.classList.remove("btn-primary");
        element.classList.add("btn-secondary");
    } else {
        element.classList.remove("btn-secondary");
        element.classList.add("btn-primary");
    }
}

/**
 * Affiche un élément html si il est caché
 * Cache un élément html si il est affiché
 * 
 * @param {html} element 
 */
function toggleAffichage(element) {
    if (estCacher(element)) {
        afficherElt(element);
    } else {
        cacherElt(element);
    }
}

/**
 * On utilise fa-spin de fontawesome pour faire tourner un element html
 * 
 * Si l'élément html contient la classe fa-spin, on la supprime
 * Sinon on l'ajoute
 * 
 * @param {html} html 
 */
function toggleSpin(html) {
    if (html.classList.contains("fa-spin")) {
        html.classList.remove("fa-spin");
    } else {
        html.classList.add("fa-spin");
    }    
}

/**
 * Retourne true si l'élément est affiché, false sinon
 * 
 * @param {html} element 
 * @returns {boolean} true si l'élément est affiché, false sinon
 */
function estAfficher(element) {
    return !estCacher(element)
}

/**
 * Retourne true si l'élément est caché, false sinon
 * 
 * @param {html} element 
 * @returns {boolean} true si l'élément est caché, false sinon
 */
function estCacher(element) {
    return element.style.display === "none";
}



// Début du code js exécuté au chargement de la page
document.addEventListener('DOMContentLoaded', function() {  // Attente que le DOM soit prêt
    
    console.log("Je démarre le code js");

    switch (document.title) {
        case "Accueil":
            jsPageAcceuil();
            break;
        case "Développeur Back-end":
            jsPageDevBackEnd();
            break;
        default:
            console.log("La page n'est pas connue");
            break;
    }

    function jsPageAcceuil() {
        console.log("Je suis sur la page d'accueil");
        var BtnEnSavoirPlusDevBackEnd = document.getElementById('savoirPlusDevBackEnd')
        
        BtnEnSavoirPlusDevBackEnd.addEventListener('click', function(e) {
            RedirectionJavascript("src/devBackEnd.html")
        });
    }

    function jsPageDevBackEnd() {
        console.log("Je suis sur la page des compétences");

        var e = 0

        var titreDevBackEnd = document.getElementById('titreDiv')

        /*I Récupérer les boutons */
        var BtnSecteurActivite = document.getElementById('btnSecteurActivite')
        var BtnFormation = document.getElementById('btnFormation')
        var BtnOuExercer = document.getElementById('btnOuExercer')
        var BtnCompetence = document.getElementById('btnCompetence')
        var BtnSalaires = document.getElementById('btnSalaire')
        var BtnEvolutionPro = document.getElementById('btnEvolutionPro')

        /*I Récupérer les divs */
        var DivSecteurActivite = document.getElementById('infoSecteurActivite')
        var DivFormation = document.getElementById('infoFormation')
        var DivOuExercer = document.getElementById('infoOuExercer')
        var DivCompetence = document.getElementById('infoCompetence')
        var DivSalaires = document.getElementById('infoSalaire')
        var DivEvolutionPro = document.getElementById('infoEvolutionPro')

        /*I Cacher les divs */
        cacherElt(DivSecteurActivite)
        cacherElt(DivFormation)
        cacherElt(DivOuExercer)
        cacherElt(DivCompetence)
        cacherElt(DivSalaires)
        cacherElt(DivEvolutionPro)

        /*I Ajouter les écouteurs d'événements */
        BtnSecteurActivite.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnSecteurActivite.firstElementChild)
            toggleAffichage(DivSecteurActivite)
        });

        BtnFormation.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnFormation.firstElementChild)
            toggleAffichage(DivFormation)
            btnFormationAEteClique()
        });

        BtnOuExercer.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnOuExercer.firstElementChild)
            toggleAffichage(DivOuExercer)
        });

        BtnCompetence.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnCompetence.firstElementChild)
            toggleAffichage(DivCompetence)
        });

        BtnSalaires.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnSalaires.firstElementChild)
            toggleAffichage(DivSalaires)
        });

        BtnEvolutionPro.addEventListener('click', function(e) {
            toggleCouleurBtn(BtnEvolutionPro.firstElementChild)
            toggleAffichage(DivEvolutionPro)
        });

        /* Fait tourner le titre  si on le clique*/
        titreDevBackEnd.addEventListener('click', function(e) {
            toggleSpin(titreDevBackEnd)
        });

        function btnFormationAEteClique() {
            e++
            if (10 === e) {
                toggleSpin(BtnSecteurActivite.firstElementChild)
                toggleSpin(BtnFormation.firstElementChild)
                toggleSpin(BtnOuExercer.firstElementChild)
                toggleSpin(BtnCompetence.firstElementChild)
                toggleSpin(BtnSalaires.firstElementChild)
                toggleSpin(BtnEvolutionPro.firstElementChild)
            } else if (e === 12) {
                toggleSpin(BtnSecteurActivite.firstElementChild)
                toggleSpin(BtnFormation.firstElementChild)
                toggleSpin(BtnOuExercer.firstElementChild)
                toggleSpin(BtnCompetence.firstElementChild)
                toggleSpin(BtnSalaires.firstElementChild)
                toggleSpin(BtnEvolutionPro.firstElementChild)
            }
        }
    }
}); // Fin de l'attente que le DOM soit prêt