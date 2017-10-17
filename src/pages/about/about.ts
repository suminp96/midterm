import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  friends: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public toastCtrl: ToastController) {
    this.friends = af.list('/friends');
}
addItem(){
    this.friends.push({name:'Baily', phone_number: '010-1234-1234'});
}
reset(){
  this.friends.remove();
}

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Key Value: ',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
