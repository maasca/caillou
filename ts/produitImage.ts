export class ProduitImage {
  imageProduit: string;
  nutri: string;
  eco: string;
  nova: string;

  constructor(imageProduit: string, nutri: string, eco: string, nova: string) {
    this.imageProduit = imageProduit;
    this.nova = nova;
    this.eco = eco;
    this.nutri = nutri;
  }
}

export function getProduitImage(data: any) {
  const produit = new ProduitImage(
    data.product.image_url,
    data.product.nutriscore_grade,
    data.product.ecoscore_data.grade,
    data.product.nova_groups
  );
  const imageProduit = <HTMLElement>document.getElementById("imageProduit");
  const nutriLogo = <HTMLOutputElement>(
    document.getElementById("nutriscoreLogo")
  );
  const ecoLogo = <HTMLOutputElement>document.getElementById("ecoscoreLogo");
  const novaLogo = <HTMLOutputElement>document.getElementById("novaLogo");
  imageProduit.setAttribute("src", produit.imageProduit);
  nutriLogo.setAttribute(
    "src",
    "/img/240px-Nutri-score-" + produit.nutri + ".svg.png"
  );
  ecoLogo.setAttribute("src", "/img/Eco-score " + produit.eco + ".svg");
  novaLogo.setAttribute("src", "/img/NOVA_group_" + produit.nova + ".svg.png");
}
