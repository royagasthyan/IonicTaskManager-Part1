import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add.component';

@Component({
  selector: 'page-list',
  templateUrl: 'list.component.html'
})
export class ListPage {

  constructor(public modalCtrl: ModalController) {

  }

  presentAddModal() {
   let addModal = this.modalCtrl.create(AddPage);
   addModal.present();
 }

}
