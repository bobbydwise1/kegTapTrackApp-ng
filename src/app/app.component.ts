import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KegTapTrackApp';
  kegList: Keg[] = [
   new Keg("10 Barrel", "Apocalypse", 250, 6.80),
   new Keg("Anthem", "Pear Cider", 220, 5.50),
   new Keg("BUOY", "IPA", 250, 7.50),
   new Keg("Coors", "Light", 170, 4.20),
   new Keg("Lagunitas", "Sucks", 250, 8.0),
  ];
  selectedKeg = null;
  pour = null;
  maxBeerPrice = this.getMaxBeerPrice();
  minBeerPrice = this.getMinBeerPrice();

  getMaxBeerPrice(){
    let tempArray = [];
    this.kegList.forEach(function(keg){
      tempArray.push(keg.pintPrice)
    });
    return Math.max(...tempArray);
  }

  getMinBeerPrice(){
    let tempArray = [];
    this.kegList.forEach(function(keg){
      tempArray.push(keg.pintPrice)
    });
    return Math.min(...tempArray);
  }

  setCellBackgroundStyle(keg){
    let maxPrice = this.getMaxBeerPrice();
    let minPrice = this.getMinBeerPrice();
    if (((keg.pintPrice - minPrice)/(maxPrice - minPrice)) > .75){
      return 'Lightgreen';
    } else if (((keg.pintPrice - minPrice)/(maxPrice - minPrice)) > .40){
      return 'yellow';
    } else {
      return 'orange';
    }
  }

  setRowBoldStyle(keg){
    let maxPrice = this.getMaxBeerPrice();
    let minPrice = this.getMinBeerPrice();
    if (((keg.pintPrice - minPrice)/(maxPrice - minPrice)) > .75){
      return 'bold';
    } else if (((keg.pintPrice - minPrice)/(maxPrice - minPrice)) > .40){
      return 'italic';
    } else {
      return 'underlined';
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.pour = null;
  }

  createKeg(){
    this.selectedKeg = new Keg("", "", 0, 0);
  }

  finishedEditing(this.selectedKeg){
  this.kegList.push(new Keg(this.selectedKeg.beerBrand, this.selectedKeg.beerName, this.selectedKeg.price, this.selectedKeg.alcByVolume));
  this.resetTriggers();

  }

  pourOneOutForTheHomies(clickedKeg){
    this.pour = "pouring";
    this.selectedKeg = clickedKeg;
    this.selectedKeg.pourABeer();
    this.resetTriggers();
  }

  resetTriggers(){
    this.selectedKeg = null;
    this.pour = null;
  }
}
