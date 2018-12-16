import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { GlobalProvider } from '../../providers/global/global';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  t;
  obj=[] as any;
  data={location:'',add1:'',add2:'',city:'',pincode:'',slots:''};
  constructor(public g:GlobalProvider,public alertCtrl:AlertController){
    console.log("book class");
    console.log(this.g.object);


  }
   book() {

       this.t=this.g.type;
       this.obj=this.g.object;
       //console.log(this.data.name);
       const ref1 = firebase.database().ref(`/tuser/${this.t}/${this.obj.key}/address`);
        ref1.push({
       location:this.data.location,add1:this.data.add1,add2:this.data.add2,city:this.data.city,pincode:this.data.pincode,slots:this.data.slots
     
    });
      
        this.alert('You are Sucessfully booked up');
     
  }
  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
   }
  /*selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }*/

}
