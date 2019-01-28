class Keg {
  public pintPrice : number = (Math.round(this.price/124 * 4 * 3 ) / 4);
  public pintPriceString : string = this.pintPrice.toFixed(2);
  public poursRemaining : number  = 124;
  public percentBeerRemaining : number = 0;
  constructor(public beerBrand: string, public beerName: string , public price: number, public alcByVolume: number){

  }

  pourABeer(){
    this.poursRemaining--;
  }

  percentRemaining(){
    return this.poursRemaining/124*100;
  }
}

export { Keg }
