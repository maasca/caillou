export class ProduitInfo {
  graisse: number;
  sel: number;
  graissesSat: number;
  sucre: number;

  constructor(
    graisse: number,
    sel: number,
    graissesSat: number,
    sucre: number
  ) {
    this.graisse = graisse;
    this.sel = sel;
    this.graissesSat = graissesSat;
    this.sucre = sucre;
  }
}

export function getProduitInfo(data: any) {
  const produit = new ProduitInfo(
    data.product.nutriments.fat_100g,
    data.product.nutriments.salt_100g,
    data.product.nutriments["saturated-fat_100g"],
    data.product.nutriments.sugars_100g
  );
  const qteGraisses = <HTMLOutputElement>document.getElementById("qteGraisses");
  const qteSel = <HTMLOutputElement>document.getElementById("qteSel");
  const qteGraissesSaturees = <HTMLOutputElement>(
    document.getElementById("qteGraissesSaturees")
  );
  const qteSucre = <HTMLOutputElement>document.getElementById("qteSucre");

  qteGraisses.innerHTML = produit.graisse + " g";
  qteSel.innerHTML = produit.sel + " g";
  qteGraissesSaturees.innerHTML = produit.graissesSat + " g";
  qteSucre.innerHTML = produit.sucre + " g";
}
