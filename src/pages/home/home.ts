import { Component } from '@angular/core';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string = "";

  constructor(private barcodeScanner: BarcodeScanner, private iab: InAppBrowser) {


  }

  openQRScanner() {
    this.barcodeScanner.scan().then(barcodeData => {

      // get h2c url from scanned barcode
      this.url = barcodeData.text;

      // go to the url on h2c
      this.iab.create(this.url, '_system');

      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
