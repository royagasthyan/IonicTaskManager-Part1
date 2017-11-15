import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
