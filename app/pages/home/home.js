import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor() {

  }

  sendSMS(){
  	console.log("sending SMS");
  	var number = 123456;
    var message = "This Is An SMS Message";
    var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
              intent: 'INTENT'  // send SMS with the native android SMS messaging
              //intent: '' // send SMS without open any other app
            }
        };

      var success = function () { console.log('Message sent successfully'); };
      var error = function () { console.log('Message Failed:'); };

	 sms.send(number, message, options, success, error);

  }


}
