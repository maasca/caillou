import { ProduitData } from "./produitData.js";
import { getProduitInfo } from "./produitInfo.js";
import { getProduitImage } from "./produitImage.js";

const rechercher = <HTMLElement>document.getElementById("rechercher");
const recherche = <HTMLInputElement>document.getElementById("recherche");
const imageProduit = <HTMLInputElement>document.getElementById("imageProduit");

rechercher.addEventListener("click", afficher);

async function afficher() {
  const url =
    "https://world.openfoodfacts.org/api/v0/product/" +
    recherche.value +
    ".json";
  fetch(url)
    .then((response: Response) => response.json())
    .then((data: ProduitData) => {
      if (data.status === 1) {
        getProduitImage(data);
        getProduitInfo(data);
      } else {
        imageProduit.setAttribute("src", "");
        imageProduit.innerHTML = "Le code barre rentré n'est pas référencé";
        // alert("Le code barre rentré n'est pas référencé");
      }
    });
}
