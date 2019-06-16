export class Item {

  imageUrl: string;
  manifestId: number;
  name: string;
  rarity: string;
  storeCategory: string;
  vBucks: number;


  constructor(imageUrl: string, manifestId: number, name: string, rarity: string, storeCategory: string, vBucks: number) {
    this.imageUrl = imageUrl;
    this.manifestId = manifestId;
    this.name = name;
    this.rarity = rarity;
    this.storeCategory = storeCategory;
    this.vBucks = vBucks;
  }
}
