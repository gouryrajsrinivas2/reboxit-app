import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the PaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paper',
  templateUrl: 'paper.html',
})
export class PaperPage {
	myVal
	vare:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.myVal)
  //}
  //public getImage(){
    //try{
      firebase.storage().ref().child('folder/Unknown-1.jpeg').getDownloadURL().then((url)=>{
        console.log("image")
        console.log("log1: " + url);
        this.vare= url;
      })
   // }
    .catch((e)=>{
      console.log(e);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaperPage');
  }
  /*checkSome(ev){
  	console.log(ev);
  	this.myVal=ev.val()
  }*/

}
