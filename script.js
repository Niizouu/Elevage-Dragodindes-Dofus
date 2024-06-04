// Fonction pour calculer les probabilités
function calculer() {
    let agpPere = document.getElementById("agp-pere").value;
    let agpMere = document.getElementById("agp-mere").value;
    let gpPere = document.getElementById("gp-pere").value;
    let gpMere = document.getElementById("gp-mere").value;
    let pPere = document.getElementById("p-pere").value;
    let pMere = document.getElementById("p-mere").value;
    let energieMale = parseInt(document.getElementById("energie-male").value);
    let energieFemelle = parseInt(document.getElementById("energie-femelle").value);

    // Logique de calcul des probabilités (à implémenter)

    // Affichage des résultats
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>Résultats des calculs...</p>`;
}

// Fonction pour ajouter une dragodinde
function ajouterDragodinde() {
    let dragodindesList = document.getElementById("dragodindes-list");
    let dragodindeForm = `
        <div class="dragodinde">
            <label>Nom: </label><input type="text" class="nom-dd"><br>
            <label>Sexe: </label><select class="sexe-dd"><option value="male">Mâle</option><option value="femelle">Femelle</option></select><br>
            <label>Énergie: </label><input type="number" class="energie-dd"><br>
            <label>Couleur: </label><select class="couleur-dd"><!-- Ajoutez les options ici --></select><br>
            <label>Prédisposée génétique: </label><input type="checkbox" class="predispo-dd"><br>
            <button onclick="enregistrerDragodinde(this)">Enregistrer</button>
        </div>
    `;
    dragodindesList.innerHTML += dragodindeForm;
}

// Fonction pour enregistrer une dragodinde
function enregistrerDragodinde(button) {
    let parent = button.parentNode;
    let nom = parent.querySelector('.nom-dd').value;
    let sexe = parent.querySelector('.sexe-dd').value;
    let energie = parent.querySelector('.energie-dd').value;
    let couleur = parent.querySelector('.couleur-dd').value;
    let predispo = parent.querySelector('.predispo-dd').checked;

    // Sauvegarder les informations de la dragodinde (par exemple, dans une base de données ou un tableau)
}
