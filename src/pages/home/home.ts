import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { GlobalProvider } from '../../providers/global/global';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
		//arrDatas=[] as any;
	   /* spinit:boolean;
	    name: string;
	    username:string;
	    password:string;
	    email:string;
	    phonenum:string;*/
	    t;
        obj=[] as any;
	    

  constructor(public navCtrl: NavController,public navParams: NavParams,public g:GlobalProvider) {

  	       this.t=this.g.type;
           this.obj=this.g.object;
  	  		//this.spinit=false;
  	  	    //console.log(this.t);
  	  	    console.log(this.obj);	
  		//firebase.database().ref(`/tuser/${this.t}/${this.obj.key}`)
  		/*.once('value',snapshot=>{
  			this.arrDatas=[];
  			snapshot.forEach(snap=>{
  				this.arrDatas.push({key:snap.key,value:snap.val()});
  			})
  			//this.spinit=true;
  		})*/
  		//console.log(this.arrDatas);
  		//console.log(this.navParams.get('password'));
  		//this.arrDatas=this.navParams.get('email');
  		//console.log("hai");
  		//console.log(this.arrDatas);
  		/*this.name=this.navParams.get('name');
  		this.username=this.navParams.get('username');
  		this.password=this.navParams.get('password');
  		this.email=this.navParams.get('email');
  		this.phonenum=this.navParams.get('phonenum');
  		console.log(this.navParams.get('name'));*/
  		

  }


}
