import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FamilyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-details',
  templateUrl: 'family-details.html',
})
export class FamilyDetailsPage {
  familyDetail: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.familyDetail = navParams.data.familyDetails;
    console.log(this.familyDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyDetailsPage');
  }

}
