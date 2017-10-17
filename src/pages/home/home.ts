import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addresses: Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  add(){
    this.addresses.push({name:'Grandfather', phone_number: '010-1234-0004', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 행복관', status: 'default'});
  }
  favorite(address: any){
    address.status = "favorite";
  }
  remove(address: any){
    address.status = "removed";
    let index = this.addresses.indexOf(address);
    if(index > -1){
      this.addresses.splice(index, 1);
    }
  }
  initializeItems(){
    this.addresses = [
      {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관', status: 'default'},
      {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관', status: 'default'},
      {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관', status: 'default'},
      {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관', status: 'default'}
      ];
  }
  getItems(address: any){
    this.initializeItems();
    let val = address.target.value;
    if(val && val.trim() != ''){
      this.addresses = this.addresses.filter((address) => {
        return (address.toLowercase().indexOf(val.toLowercase())>-1);
      })
    }
  }
  goDetails(address: any){
    this.navCtrl.push("FamilyDetailsPage", {familyDetails: address})
  }
}
