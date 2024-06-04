// Tableau des couleurs des dragodindes
const couleursDragodindes = [
    "Dragodinde Rousse",
    "Dragodinde Amande",
    "Dragodinde Dorée",
    "Dragodinde Ebène",
    "Dragodinde Indigo",
    "Dragodinde Orchidée",
    "Dragodinde Pourpre",
    "Dragodinde Emeraude",
    "Dragodinde Ivoire",
    "Dragodinde Turquoise",
    "Dragodinde Amande et Dorée",
    "Dragodinde Amande et Ebène",
    "Dragodinde Amande et Indigo",
    "Dragodinde Amande et Orchidée",
    "Dragodinde Amande et Pourpre",
    "Dragodinde Amande et Emeraude",
    "Dragodinde Amande et Ivoire",
    "Dragodinde Amande et Turquoise",
    "Dragodinde Dorée et Ebène",
    "Dragodinde Dorée et Indigo",
    "Dragodinde Dorée et Orchidée",
    "Dragodinde Dorée et Pourpre",
    "Dragodinde Dorée et Emeraude",
    "Dragodinde Dorée et Ivoire",
    "Dragodinde Dorée et Turquoise",
    "Dragodinde Ebène et Indigo",
    "Dragodinde Ebène et Orchidée",
    "Dragodinde Ebène et Pourpre",
    "Dragodinde Ebène et Emeraude",
    "Dragodinde Ebène et Ivoire",
    "Dragodinde Ebène et Turquoise",
    "Dragodinde Indigo et Orchidée",
    "Dragodinde Indigo et Pourpre",
    "Dragodinde Indigo et Emeraude",
    "Dragodinde Indigo et Ivoire",
    "Dragodinde Indigo et Turquoise",
    "Dragodinde Orchidée et Pourpre",
    "Dragodinde Orchidée et Emeraude",
    "Dragodinde Orchidée et Ivoire",
    "Dragodinde Orchidée et Turquoise",
    "Dragodinde Pourpre et Emeraude",
    "Dragodinde Pourpre et Ivoire",
    "Dragodinde Pourpre et Turquoise",
    "Dragodinde Emeraude et Ivoire",
    "Dragodinde Emeraude et Turquoise",
    "Dragodinde Ivoire et Turquoise",
    "Dragodinde Prune",
    "Dragodinde Prune et Amande",
    "Dragodinde Prune et Dorée",
    "Dragodinde Prune et Ebène",
    "Dragodinde Prune et Indigo",
    "Dragodinde Prune et Orchidée",
    "Dragodinde Prune et Pourpre",
    "Dragodinde Prune et Emeraude",
    "Dragodinde Prune et Ivoire",
    "Dragodinde Prune et Turquoise"
];

// Fonction pour peupler les options de couleur
function populateColorOptions(selectElement) {
    couleursDragodindes.forEach(couleur => {
        let option = document.createElement('option');
        option.value = couleur;
        option.text = couleur;
        selectElement.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const selects = document.querySelectorAll('select.color-select');
    selects.forEach(select => populateColorOptions(select));
});

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
            <label>Couleur: </label><select class="color-select couleur-dd"></select><br>
            <label>Prédisposée génétique: </label><input type="checkbox" class="predispo-dd"><br>
            <button onclick="enregistrerDragodinde(this)">Enregistrer</button>
        </div>
    `;
    dragodindesList.innerHTML += dragodindeForm;
    const newSelect = dragodindesList.querySelector('.dragodinde:last-child .color-select');
    populateColorOptions(newSelect);
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
