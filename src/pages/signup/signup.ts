import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import firebase from 'firebase';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	data={users:'',name:'',email:'',username:'',password:'',phonenum:''};
	//ref = firebase.database().ref('/users/');

	//users

  constructor(private fire:AngularFireAuth, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
    sign() {

    	 console.log(this.data.name);
    	 const ref1 = firebase.database().ref(`/tuser/${this.data.users}`);
        ref1.push({
       name:this.data.name,email:this.data.email,username:this.data.username,password:this.data.password,phonenum:this.data.phonenum
      //name:this.data.name
    });
       // this.fire.auth.createUserWithEmailAndPassword(this.data.email,this.data.password);
        this.alert('You are Sucessfully signed up');
    	

    /*const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'Your are succesfully registered',
      buttons: ['OK']
    });
    alert.present();*/
  }
  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
 }
  goback(){
  	this.navCtrl.setRoot(LoginPage)
  }

}
