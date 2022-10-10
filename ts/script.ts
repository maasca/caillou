const donner = <HTMLElement>document.getElementById("donner");
const rechercher = <HTMLElement>document.getElementById("rechercher");
const codeBarre = <HTMLInputElement>document.getElementById("recherche");
const produit = <HTMLElement>document.getElementById("imageProduit");
const qteGraisses = <HTMLOutputElement>document.getElementById("qteGraisses");
const qteSel = <HTMLOutputElement>document.getElementById("qteSel");
const qteGraissesSaturees = <HTMLOutputElement>(
  document.getElementById("qteGraissesSaturees")
);
const qteSucre = <HTMLOutputElement>document.getElementById("qteSucre");
const nutriLogo = <HTMLOutputElement>document.getElementById("nutriscoreLogo");
const ecoLogo = <HTMLOutputElement>document.getElementById("ecoscoreLogo");
const novaLogo = <HTMLOutputElement>document.getElementById("novaLogo");

let nutri: string, eco: string, nov: string, img: string;
let graisse: number, sel: number, graissesSat: number, sucre: number;

type produitData = {
  imageProduit: string;
  graisse: number;
  sel: number;
  graisseSat: number;
  sucre: number;
  nutri: string;
  eco: string;
  nova: string;
};

async function fetchProduit(codeBarre: string): Promise<produitData> {
  const url =
    "https://world.openfoodfacts.org/api/v0/product/" + codeBarre + ".json";

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.status === 1) {
        nutri = data.product.nutriscore_grade;
        eco = data.product.ecoscore_data.grade;
        nov = data.product.nova_groups;
        img = data.product.image_url;
        graisse = data.product.nutriments.fat_100g;
        sel = data.product.nutriments.salt_100g;
        graissesSat = data.product.nutriments["saturated-fat_100g"];
        sucre = data.product.nutriments.sugars_100g;
      } else {
        produit.innerHTML = "Le code barre rentré n'est pas référencé";
      }
    })
    .then(showResults);

  const response = await window.fetch(
    "https://world.openfoodfacts.org/api/v0/product/" + codeBarre + ".json",
    {
      method: "GET",
    }
  );

  type JSONResponse = {
    data?: {
      produit: produitData;
    };
    errors?: Array<{ message: string }>;
  };
  const { data, errors }: JSONResponse = await response.json();
  if (response.ok) {
    const produit = data?.produit;
    if (produit) {
      return Object.assign(produit);
    } else {
      return Promise.reject(new Error(`Erreur à déterminer`));
    }
  } else {
    const error = new Error(
      errors?.map((e) => e.message).join("\n") ?? "unknown"
    );
    return Promise.reject(error);
  }
}
function resultNutriscore() {
  switch (nutri) {
    case "a":
      nutriLogo.setAttribute("src", "./img/240px-Nutri-score-A.svg.png");
      break;
    case "b":
      nutriLogo.setAttribute("src", "./img/240px-Nutri-score-B.svg.png");
      break;
    case "c":
      nutriLogo.setAttribute("src", "./img/240px-Nutri-score-C.svg.png");
      break;
    case "d":
      nutriLogo.setAttribute("src", "./img/240px-Nutri-score-D.svg.png");
      break;
    case "e":
      nutriLogo.setAttribute("src", "./img/240px-Nutri-score-E.svg.png");
      break;
    default:
      nutriLogo.setAttribute("alt", "Nutriscore");
  }
}

function resultEcoscore() {
  switch (eco) {
    case "a":
      ecoLogo.setAttribute("src", "./img/Eco-score A.svg");
      break;
    case "b":
      ecoLogo.setAttribute("src", "./img/Eco-score B.svg");
      break;
    case "c":
      ecoLogo.setAttribute("src", "./img/Eco-score C.svg");
      break;
    case "d":
      ecoLogo.setAttribute("src", "./img/Eco-score D.svg");
      break;
    case "e":
      ecoLogo.setAttribute("src", "./img/Eco-score E.svg");
      break;
    default:
      ecoLogo.setAttribute("alt", "Ecoscore");
  }
}

function resultNova() {
  switch (nov) {
    case "1":
      novaLogo.setAttribute("src", "./img/458px-NOVA_group_1.svg.png");
      break;
    case "2":
      novaLogo.setAttribute("src", "./img/1200px-NOVA_group_2.svg.png");
      break;
    case "3":
      novaLogo.setAttribute("src", "./img/1200px-NOVA_group_3.svg.png");
      break;
    case "4":
      novaLogo.setAttribute("src", "./img/640px-NOVA_group_4.svg.png");
      break;
    default:
      novaLogo.setAttribute("alt", "Nova");
  }
}

function showResults() {
  resultNutriscore();
  resultEcoscore();
  resultNova();
  produit.setAttribute("src", img);
  qteGraisses.innerHTML = graisse + " g";
  qteSel.innerHTML = sel + " g";
  qteGraissesSaturees.innerHTML = graissesSat + " g";
  qteSucre.innerHTML = sucre + " g";
}

donner.addEventListener("click", function () {
  window.location.href =
    "https://fr.openfoodfacts.org/faire-un-don-a-open-food-facts?utm_source=off&utm_medium=web&utm_campaign=donate-2022&utm_term=en-text-button";
});

rechercher.addEventListener("click", function () {
  fetchProduit(codeBarre.value);
});
