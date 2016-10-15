import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SMS } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    SMS.send('416123456', 'Hello world!',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }
}
