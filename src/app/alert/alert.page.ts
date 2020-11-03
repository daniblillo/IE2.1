import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  styleUrls: ['alert.page.scss']
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Descripción',
      subHeader: 'I.E. 2.1',
      message: 'PROG. MULT. | La aplicación',
      buttons: ['VOLVER']
    });

    await alert.present();
  }
}

