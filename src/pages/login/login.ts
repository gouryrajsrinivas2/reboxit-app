import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('email') email;
	@ViewChild('password') password;
  @ViewChild('all') all;
  arrDatas=[] as any;
  spinit:boolean;
  temp=[] as any;
  


  constructor( public g:GlobalProvider,  private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

             /* this.spinit=false;

      firebase.database().ref('/tuser/user/')
      .once('value',snapshot=>{
        this.arrDatas=[];
        //this.temp=[];
        snapshot.forEach(snap=>{
          this.arrDatas.push({key:snap.key,value:snap.val()});
        })
        this.spinit=true;
      })
      console.log(this.arrDatas);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    navpage(){
       //console.log(this.all.value);
      this.spinit=false;

      firebase.database().ref(`/tuser/${this.all.value}/`)
      .once('value',snapshot=>{
        this.arrDatas=[];
        //this.temp=[];
        snapshot.forEach(snap=>{
          this.arrDatas.push({key:snap.key,value:snap.val()});
        })
        this.spinit=true;
      })
      //console.log(this.arrDatas);
             

      console.log(this.arrDatas);
      for (let item of this.arrDatas) {
        console.log(item.value.email);
        if(item.value.email==this.email.value){
          if(item.value.password==this.password.value){
              this.temp=item;
              this.g.object=this.temp;
              this.g.type=this.all.value;
              this.navCtrl.setRoot(HomePage,this.temp.value);

              console.log(this.temp);

           }
           else{
            this.alert("wrong password");
           }
        }
        else{
          this.alert("email not found");
        }

         

         
          //console.log(temp);

        
      }

    	/*this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    	  	.then(
  		
  		data=>{console.log('loged in',this.fire.auth.currentUser);
  		//this.alert('hey you are logged in');
  		this.navCtrl.setRoot(HomePage);
  	})
  	.catch(error=>{
  		console.log("error",error);
  		this.alert(error.message);
  	
  	});*/
  	
  }

  sample(){
  	this.navCtrl.setRoot(SignupPage)
  }
    alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }

}
