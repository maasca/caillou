const recherche = document.getElementById("recherche");
const rechercher = document.getElementById("rechercher");

const nutriscore = document.getElementById("nutriscoreLogo");
const ecoscore = document.getElementById("ecoscoreLogo");
const nova = document.getElementById("novaLogo");

const imageProduit = document.getElementById("imageProduit");

let nutri, eco, nov, img;
let graisse, sel, graissesSat, sucre;

const qteGraisses = document.getElementById("qteGraisses");
const qteSel = document.getElementById("qteSel");
const qteGraissesSaturees = document.getElementById("qteGraissesSaturees");
const qteSucre = document.getElementById("qteSucre");

const donner = document.getElementById("donner");

rechercher.addEventListener("click", search);

function search() {
  const url =
    "https://world.openfoodfacts.org/api/v0/product/" +
    recherche.value +
    ".json";

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.status == 1) {
        nutri = data.product.nutriscore_grade;
        eco = data.product.ecoscore_data.grade;
        nov = data.product.nova_groups;
        img = data.product.image_url;
        graisse = data.product.nutriments.fat_100g;
        sel = data.product.nutriments.salt_100g;
        graissesSat = data.product.nutriments["saturated-fat_100g"];
        sucre = data.product.nutriments.sugars_100g;
      } else {
        imageProduit.innerHTML = "Le code barre rentré n'est pas référencé";
      }
    })
    .then(showResults);
}
function resultNutriscore() {
  switch (nutri) {
    case "a":
      nutriscore.setAttribute("src", "./img/240px-Nutri-score-A.svg.png");
      break;
    case "b":
      nutriscore.setAttribute("src", "./img/240px-Nutri-score-B.svg.png");
      break;
    case "c":
      nutriscore.setAttribute("src", "./img/240px-Nutri-score-C.svg.png");
      break;
    case "d":
      nutriscore.setAttribute("src", "./img/240px-Nutri-score-D.svg.png");
      break;
    case "e":
      nutriscore.setAttribute("src", "./img/240px-Nutri-score-E.svg.png");
      break;
    default:
      nutriscore.setAttribute("alt", "Nutriscore");
  }
}

function resultEcoscore() {
  switch (eco) {
    case "a":
      ecoscore.setAttribute("src", "./img/Eco-score A.svg");
      break;
    case "b":
      ecoscore.setAttribute("src", "./img/Eco-score B.svg");
      break;
    case "c":
      ecoscore.setAttribute("src", "./img/Eco-score C.svg");
      break;
    case "d":
      ecoscore.setAttribute("src", "./img/Eco-score D.svg");
      break;
    case "e":
      ecoscore.setAttribute("src", "./img/Eco-score E.svg");
      break;
    default:
      ecoscore.setAttribute("alt", "Ecoscore");
  }
}

function resultNova() {
  switch (nov) {
    case "1":
      nova.setAttribute("src", "./img/458px-NOVA_group_1.svg.png");
      break;
    case "2":
      nova.setAttribute("src", "./img/1200px-NOVA_group_2.svg.png");
      break;
    case "3":
      nova.setAttribute("src", "./img/1200px-NOVA_group_3.svg.png");
      break;
    case "4":
      nova.setAttribute("src", "./img/640px-NOVA_group_4.svg.png");
      break;
    default:
      nova.setAttribute("alt", "Nova");
  }
}

function showResults() {
  resultNutriscore();
  resultEcoscore();
  resultNova();
  imageProduit.setAttribute("src", img);
  qteGraisses.innerHTML = graisse + " g";
  qteSel.innerHTML = sel + " g";
  qteGraissesSaturees.innerHTML = graissesSat + " g";
  qteSucre.innerHTML = sucre + " g";
}

donner.addEventListener("click", goTo);

function goTo() {
  window.location.href =
    "https://fr.openfoodfacts.org/faire-un-don-a-open-food-facts?utm_source=off&utm_medium=web&utm_campaign=donate-2022&utm_term=en-text-button";
}
